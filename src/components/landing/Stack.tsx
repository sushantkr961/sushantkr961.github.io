"use client";

import { DATA } from "@/data/resume";
import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import { Chip, SectionHead, rise } from "./ui";

export function Stack() {
  return (
    <section id="skills" className="scroll-mt-24">
      <SectionHead
        eyebrow="toolbox"
        title="From the sensor to the store listing"
        blurb="Languages, frameworks and the hardware I've wired into software."
      />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {DATA.skillGroups.map((g, i) => {
          const iot = g.label === "IoT & Edge";
          return (
            <motion.div
              key={g.label}
              {...rise}
              transition={{ ...rise.transition, delay: (i % 2) * 0.04 }}
              className={`rounded-2xl border p-5 ${
                iot
                  ? "border-landing-accent/30 bg-landing-accent/[0.05] sm:col-span-2"
                  : "border-landing-line/10 bg-landing-surface"
              }`}
            >
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-landing-accent">
                {iot && <Cpu className="size-3.5" />}
                {g.label}
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {g.items.map((t) => (
                  <Chip key={t} tone={iot ? "accent" : "default"}>
                    {t}
                  </Chip>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
