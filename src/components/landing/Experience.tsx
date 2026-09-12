"use client";

import { DATA } from "@/data/resume";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHead, rise } from "./ui";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <SectionHead eyebrow="career" title="Where I've shipped" />
      <div className="space-y-3">
        {DATA.work.map((w, i) => (
          <motion.div
            key={w.company}
            {...rise}
            transition={{ ...rise.transition, delay: i * 0.05 }}
            className="grid gap-4 rounded-2xl border border-landing-line/10 bg-landing-surface p-5 sm:grid-cols-[48px_minmax(0,1fr)_auto] sm:p-6"
          >
            <div className="size-12 overflow-hidden rounded-xl border border-landing-line/10 bg-landing-bg">
              <Image src={w.logoUrl} alt={w.company} width={48} height={48} className="size-full object-cover" />
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-lg font-semibold text-landing-text">{w.title}</h3>
              <a
                href={w.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-landing-accent hover:underline"
              >
                {w.company}
              </a>
              <p className="mt-3 text-sm leading-relaxed text-landing-muted">{w.description}</p>
            </div>
            <div className="font-mono text-[11px] text-landing-muted sm:text-right">
              <div>
                {w.start} — {w.end}
              </div>
              <div className="text-landing-dim">{w.location}</div>
            </div>
          </motion.div>
        ))}
        <motion.div
          {...rise}
          className="grid gap-3 sm:grid-cols-3"
        >
          {[...DATA.certification, ...DATA.education].map((e) => (
            <div
              key={e.school}
              className="flex items-center gap-3 rounded-2xl border border-landing-line/10 bg-landing-surface p-4"
            >
              <div className="size-10 shrink-0 overflow-hidden rounded-lg bg-landing-bg">
                <Image src={e.logoUrl} alt={e.school} width={40} height={40} className="size-full object-cover" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-landing-text">{e.school}</p>
                <p className="truncate text-xs text-landing-muted">{e.degree}</p>
                <p className="font-mono text-[11px] text-landing-dim">
                  {e.start} — {e.end}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
