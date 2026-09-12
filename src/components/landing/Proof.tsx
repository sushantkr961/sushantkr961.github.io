"use client";

import { DATA } from "@/data/resume";
import gh from "@/data/github.json";
import { motion } from "framer-motion";
import { rise } from "./ui";

/* Hand-typed stats from the data file + two real numbers from github.json. */
export function Proof() {
  const items = [
    ...DATA.stats,
    { value: gh.stats.totalContributions.toLocaleString(), label: "GitHub contributions" },
    { value: String(gh.stats.totalRepos), label: "repositories" },
  ];
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {items.map((st, i) => {
        const filled = i === 0;
        const live = i === items.length - 2;
        return (
          <motion.div
            key={st.label}
            {...rise}
            transition={{ ...rise.transition, delay: i * 0.04 }}
            className={`rounded-2xl border p-4 ${
              filled
                ? "border-transparent bg-landing-accent text-landing-accent-ink"
                : live
                  ? "border-landing-live/25 bg-landing-live/[0.06]"
                  : "border-landing-line/10 bg-landing-surface"
            }`}
          >
            <div
              className={`font-display text-2xl font-semibold tabular-nums sm:text-3xl ${
                filled ? "" : live ? "text-landing-live" : "text-landing-text"
              }`}
            >
              {st.value}
            </div>
            <div
              className={`mt-1 font-mono text-[10px] uppercase tracking-wider ${
                filled ? "text-landing-accent-ink/70" : "text-landing-muted"
              }`}
            >
              {st.label}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
