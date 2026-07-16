// Pulls GitHub profile, repos, languages and contributions into src/data/github.json
// so the static export ships with real data and never calls the API at runtime.
//
//   node scripts/fetch-github.mjs
//
// Reads a token from GITHUB_TOKEN or ~/.gh_portfolio_token when present, which adds
// private repos and lets the contribution graph come from GitHub's own GraphQL API.
// Without a token it still works, using public REST plus a public contributions proxy.

import { writeFile, readFile } from "node:fs/promises";
import { homedir } from "node:os";
import { join } from "node:path";

const USER = "sushantkr961";
const OUT = join(process.cwd(), "src/data/github.json");
const START_YEAR = 2022;

/**
 * Whether private repos are NAMED in the published output.
 *
 * Off by default, and deliberately not an env var — flipping this publishes repo names,
 * descriptions and timestamps to a public site, including repos owned by clients and
 * employers who never consented to appear there. It should take an intentional code edit
 * and a review, not a stray shell variable.
 *
 * Private repos still count toward every aggregate (repo totals, language volume,
 * contribution graph) with this off. Listing them by name adds nothing a visitor can use —
 * the links 404 for everyone but the owner — so the default trades nothing away.
 */
const PUBLISH_PRIVATE_NAMES = false;

async function resolveToken() {
  if (process.env.GITHUB_TOKEN) return process.env.GITHUB_TOKEN.trim();
  try {
    return (await readFile(join(homedir(), ".gh_portfolio_token"), "utf8")).trim();
  } catch {
    return null;
  }
}

const token = await resolveToken();

const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": `${USER}-portfolio-build`,
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * GET with rate-limit awareness. Unauthenticated callers get 60 req/hr, which this
 * script exhausts on its own — so a 403/429 is waited out rather than swallowed.
 * Everything else throws: partial data here silently becomes a wrong statistic on
 * the live site, which is worse than a failed build.
 */
async function gh(path, { attempt = 0 } = {}) {
  const res = await fetch(`https://api.github.com${path}`, { headers });

  if (res.status === 403 || res.status === 429) {
    const remaining = res.headers.get("x-ratelimit-remaining");
    const reset = Number(res.headers.get("x-ratelimit-reset")) * 1000;
    const waitMs = Math.max(0, reset - Date.now()) + 2000;

    if (remaining === "0" && attempt < 2 && waitMs < 65 * 60 * 1000) {
      const mins = Math.ceil(waitMs / 60000);
      console.warn(
        `  rate limit reached — waiting ${mins} min for reset` +
          (token ? "" : " (set GITHUB_TOKEN to raise the limit to 5000/hr and skip this)"),
      );
      await sleep(waitMs);
      return gh(path, { attempt: attempt + 1 });
    }
    throw new Error(
      `GitHub rate limit hit on ${path}. ` +
        `Re-run with GITHUB_TOKEN set, or wait for the limit to reset.`,
    );
  }

  if (!res.ok) throw new Error(`GET ${path} -> ${res.status} ${res.statusText}`);
  return res.json();
}

/** Contribution calendar. GraphQL when authed (exact, includes private), proxy otherwise. */
async function fetchContributions(year) {
  if (token) {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query($user:String!,$from:DateTime!,$to:DateTime!){
          user(login:$user){ contributionsCollection(from:$from,to:$to){
            contributionCalendar{ totalContributions
              weeks{ contributionDays{ date contributionCount } } } } } }`,
        variables: {
          user: USER,
          from: `${year}-01-01T00:00:00Z`,
          to: `${year}-12-31T23:59:59Z`,
        },
      }),
    });
    if (res.ok) {
      const body = await res.json();
      const cal = body?.data?.user?.contributionsCollection?.contributionCalendar;
      if (cal) {
        return {
          total: cal.totalContributions,
          days: cal.weeks.flatMap((w) =>
            w.contributionDays.map((d) => ({ date: d.date, count: d.contributionCount })),
          ),
        };
      }
    }
  }

  const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${USER}?y=${year}`);
  if (!res.ok) return { total: 0, days: [] };
  const body = await res.json();
  const days = (body.contributions ?? []).map((d) => ({ date: d.date, count: d.count }));
  return { total: days.reduce((sum, d) => sum + d.count, 0), days };
}

/**
 * GitHub buckets days into 5 levels; derive thresholds from the period's own max.
 * Counts are coerced defensively: a single non-numeric count would make `max` NaN and
 * poison every other day's level, which renders as an invisible heatmap rather than an error.
 */
function withLevels(days) {
  const clean = days.map((d) => ({
    date: d.date,
    count: Number.isFinite(d.count) ? d.count : 0,
  }));
  const max = Math.max(1, ...clean.map((d) => d.count));
  return clean.map((d) => ({
    ...d,
    level: d.count > 0 ? Math.min(4, Math.ceil((d.count / max) * 4)) : 0,
  }));
}

console.log(token ? "→ authenticated (private repos included)" : "→ public data only (no token)");

const profile = await gh(`/users/${USER}`);

const repos = [];
for (let page = 1; page <= 10; page++) {
  const path = token
    ? `/user/repos?per_page=100&page=${page}&affiliation=owner,collaborator,organization_member&sort=updated`
    : `/users/${USER}/repos?per_page=100&page=${page}&sort=updated`;
  const batch = await gh(path);
  repos.push(...batch);
  if (batch.length < 100) break;
}

const owned = repos.filter((r) => !r.fork && r.owner.login === USER);

/**
 * Repos owned by someone else (a client, an employer, a teammate) that this account can
 * only see because it was invited. They count toward aggregate stats, but PUBLISH_PRIVATE
 * governs whether any of them is ever named on the public site — their names alone disclose
 * a third party's internal projects, and those third parties never agreed to appear here.
 */
const external = repos.filter((r) => r.owner.login !== USER);
const privateCount = repos.filter((r) => r.private).length;

console.log(
  `→ ${repos.length} repos visible (${owned.length} owned, ${external.length} via invite/org, ` +
    `${privateCount} private, ${repos.filter((r) => r.fork).length} forks)`,
);

// Language bytes across every repo this account authored in — private and invited work
// included, since that is where the real code volume lives. This is an aggregate: no repo
// is identifiable from a byte count, so it discloses nothing even for client repos.
// Every repo must report, otherwise the percentages are computed against an incomplete
// denominator and quietly lie.
const langSources = repos.filter((r) => !r.fork);
const languageBytes = {};
let covered = 0;
for (const repo of langSources) {
  const langs = await gh(`/repos/${repo.full_name}/languages`);
  covered++;
  for (const [lang, bytes] of Object.entries(langs)) {
    languageBytes[lang] = (languageBytes[lang] ?? 0) + bytes;
  }
}
if (covered !== langSources.length) {
  throw new Error(
    `Language data covers only ${covered}/${langSources.length} repos — refusing to write skewed percentages.`,
  );
}
console.log(`→ languages read from all ${covered} non-fork repos (private included)`);

const totalBytes = Object.values(languageBytes).reduce((a, b) => a + b, 0) || 1;
const languages = Object.entries(languageBytes)
  .sort((a, b) => b[1] - a[1])
  .map(([name, bytes]) => ({ name, bytes, percent: +((bytes / totalBytes) * 100).toFixed(1) }))
  .filter((l) => l.percent >= 0.1);

const thisYear = new Date().getFullYear();
const years = [];
let allDays = [];
for (let y = START_YEAR; y <= thisYear; y++) {
  const { total, days } = await fetchContributions(y);
  years.push({ year: y, total });
  allDays = allDays.concat(days);
  console.log(`→ ${y}: ${total} contributions`);
}

// Trailing 12 months, which is what the heatmap shows. Bounded at BOTH ends: the current
// year is fetched as Jan 1 - Dec 31 and comes back zero-filled for days that haven't
// happened yet, which would otherwise render months into the future as empty columns.
const cutoff = new Date();
cutoff.setFullYear(cutoff.getFullYear() - 1);
const cutoffISO = cutoff.toISOString().slice(0, 10);
const todayISO = new Date().toISOString().slice(0, 10);
const recentDays = withLevels(
  allDays
    .filter((d) => d.date >= cutoffISO && d.date <= todayISO)
    .sort((a, b) => a.date.localeCompare(b.date)),
);

/** Longest run of consecutive days with at least one contribution. */
function longestStreak(days) {
  let longest = 0;
  let run = 0;
  for (const d of days) {
    run = d.count > 0 ? run + 1 : 0;
    longest = Math.max(longest, run);
  }
  return longest;
}

// Past days only — the current year arrives zero-filled to Dec 31, and those future zeros
// would both break the streak and pad the history with days that haven't happened.
const sortedAll = allDays
  .filter((d) => d.date <= todayISO)
  .sort((a, b) => a.date.localeCompare(b.date));

const data = {
  generatedAt: new Date().toISOString(),
  authenticated: Boolean(token),
  profile: {
    login: profile.login,
    name: profile.name,
    bio: profile.bio,
    avatarUrl: profile.avatar_url,
    location: profile.location,
    blog: profile.blog,
    followers: profile.followers,
    following: profile.following,
    publicRepos: profile.public_repos,
    createdAt: profile.created_at,
    hireable: profile.hireable,
  },
  stats: {
    totalRepos: repos.length,
    ownedRepos: owned.length,
    forkedRepos: repos.filter((r) => r.fork).length,
    privateRepos: privateCount,
    externalRepos: external.length,
    totalStars: owned.reduce((sum, r) => sum + r.stargazers_count, 0),
    totalForks: owned.reduce((sum, r) => sum + r.forks_count, 0),
    totalContributions: years.reduce((sum, y) => sum + y.total, 0),
    lastYearContributions: recentDays.reduce((sum, d) => sum + d.count, 0),
    longest: longestStreak(sortedAll),
  },
  years,
  languages,
  contributions: recentDays,
  // The published list. Private repos are excluded unless PUBLISH_PRIVATE_NAMES is on:
  // their links 404 for every visitor, so listing them costs disclosure and returns nothing.
  repos: owned
    .filter((r) => PUBLISH_PRIVATE_NAMES || !r.private)
    .map((r) => ({
      name: r.name,
      description: r.description,
      url: r.html_url,
      homepage: r.homepage || null,
      language: r.language,
      stars: r.stargazers_count,
      forks: r.forks_count,
      private: r.private,
      topics: r.topics ?? [],
      updatedAt: r.updated_at,
      createdAt: r.created_at,
    }))
    .sort((a, b) => b.stars - a.stars || b.updatedAt.localeCompare(a.updatedAt)),
};

const named = data.repos.filter((r) => r.private).length;
console.log(
  `→ publishing ${data.repos.length} repo names (${named} private)` +
    (PUBLISH_PRIVATE_NAMES ? "  ⚠ PRIVATE NAMES ARE PUBLIC" : "; private work counts toward stats only"),
);

await writeFile(OUT, JSON.stringify(data, null, 2));
console.log(
  `✓ ${OUT}\n  ${data.stats.totalContributions} contributions · ${data.stats.totalStars} stars · ` +
    `${data.stats.ownedRepos} repos · ${data.languages.length} languages`,
);
