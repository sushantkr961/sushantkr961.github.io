"use client";

import { DATA } from "@/data/resume";
import { motion } from "framer-motion";
import { Boxes, Cpu, Globe, Smartphone, ArrowRight } from "lucide-react";
import { Chip, SectionHead, WA, rise } from "./ui";

const ICONS: Record<string, typeof Smartphone> = {
  mobile: Smartphone,
  web: Globe,
  product: Boxes,
  custom: Cpu,
};

export function Services() {
  return (
    <section id="services" className="scroll-mt-24">
      <SectionHead
        eyebrow="what I do"
        title="Hire me for the whole build"
        blurb="Web, mobile, backend and the hardware at the edge — one engineer who owns it from scope to store submission."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {DATA.services.map((s, i) => {
          const Icon = ICONS[s.id] ?? Boxes;
          return (
            <motion.div
              key={s.id}
              {...rise}
              transition={{ ...rise.transition, delay: (i % 2) * 0.05 }}
              className="group flex flex-col rounded-2xl border border-landing-line/10 bg-landing-surface p-6 transition-colors duration-200 hover:border-landing-accent/40"
            >
              <div className="flex items-start justify-between">
                <div className="grid size-11 place-items-center rounded-xl bg-landing-accent/10 text-landing-accent">
                  <Icon className="size-5" />
                </div>
                <span className="font-mono text-[11px] text-landing-dim">0{i + 1}</span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-landing-text">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-landing-muted">{s.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {s.tech.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-landing-accent opacity-80 transition-opacity hover:opacity-100"
              >
                Talk about a {s.title.toLowerCase()} build
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
