"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import gh from "@/data/github.json";

type Tab = "overview" | "repos" | "activity";

const LEVEL_COLORS = [
  "bg-neutral-200/70 dark:bg-white/[0.06]",
  "bg-emerald-200 dark:bg-emerald-900",
  "bg-emerald-300 dark:bg-emerald-700",
  "bg-emerald-500 dark:bg-emerald-500",
  "bg-emerald-600 dark:bg-emerald-400",
];

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  CSS: "#563d7c",
  HTML: "#e34c26",
  PHP: "#4F5D95",
  Java: "#b07219",
  Kotlin: "#A97BFF",
  Shell: "#89e051",
  Ruby: "#701516",
  Dockerfile: "#384d54",
  "Objective-C": "#438eff",
  "Objective-C++": "#6866fb",
  Hack: "#878787",
  Python: "#3572A5",
};

const langColor = (name: string) => LANG_COLORS[name] ?? "#8b949e";

/**
 * Parse a "YYYY-MM-DD" contribution date at LOCAL midnight.
 *
 * `new Date("2025-07-17")` is parsed as UTC midnight, but `.getDay()` and
 * `.toLocaleDateString()` read local time — so west of UTC every date silently rolls back a
 * day, shifting the whole grid one row out of step with its weekday labels and reporting
 * every tooltip one day early. Building from parts keeps the calendar date intact everywhere.
 */
function parseDay(iso: string): Date {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function Stat({ value, label }: { value: string | number; label: string }) {
  return (
    <div className="rounded-lg border border-black/5 bg-[#f8f8f8] p-3 text-center dark:border-white/5 dark:bg-[#2a2a2a]">
      <p className="text-lg font-semibold tabular-nums text-neutral-800 dark:text-neutral-100">
        {typeof value === "number" ? value.toLocaleString() : value}
      </p>
      <p className="mt-0.5 whitespace-nowrap text-[9px] uppercase tracking-wide text-neutral-400">
        {label}
      </p>
    </div>
  );
}

/** Trailing-year contribution grid, laid out in columns of weeks like GitHub's own. */
function Heatmap() {
  const { weeks, monthLabels } = useMemo(() => {
    const days = gh.contributions;
    if (!days.length) return { weeks: [], monthLabels: [] };

    // Pad so the first column starts on a Sunday.
    const lead = parseDay(days[0].date).getDay();
    const cells: (typeof days)[number][] = [
      ...Array.from({ length: lead }, () => null as never),
      ...days,
    ];

    const weeks: ((typeof days)[number] | null)[][] = [];
    for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

    const monthLabels: { index: number; label: string }[] = [];
    let lastMonth = -1;
    weeks.forEach((week, index) => {
      const first = week.find(Boolean);
      if (!first) return;
      const month = parseDay(first.date).getMonth();
      if (month !== lastMonth) {
        monthLabels.push({
          index,
          label: parseDay(first.date).toLocaleDateString("en-US", { month: "short" }),
        });
        lastMonth = month;
      }
    });

    return { weeks, monthLabels };
  }, []);

  return (
    <div className="rounded-lg border border-black/5 bg-[#f8f8f8] p-3 dark:border-white/5 dark:bg-[#2a2a2a]">
      <div className="mb-2 flex items-baseline justify-between">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
          {gh.stats.lastYearContributions.toLocaleString()} contributions in the last year
        </p>
        <p className="text-[9px] text-neutral-400">
          {gh.stats.longest}-day longest streak
        </p>
      </div>

      <div className="overflow-x-auto pb-1">
        <div className="inline-block min-w-full">
          <div className="mb-1 flex gap-[3px] pl-[22px]">
            {monthLabels.map(({ index, label }, i) => {
              const next = monthLabels[i + 1]?.index ?? weeks.length;
              const span = next - index;
              return (
                <span
                  key={`${label}-${index}`}
                  className="text-[8px] text-neutral-400"
                  style={{ width: span * 13 - 3, minWidth: span * 13 - 3 }}
                >
                  {label}
                </span>
              );
            })}
          </div>

          <div className="flex gap-[3px]">
            <div className="flex w-[19px] flex-col gap-[3px] pr-1 text-[8px] leading-[10px] text-neutral-400">
              {["", "Mon", "", "Wed", "", "Fri", ""].map((d, i) => (
                <span key={i} className="h-[10px]">
                  {d}
                </span>
              ))}
            </div>

            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {Array.from({ length: 7 }).map((_, di) => {
                  const day = week[di];
                  if (!day) return <div key={di} className="h-[10px] w-[10px]" />;
                  return (
                    <motion.div
                      key={di}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: Math.min(wi * 0.004, 0.4), duration: 0.15 }}
                      title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${parseDay(
                        day.date,
                      ).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}`}
                      className={`h-[10px] w-[10px] rounded-[2px] ${LEVEL_COLORS[day.level]}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-end gap-1">
        <span className="text-[8px] text-neutral-400">Less</span>
        {LEVEL_COLORS.map((c, i) => (
          <div key={i} className={`h-[10px] w-[10px] rounded-[2px] ${c}`} />
        ))}
        <span className="text-[8px] text-neutral-400">More</span>
      </div>
    </div>
  );
}

function Overview() {
  const topYear = gh.years.reduce((a, b) => (b.total > a.total ? b : a), gh.years[0]);
  const maxYear = topYear.total || 1;

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat value={gh.stats.totalContributions} label="Contributions" />
        <Stat value={gh.stats.ownedRepos} label="Repositories" />
        <Stat value={gh.profile.followers} label="Followers" />
        <Stat value={gh.stats.totalStars} label="Stars Earned" />
      </div>

      <Heatmap />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {/* Languages */}
        <div className="rounded-lg border border-black/5 bg-[#f8f8f8] p-3 dark:border-white/5 dark:bg-[#2a2a2a]">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
            Languages by code volume
          </p>
          <div className="mb-2.5 flex h-2 overflow-hidden rounded-full">
            {gh.languages.map((l) => (
              <motion.div
                key={l.name}
                initial={{ width: 0 }}
                animate={{ width: `${l.percent}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ backgroundColor: langColor(l.name) }}
                title={`${l.name} — ${l.percent}%`}
              />
            ))}
          </div>
          <div className="space-y-1">
            {gh.languages.slice(0, 6).map((l) => (
              <div key={l.name} className="flex items-center gap-1.5">
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: langColor(l.name) }}
                />
                <span className="text-[10px] text-neutral-600 dark:text-neutral-300">{l.name}</span>
                <span className="ml-auto text-[10px] tabular-nums text-neutral-400">
                  {l.percent}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Contributions per year */}
        <div className="rounded-lg border border-black/5 bg-[#f8f8f8] p-3 dark:border-white/5 dark:bg-[#2a2a2a]">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
            Contributions per year
          </p>
          <div className="flex h-[92px] items-end justify-between gap-2">
            {gh.years.map((y) => (
              <div key={y.year} className="flex flex-1 flex-col items-center gap-1">
                <span className="text-[9px] tabular-nums text-neutral-400">{y.total}</span>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${Math.max((y.total / maxYear) * 62, 3)}px` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full rounded-t-[3px] bg-emerald-500 dark:bg-emerald-400"
                />
                <span className="text-[9px] text-neutral-400">{y.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Repos() {
  const [query, setQuery] = useState("");
  const [lang, setLang] = useState<string | null>(null);

  const langs = useMemo(() => {
    const counts = new Map<string, number>();
    for (const r of gh.repos) {
      if (r.language) counts.set(r.language, (counts.get(r.language) ?? 0) + 1);
    }
    return [...counts.entries()].sort((a, b) => b[1] - a[1]);
  }, []);

  const shown = gh.repos.filter((r) => {
    if (lang && r.language !== lang) return false;
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      r.name.toLowerCase().includes(q) ||
      (r.description ?? "").toLowerCase().includes(q) ||
      r.topics.some((t) => t.toLowerCase().includes(q))
    );
  });

  // The Overview counts every repo; this tab can only list the public ones. Say so, rather
  // than let the two numbers quietly disagree.
  const unlisted = gh.stats.ownedRepos - gh.repos.length;

  return (
    <div className="space-y-2.5">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search repositories…"
        className="w-full rounded-md border border-black/10 bg-white px-2.5 py-1.5 text-[11px] text-neutral-700 outline-none placeholder:text-neutral-400 focus:border-emerald-500 dark:border-white/10 dark:bg-[#1e1e1e] dark:text-neutral-200"
      />

      {unlisted > 0 && (
        <p className="text-[9px] leading-snug text-neutral-400">
          Showing {gh.repos.length} public repositories. {unlisted} private repositories — client
          and in-house work under NDA — are counted in the stats above but not listed here.
        </p>
      )}

      <div className="flex flex-wrap gap-1">
        <button
          onClick={() => setLang(null)}
          className={`rounded-full border px-2 py-0.5 text-[9px] font-medium transition-colors ${
            lang === null
              ? "border-transparent bg-neutral-800 text-white dark:bg-white dark:text-neutral-900"
              : "border-black/10 text-neutral-500 hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"
          }`}
        >
          All {gh.repos.length}
        </button>
        {langs.map(([name, count]) => (
          <button
            key={name}
            onClick={() => setLang(name === lang ? null : name)}
            className={`flex items-center gap-1 rounded-full border px-2 py-0.5 text-[9px] font-medium transition-colors ${
              lang === name
                ? "border-transparent bg-neutral-800 text-white dark:bg-white dark:text-neutral-900"
                : "border-black/10 text-neutral-500 hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"
            }`}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: langColor(name) }}
            />
            {name} {count}
          </button>
        ))}
      </div>

      <div className="space-y-1.5">
        {shown.map((r, i) => (
          <motion.a
            key={r.name}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: Math.min(i * 0.015, 0.3) }}
            className="block rounded-lg border border-black/5 bg-[#f8f8f8] p-2.5 transition-colors hover:bg-[#f0f0f0] dark:border-white/5 dark:bg-[#2a2a2a] dark:hover:bg-[#333]"
          >
            <div className="flex items-center gap-1.5">
              <span className="truncate text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                {r.name}
              </span>
              {r.private && (
                <span className="rounded-full border border-black/10 px-1.5 text-[8px] text-neutral-400 dark:border-white/15">
                  Private
                </span>
              )}
              <span className="ml-auto flex shrink-0 items-center gap-2 text-[9px] tabular-nums text-neutral-400">
                {r.stars > 0 && <span>★ {r.stars}</span>}
                {r.forks > 0 && <span>⑂ {r.forks}</span>}
              </span>
            </div>

            {r.description && (
              <p className="mt-1 line-clamp-2 text-[10px] leading-snug text-neutral-500 dark:text-neutral-400">
                {r.description}
              </p>
            )}

            <div className="mt-1.5 flex items-center gap-2">
              {r.language && (
                <span className="flex items-center gap-1 text-[9px] text-neutral-500 dark:text-neutral-400">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: langColor(r.language) }}
                  />
                  {r.language}
                </span>
              )}
              <span className="text-[9px] text-neutral-400">
                Updated {new Date(r.updatedAt).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </span>
              {r.homepage && (
                <span className="ml-auto text-[9px] text-emerald-600 dark:text-emerald-400">
                  Live ↗
                </span>
              )}
            </div>
          </motion.a>
        ))}

        {shown.length === 0 && (
          <p className="py-8 text-center text-[11px] text-neutral-400">
            No repositories match “{query}”.
          </p>
        )}
      </div>
    </div>
  );
}

function Activity() {
  const recent = [...gh.repos]
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
    .slice(0, 14);

  const joined = new Date(gh.profile.createdAt);
  const years = ((Date.now() - joined.getTime()) / (365.25 * 24 * 3600 * 1000)).toFixed(1);

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-2">
        <Stat value={`${years} yrs`} label="On GitHub" />
        <Stat value={gh.stats.longest} label="Longest Streak" />
        <Stat value={gh.profile.following} label="Following" />
      </div>

      <div className="rounded-lg border border-black/5 bg-[#f8f8f8] p-3 dark:border-white/5 dark:bg-[#2a2a2a]">
        <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
          Recently pushed
        </p>
        <div className="space-y-0">
          {recent.map((r, i) => (
            <div key={r.name} className="flex gap-2.5">
              <div className="flex flex-col items-center">
                <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                {i < recent.length - 1 && <div className="w-px flex-1 bg-black/10 dark:bg-white/10" />}
              </div>
              <div className="pb-3">
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-medium text-emerald-700 hover:underline dark:text-emerald-400"
                >
                  {r.name}
                </a>
                <p className="text-[9px] text-neutral-400">
                  {new Date(r.updatedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                  {r.language ? ` · ${r.language}` : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const TABS: { id: Tab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "repos", label: `Repositories ${gh.repos.length}` },
  { id: "activity", label: "Activity" },
];

export function GitHubStats() {
  const [tab, setTab] = useState<Tab>("overview");

  return (
    <div className="h-full overflow-y-auto bg-white p-4 dark:bg-[#1e1e1e]">
      {/* Profile header */}
      <div className="mb-3 flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={gh.profile.avatarUrl}
          alt={gh.profile.name ?? gh.profile.login}
          className="h-14 w-14 rounded-full border border-black/10 dark:border-white/10"
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h1 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              {gh.profile.name}
            </h1>
            <a
              href={`https://github.com/${gh.profile.login}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-emerald-600 hover:underline dark:text-emerald-400"
            >
              @{gh.profile.login}
            </a>
            {gh.profile.hireable && (
              <span className="rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[8px] font-medium text-emerald-600 dark:text-emerald-400">
                Available for hire
              </span>
            )}
          </div>
          <p className="mt-0.5 line-clamp-2 text-[10px] leading-snug text-neutral-500 dark:text-neutral-400">
            {gh.profile.bio}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-3 flex gap-1 border-b border-black/5 dark:border-white/5">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`relative px-2.5 pb-1.5 text-[11px] font-medium transition-colors ${
              tab === t.id
                ? "text-neutral-900 dark:text-neutral-100"
                : "text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
            }`}
          >
            {t.label}
            {tab === t.id && (
              <motion.div
                layoutId="gh-tab"
                className="absolute inset-x-0 -bottom-px h-[2px] rounded-full bg-emerald-500"
              />
            )}
          </button>
        ))}
      </div>

      {tab === "overview" && <Overview />}
      {tab === "repos" && <Repos />}
      {tab === "activity" && <Activity />}

      <p className="mt-4 text-center text-[8px] text-neutral-300 dark:text-neutral-600">
        Synced from the GitHub API on{" "}
        {new Date(gh.generatedAt).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </p>
    </div>
  );
}
