"use client";

import { DATA } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";
import { Boxes, Briefcase, Command, Home, Layers, Mail } from "lucide-react";
import { Hero } from "./Hero";
import { Proof } from "./Proof";
import { Services } from "./Services";
import { Process } from "./Process";
import { Work } from "./Work";
import { Experience } from "./Experience";
import { Stack } from "./Stack";
import { WaysToWork } from "./WaysToWork";
import { Contact } from "./Contact";
import { PrimaryButton, WA } from "./ui";

/* ------------------------------------------------------------------ *
 *  Home page — dual intent (freelance clients + hiring managers).
 *  Tokens live in globals.css under `.landing`; sections are one file
 *  each in this folder. Content comes from src/data/resume.tsx only.
 * ------------------------------------------------------------------ */
export function Landing() {
  return (
    <main className="landing min-h-screen overflow-x-hidden bg-landing-bg font-body text-landing-text antialiased selection:bg-landing-accent selection:text-landing-accent-ink">
      <TopBar />
      <Dock />
      <div className="mx-auto max-w-6xl space-y-16 px-4 pb-28 pt-4 sm:px-6 sm:pt-6 lg:space-y-20 xl:max-w-7xl 2xl:max-w-[1440px]" id="top">
        <div className="space-y-4">
          <Hero />
          <Proof />
        </div>
        <Services />
        <Work />
        <WaysToWork />
        <Process />
        <Experience />
        <Stack />
        <Contact />
      </div>
    </main>
  );
}

function TopBar() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-4 pt-4 sm:px-6 xl:max-w-7xl 2xl:max-w-[1440px]">
      <a href="#top" className="flex items-center gap-3">
        <span className="size-9 overflow-hidden rounded-full border border-landing-line/15">
          <Image src={DATA.avatarUrl} alt="" width={36} height={36} className="size-full object-cover object-[center_20%]" />
        </span>
        <span className="leading-tight">
          <span className="block font-display text-sm font-semibold text-landing-text">{DATA.name}</span>
          <span className="block font-mono text-[10px] text-landing-dim">{DATA.tagline}</span>
        </span>
      </a>
      <PrimaryButton href={WA} className="hidden !min-h-10 !px-4 !py-2 sm:inline-flex">
        Hire me
      </PrimaryButton>
    </header>
  );
}

/* Order unchanged from the previous landing so nobody's muscle memory breaks. */
function Dock() {
  const items = [
    { icon: Home, href: "#top", label: "Home" },
    { icon: Layers, href: "#services", label: "Services" },
    { icon: Briefcase, href: "#experience", label: "Experience" },
    { icon: Boxes, href: "#projects", label: "Projects" },
    { icon: Mail, href: "#contact", label: "Contact" },
  ];
  return (
    <nav
      aria-label="Sections"
      className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-landing-line/10 bg-landing-surface/85 p-1.5 shadow-xl shadow-black/40 backdrop-blur-md"
    >
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          title={it.label}
          aria-label={it.label}
          className="grid size-10 place-items-center rounded-full text-landing-muted transition-colors hover:bg-landing-line/10 hover:text-landing-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-landing-accent"
        >
          <it.icon className="size-[18px]" />
        </a>
      ))}
      <span className="mx-1 h-5 w-px bg-landing-line/10" />
      <Link
        href="/desktop"
        title="Desktop mode"
        aria-label="Desktop mode"
        className="grid size-10 place-items-center rounded-full text-landing-accent transition-colors hover:bg-landing-accent/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-landing-accent"
      >
        <Command className="size-[18px]" />
      </Link>
    </nav>
  );
}
