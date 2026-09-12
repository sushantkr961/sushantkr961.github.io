"use client";

import { DATA } from "@/data/resume";
import { motion } from "framer-motion";
import { Briefcase, Check, FileText, Mail, MessageCircle } from "lucide-react";
import { GhostButton, MAIL, PrimaryButton, RESUME, SectionHead, WA, rise } from "./ui";

const FREELANCE = [
  "Fixed scope, fixed quote, weekly demos",
  "Web + mobile + backend from one engineer",
  "Store submission and deployment included",
  "30 days of fixes after launch",
];

const FULLTIME = [
  "Full-Stack / React Native / IoT lead roles",
  "3+ years shipping, led teams of 5–6",
  "Hybrid in New Delhi or remote",
  "Resume and references on request",
];

export function WaysToWork() {
  return (
    <section id="hire" className="scroll-mt-24">
      <SectionHead
        eyebrow="two ways to work together"
        title="Freelance build, or full-time hire"
        blurb="Pick the door that fits. Either way you get the same engineer who ships and stays."
      />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <motion.div
          {...rise}
          className="flex flex-col rounded-2xl border border-transparent bg-landing-accent p-6 text-landing-accent-ink sm:p-8"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] opacity-70">for clients</p>
          <h3 className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-3xl">
            Start a freelance project
          </h3>
          <p className="mt-2 text-sm opacity-80">{DATA.availability.note}.</p>
          <ul className="mt-5 space-y-2 text-sm">
            {FREELANCE.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <Check className="mt-0.5 size-4 shrink-0" /> {f}
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-landing-bg px-5 py-3 text-sm font-semibold text-landing-text transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="size-4" /> WhatsApp me
            </a>
            <a
              href="#process"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-landing-accent-ink/25 px-5 py-3 text-sm font-medium transition-colors hover:bg-landing-accent-ink/10"
            >
              How it runs
            </a>
          </div>
        </motion.div>

        <motion.div
          {...rise}
          transition={{ ...rise.transition, delay: 0.05 }}
          className="flex flex-col rounded-2xl border border-landing-line/10 bg-landing-surface p-6 sm:p-8"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-landing-live">
            for hiring managers
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-landing-text sm:text-3xl">
            Hire me full-time
          </h3>
          <p className="mt-2 text-sm text-landing-muted">
            Product Lead at Uptime Linked today. Open to the right next role.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-landing-muted">
            {FULLTIME.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <Briefcase className="mt-0.5 size-4 shrink-0 text-landing-live" /> {f}
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            <PrimaryButton href={RESUME}>
              <FileText className="size-4" /> View resume
            </PrimaryButton>
            <GhostButton href={MAIL}>
              <Mail className="size-4" /> Email me
            </GhostButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
