"use client";

import { DATA, type Project, type ProjectKind } from "@/data/resume";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

/* ------------------------------------------------------------------ *
 *  Shared bits for the landing page. Colours come from the `.landing`
 *  tokens in globals.css (via tailwind `landing.*`), never raw hex.
 * ------------------------------------------------------------------ */

export const WA = `https://wa.me/${DATA.whatsapp}?text=${encodeURIComponent(
  "Hi Sushant, I saw your portfolio and I'd like to talk about a project."
)}`;
export const MAIL = DATA.contact.social.email.url;
export const RESUME = DATA.navbar[1]?.href ?? "#";

/** Strip the `[word](#anchor)` link syntax some legacy descriptions carry. */
export function clean(s: string) {
  return s.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1");
}

export const rise = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
};

export const KIND_LABEL: Record<ProjectKind, string> = {
  employer: "employer · private",
  contract: "contract · private",
  freelance: "freelance",
  product: "own product",
  "open-source": "open source",
};

export function statusOf(p: Project): { label: string; live: boolean } {
  const types = p.links.map((l) => l.type.toLowerCase());
  if (types.includes("play store") || types.includes("app store"))
    return { label: "live · store", live: true };
  if (types.includes("website")) return { label: "live", live: true };
  if (types.includes("source")) return { label: "source", live: false };
  if (/App Store and Play Store|both stores/i.test(p.description))
    return { label: "live · store", live: true };
  return { label: p.active ? "in production" : "archived", live: p.active };
}

export function Tile({
  className = "",
  children,
  id,
}: {
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`rounded-2xl border border-landing-line/10 bg-landing-surface ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  blurb,
}: {
  eyebrow: string;
  title: string;
  blurb?: string;
}) {
  return (
    <div className="mb-6">
      <motion.p
        {...rise}
        className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-landing-accent"
      >
        <span className="inline-block h-px w-6 bg-landing-accent/60" />
        {eyebrow}
      </motion.p>
      <motion.h2
        {...rise}
        transition={{ ...rise.transition, delay: 0.05 }}
        className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-landing-text sm:text-4xl"
      >
        {title}
      </motion.h2>
      {blurb && (
        <motion.p
          {...rise}
          transition={{ ...rise.transition, delay: 0.1 }}
          className="mt-2 max-w-2xl text-[15px] leading-relaxed text-landing-muted"
        >
          {blurb}
        </motion.p>
      )}
    </div>
  );
}

export function Chip({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "accent" | "live";
}) {
  const tones = {
    default: "border-landing-line/10 bg-landing-line/[0.03] text-landing-muted",
    accent: "border-landing-accent/30 bg-landing-accent/10 text-landing-accent",
    live: "border-landing-live/30 bg-landing-live/10 text-landing-live",
  } as const;
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[11px] leading-5 ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function KindBadge({ kind }: { kind: ProjectKind }) {
  const tone = kind === "freelance" || kind === "product" ? "accent" : "default";
  return <Chip tone={tone}>{KIND_LABEL[kind]}</Chip>;
}

export function StatusBadge({ p }: { p: Project }) {
  const s = statusOf(p);
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide ${
        s.live ? "text-landing-live" : "text-landing-dim"
      }`}
    >
      {s.live && (
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-landing-live opacity-60" />
          <span className="relative inline-flex size-1.5 rounded-full bg-landing-live" />
        </span>
      )}
      {s.label}
    </span>
  );
}

export function PrimaryButton({
  href,
  children,
  external = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-landing-accent px-5 py-3 text-sm font-semibold text-landing-accent-ink transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-8px_rgb(var(--l-accent)/0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-landing-accent ${className}`}
    >
      {children}
    </a>
  );
}

export function GhostButton({
  href,
  children,
  external = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-landing-line/15 px-5 py-3 text-sm font-medium text-landing-text transition-colors duration-200 hover:border-landing-line/40 hover:bg-landing-line/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-landing-accent ${className}`}
    >
      {children}
    </a>
  );
}
