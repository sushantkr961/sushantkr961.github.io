"use client";

import { DATA } from "@/data/resume";
import { motion } from "framer-motion";
import Link from "next/link";
import { Command, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { GhostButton, MAIL, PrimaryButton, WA, rise } from "./ui";

export function Contact() {
  const s = DATA.contact.social;
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="relative overflow-hidden rounded-2xl border border-landing-line/10 bg-landing-surface p-8 text-center sm:p-14">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-landing-accent/60 to-transparent"
        />
        <motion.h2
          {...rise}
          className="font-display text-3xl font-semibold tracking-tight text-landing-text sm:text-5xl"
        >
          Let&apos;s build something that runs.
        </motion.h2>
        <motion.p
          {...rise}
          transition={{ ...rise.transition, delay: 0.05 }}
          className="mx-auto mt-4 max-w-md text-landing-muted"
        >
          Hiring for a role or have a product in mind? Tell me what you&apos;re
          building — I reply within a day.
        </motion.p>
        <motion.div
          {...rise}
          transition={{ ...rise.transition, delay: 0.1 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <PrimaryButton href={WA}>
            <MessageCircle className="size-4" /> WhatsApp
          </PrimaryButton>
          <GhostButton href={MAIL}>
            <Mail className="size-4" /> {DATA.contact.email}
          </GhostButton>
        </motion.div>
        <div className="mt-6 flex items-center justify-center gap-2">
          {[
            { icon: Github, href: s.GitHub.url, label: "GitHub" },
            { icon: Linkedin, href: s.LinkedIn.url, label: "LinkedIn" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={l.label}
              className="grid size-11 place-items-center rounded-lg border border-landing-line/10 text-landing-muted transition-colors hover:border-landing-line/30 hover:text-landing-text"
            >
              <l.icon className="size-4" />
            </a>
          ))}
        </div>
      </div>

      <footer className="flex flex-col items-center justify-between gap-3 px-2 pt-6 font-mono text-xs text-landing-dim sm:flex-row">
        <span>© {DATA.name} · New Delhi · built with Next.js</span>
        <Link
          href="/desktop"
          className="inline-flex min-h-9 items-center gap-1.5 transition-colors hover:text-landing-text"
        >
          <Command className="size-3.5" /> desktop mode
        </Link>
      </footer>
    </section>
  );
}
