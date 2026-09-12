"use client";

import { DATA } from "@/data/resume";
import gh from "@/data/github.json";
import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, MessageCircle, MapPin } from "lucide-react";
import { RouteTrace } from "./RouteTrace";
import { GhostButton, PrimaryButton, Tile, WA } from "./ui";

/* Hero is above the fold: animate on mount, never wait for an in-view observer. */
const rise = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
};

export function Hero() {
  return (
    <Tile className="relative overflow-hidden px-6 pb-16 pt-8 sm:px-9 sm:pt-10 lg:pb-20">
      {/* warm light leak in the corner — orange, like a stack light */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-landing-accent/[0.09] blur-3xl"
      />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-12">
        <div className="min-w-0">
          <motion.div
            {...rise}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em]"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-landing-live/30 bg-landing-live/10 px-2.5 py-1 text-landing-live">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-landing-live opacity-70" />
                <span className="relative inline-flex size-1.5 rounded-full bg-landing-live" />
              </span>
              {DATA.availability.label}
            </span>
            <span className="inline-flex items-center gap-1.5 text-landing-dim">
              <MapPin className="size-3" /> New Delhi · remote-friendly
            </span>
          </motion.div>

          <motion.h1
            {...rise}
            transition={{ ...rise.transition, delay: 0.05 }}
            className="mt-6 font-display text-[2.6rem] font-semibold leading-[0.98] tracking-[-0.02em] text-landing-text sm:text-6xl lg:text-[4.25rem]"
          >
            Software that ships,
            <br />
            <span className="text-landing-accent">and keeps running.</span>
          </motion.h1>

          <motion.p
            {...rise}
            transition={{ ...rise.transition, delay: 0.1 }}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-landing-muted sm:text-base"
          >
            I&apos;m Sushant — a Full-Stack, React Native &amp; IoT engineer. I take
            products from idea to the App Store, Play Store, factory floor and
            production, then keep them running. Currently leading platform
            engineering at Uptime Linked, and{" "}
            <span className="text-landing-text">taking freelance builds</span>{" "}
            and <span className="text-landing-text">full-time conversations</span>.
          </motion.p>

          <motion.div
            {...rise}
            transition={{ ...rise.transition, delay: 0.15 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <PrimaryButton href={WA}>
              <MessageCircle className="size-4" /> Start a project
            </PrimaryButton>
            <GhostButton href="#hire" external={false}>
              <Briefcase className="size-4" /> Hire me full-time
            </GhostButton>
          </motion.div>
        </div>

        {/* portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <div className="relative overflow-hidden rounded-2xl border border-landing-line/10">
            <Image
              src={DATA.avatarUrl}
              alt={DATA.name}
              width={520}
              height={560}
              priority
              className="aspect-[4/5] w-full object-cover object-[center_20%]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-landing-surface via-landing-surface/60 to-transparent px-4 pb-4 pt-12">
              <p className="font-display text-lg font-semibold text-landing-text">
                {DATA.name}
              </p>
              <p className="font-mono text-[11px] text-landing-muted">
                Product Lead @ Uptime Linked
              </p>
            </div>
          </div>
          <p className="mt-3 font-mono text-[11px] leading-relaxed text-landing-dim">
            {gh.stats.totalContributions.toLocaleString()} GitHub contributions ·{" "}
            {gh.stats.totalRepos} repos · 3+ yrs shipping
          </p>
        </motion.div>
      </div>

      <RouteTrace />
    </Tile>
  );
}
