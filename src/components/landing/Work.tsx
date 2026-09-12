"use client";

import { DATA, PROJECT_GROUPS, type Project, type ProjectGroup } from "@/data/resume";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Command, Cpu } from "lucide-react";
import { ProjectCover } from "./ProjectCover";
import { Chip, KindBadge, SectionHead, StatusBadge, clean, rise } from "./ui";

const FEATURED = DATA.projects.filter((p) => p.featured);
const GROUP_ORDER: ProjectGroup[] = ["iot", "platforms", "freelance", "earlier"];

export function Work() {
  return (
    <section id="projects" className="scroll-mt-24">
      <SectionHead
        eyebrow="selected work"
        title="Shipped, not shelved"
        blurb="Products people use every day — on the App Store and Play Store, in factories, in schools, in browsers. Newest first."
      />

      {/* featured: first one wide, rest in pairs */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {FEATURED.map((p, i) => (
          <FeaturedCard key={p.subtitle} p={p} i={i} wide={i === 0} />
        ))}
      </div>

      {/* everything else, grouped */}
      <div className="mt-12 space-y-10">
        {GROUP_ORDER.map((g) => {
          const items = DATA.projects.filter((p) => p.group === g && !p.featured);
          if (items.length === 0) return null;
          const meta = PROJECT_GROUPS[g];
          return (
            <div key={g}>
              <motion.div {...rise} className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-semibold text-landing-text">
                  {meta.label}
                </h3>
                <p className="font-mono text-[11px] text-landing-dim">{meta.blurb}</p>
              </motion.div>
              <div className="divide-y divide-landing-line/10 overflow-hidden rounded-2xl border border-landing-line/10 bg-landing-surface">
                {items.map((p, i) => (
                  <Row key={p.subtitle} p={p} i={i} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/desktop"
          className="inline-flex min-h-11 items-center gap-2 font-mono text-sm text-landing-muted transition-colors hover:text-landing-text"
        >
          <Command className="size-4" /> browse these as a macOS desktop
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}

function FeaturedCard({ p, i, wide }: { p: Project; i: number; wide: boolean }) {
  return (
    <motion.article
      {...rise}
      transition={{ ...rise.transition, delay: (i % 2) * 0.05 }}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-landing-line/10 bg-landing-surface transition-colors duration-200 hover:border-landing-line/25 ${
        wide ? "sm:col-span-2 lg:flex-row" : ""
      }`}
    >
      <div className={`relative shrink-0 ${wide ? "aspect-video lg:aspect-auto lg:w-[46%]" : "aspect-video"}`}>
        {p.video ? (
          <video
            className="absolute inset-0 size-full object-cover"
            src={p.video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <ProjectCover p={p} />
        )}
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          <span className="rounded-md bg-landing-bg/85 px-2 py-1 backdrop-blur">
            <StatusBadge p={p} />
          </span>
          <span className="rounded-md bg-landing-bg/85 backdrop-blur">
            <KindBadge kind={p.kind} />
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-baseline justify-between gap-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-landing-accent">
            {p.subtitle}
          </p>
          <span className="shrink-0 font-mono text-[11px] text-landing-dim">{p.dates}</span>
        </div>
        <h3 className={`mt-2 font-display font-semibold leading-tight text-landing-text ${wide ? "text-2xl sm:text-3xl" : "text-xl"}`}>
          {p.title}
        </h3>
        {p.role && (
          <p className="mt-2 text-[13px] text-landing-muted">
            <span className="text-landing-text/80">Role:</span> {p.role}
          </p>
        )}
        <p className={`mt-3 text-sm leading-relaxed text-landing-muted ${wide ? "" : "line-clamp-4"}`}>
          {clean(p.description)}
        </p>
        {p.hardware && p.hardware.length > 0 && (
          <div className="mt-4 flex flex-wrap items-center gap-1.5">
            <Cpu className="size-3.5 text-landing-accent" aria-label="Hardware" />
            {p.hardware.map((h) => (
              <Chip key={h} tone="accent">
                {h}
              </Chip>
            ))}
          </div>
        )}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {p.technologies.slice(0, wide ? 10 : 6).map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
        {p.links.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2 pt-5">
            {p.links.map((l) => (
              <a
                key={l.type}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-landing-line/15 px-3 py-1.5 text-xs font-medium text-landing-text transition-colors hover:border-landing-accent/60 hover:text-landing-accent"
              >
                {l.type}
                <ArrowUpRight className="size-3" />
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}

function Row({ p, i }: { p: Project; i: number }) {
  return (
    <motion.div
      {...rise}
      transition={{ ...rise.transition, delay: Math.min(i, 4) * 0.03 }}
      className="grid gap-3 p-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start"
    >
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-landing-accent">
            {p.subtitle}
          </p>
          <StatusBadge p={p} />
          <KindBadge kind={p.kind} />
        </div>
        <h4 className="mt-1.5 font-display text-lg font-semibold leading-snug text-landing-text">
          {p.title}
        </h4>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-landing-muted">
          {clean(p.description)}
        </p>
        {p.role && <p className="mt-1.5 text-xs text-landing-dim">{p.role}</p>}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {p.hardware?.map((h) => (
            <Chip key={h} tone="accent">
              {h}
            </Chip>
          ))}
          {p.technologies.slice(0, 6).map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
      </div>
      <div className="flex shrink-0 flex-row items-center gap-2 sm:flex-col sm:items-end">
        <span className="font-mono text-[11px] text-landing-dim">{p.dates}</span>
        {p.links.map((l) => (
          <a
            key={l.type}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-9 items-center gap-1 rounded-full border border-landing-line/15 px-3 py-1 text-xs text-landing-text transition-colors hover:border-landing-accent/60 hover:text-landing-accent"
          >
            {l.type} <ArrowUpRight className="size-3" />
          </a>
        ))}
      </div>
    </motion.div>
  );
}
