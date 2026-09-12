"use client";

import { DATA } from "@/data/resume";
import { motion } from "framer-motion";
import { SectionHead, rise } from "./ui";

/* Numbered on purpose: this is a real sequence a client walks through. */
export function Process() {
  return (
    <section id="process" className="scroll-mt-24">
      <SectionHead
        eyebrow="how a project runs"
        title="Four steps, no surprises"
        blurb={DATA.availability.note + ". Here is what working with me looks like."}
      />
      <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {DATA.process.map((p, i) => (
          <motion.li
            key={p.step}
            {...rise}
            transition={{ ...rise.transition, delay: i * 0.06 }}
            className="relative rounded-2xl border border-landing-line/10 bg-landing-surface p-5"
          >
            <div className="flex items-center gap-3">
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-landing-accent font-mono text-xs font-bold text-landing-accent-ink">
                {i + 1}
              </span>
              {i < DATA.process.length - 1 && (
                <span className="hidden h-px flex-1 bg-landing-line/10 lg:block" aria-hidden />
              )}
            </div>
            <h3 className="mt-4 font-display text-base font-semibold text-landing-text">
              {p.step}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-landing-muted">{p.blurb}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
