"use client";

import { DATA } from "@/data/resume";
import { useWindowManager } from "@/hooks/useWindowManager";
import type { WindowId } from "@/components/desktop/WindowManager";
import { motion } from "framer-motion";
import {
  FinderIcon,
  TerminalIcon,
  SafariIcon,
  MailIcon,
  NotesIcon,
  CalendarIcon,
} from "@/components/desktop/MacIcons";
import type { ReactNode } from "react";

interface QuickLink {
  id: WindowId;
  label: string;
  sublabel: string;
  icon: ReactNode;
}

const QUICK_LINKS: QuickLink[] = [
  { id: "finder", label: "About Me", sublabel: "Finder", icon: <FinderIcon size={40} /> },
  { id: "terminal", label: "Skills", sublabel: "Terminal", icon: <TerminalIcon size={40} /> },
  { id: "safari", label: "Projects", sublabel: "Safari", icon: <SafariIcon size={40} /> },
  { id: "mail", label: "Contact", sublabel: "Mail", icon: <MailIcon size={40} /> },
  { id: "notes", label: "Experience", sublabel: "Notes", icon: <NotesIcon size={40} /> },
  { id: "calendar", label: "Education", sublabel: "Calendar", icon: <CalendarIcon size={40} /> },
];

export function LaunchpadOverview() {
  const { openWindow, closeWindow } = useWindowManager();

  const handleOpen = (id: WindowId) => {
    openWindow(id);
    closeWindow("launchpad");
  };

  return (
    <div className="p-5 overflow-y-auto h-full">
      {/* Hero */}
      <div className="text-center mb-5">
        <h1 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          {DATA.name}
        </h1>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
          {DATA.description}
        </p>
      </div>

      {/* Quick Links Grid */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {QUICK_LINKS.map((link, i) => (
          <motion.button
            key={link.id}
            onClick={() => handleOpen(link.id)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex flex-col items-center gap-2 p-3 rounded-xl bg-[#f8f8f8] dark:bg-[#2a2a2a] border border-black/5 dark:border-white/5 hover:bg-[#f0f0f0] dark:hover:bg-[#333] transition-colors"
          >
            {link.icon}
            <div className="text-center">
              <p className="text-[11px] font-medium text-neutral-800 dark:text-neutral-200">
                {link.label}
              </p>
              <p className="text-[9px] text-neutral-400">{link.sublabel}</p>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        <div className="bg-[#f8f8f8] dark:bg-[#2a2a2a] rounded-lg p-3 border border-black/5 dark:border-white/5 text-center">
          <p className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
            {DATA.skills.length}
          </p>
          <p className="text-[10px] text-neutral-400 uppercase">Skills</p>
        </div>
        <div className="bg-[#f8f8f8] dark:bg-[#2a2a2a] rounded-lg p-3 border border-black/5 dark:border-white/5 text-center">
          <p className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
            {DATA.projects.length}
          </p>
          <p className="text-[10px] text-neutral-400 uppercase">Projects</p>
        </div>
        <div className="bg-[#f8f8f8] dark:bg-[#2a2a2a] rounded-lg p-3 border border-black/5 dark:border-white/5 text-center">
          <p className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
            {DATA.work.length}
          </p>
          <p className="text-[10px] text-neutral-400 uppercase">Roles</p>
        </div>
      </div>

      {/* Top Skills */}
      <div className="bg-[#f8f8f8] dark:bg-[#2a2a2a] rounded-lg p-3 border border-black/5 dark:border-white/5">
        <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider mb-2">
          Top Technologies
        </p>
        <div className="flex flex-wrap gap-1.5">
          {DATA.skills.slice(0, 10).map((skill) => (
            <span
              key={skill}
              className="px-2 py-0.5 text-[10px] font-medium bg-white dark:bg-[#333] text-neutral-600 dark:text-neutral-400 rounded-full border border-black/5 dark:border-white/5"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
