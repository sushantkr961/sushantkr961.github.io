"use client";

import { DATA } from "@/data/resume";
import { MapPin, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export function FinderAbout() {
  return (
    <div className="flex h-full">
      {/* Finder Sidebar — hidden on mobile */}
      <div className="hidden md:block w-44 shrink-0 bg-[#f2f1f0]/80 dark:bg-[#252525]/80 border-r border-black/5 dark:border-white/5 p-3">
        <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider mb-2 px-2">
          Favorites
        </p>
        {Object.entries(DATA.contact.social).map(([key, social]) => (
          <a
            key={key}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-2 py-1 rounded text-[11px] text-neutral-600 dark:text-neutral-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            {key === "GitHub" && <Github className="w-3.5 h-3.5 text-neutral-500" />}
            {key === "LinkedIn" && <Linkedin className="w-3.5 h-3.5 text-blue-500" />}
            {key === "email" && <Mail className="w-3.5 h-3.5 text-neutral-500" />}
            <span>{social.name}</span>
          </a>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 overflow-y-auto">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-3 ring-2 ring-white/20 shadow-lg">
            <Image
              src={DATA.avatarUrl}
              alt={DATA.name}
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            {DATA.name}
          </h1>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-1 mt-0.5">
            <MapPin className="w-3 h-3" />
            {DATA.location}
          </p>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 max-w-md leading-relaxed">
            {DATA.description}
          </p>
        </div>

        <div className="bg-[#f8f8f8] dark:bg-[#2a2a2a] rounded-lg p-4 border border-black/5 dark:border-white/5">
          <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
            About
          </h2>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {DATA.summary.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")}
          </p>
        </div>

        {/* Social Links — shown on mobile since sidebar is hidden */}
        <div className="md:hidden flex flex-wrap gap-2 mt-4">
          {Object.entries(DATA.contact.social).map(([key, social]) => (
            <a
              key={key}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#f8f8f8] dark:bg-[#2a2a2a] border border-black/5 dark:border-white/5 text-xs text-neutral-700 dark:text-neutral-300"
            >
              {key === "GitHub" && <Github className="w-3.5 h-3.5" />}
              {key === "LinkedIn" && <Linkedin className="w-3.5 h-3.5 text-[#0077b5]" />}
              {key === "email" && <Mail className="w-3.5 h-3.5" />}
              {social.name}
            </a>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="bg-[#f8f8f8] dark:bg-[#2a2a2a] rounded-lg p-3 border border-black/5 dark:border-white/5">
            <p className="text-[10px] text-neutral-400 uppercase">Email</p>
            <p className="text-[11px] md:text-xs text-neutral-700 dark:text-neutral-300 mt-0.5 break-all">
              {DATA.contact.email}
            </p>
          </div>
          <div className="bg-[#f8f8f8] dark:bg-[#2a2a2a] rounded-lg p-3 border border-black/5 dark:border-white/5">
            <p className="text-[10px] text-neutral-400 uppercase">Phone</p>
            <p className="text-xs text-neutral-700 dark:text-neutral-300 mt-0.5">
              {DATA.contact.tel}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
