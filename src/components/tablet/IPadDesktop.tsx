"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { WindowId } from "@/components/desktop/WindowManager";
import { DATA, ALL_SKILLS } from "@/data/resume";
import {
  FinderIcon,
  TerminalIcon,
  SafariIcon,
  MailIcon,
  NotesIcon,
  CalendarIcon,
  GitHubIcon,
  LaunchpadIcon,
} from "@/components/desktop/MacIcons";
import { FinderAbout } from "@/components/windows/FinderAbout";
import { TerminalSkills } from "@/components/windows/TerminalSkills";
import { SafariProjects } from "@/components/windows/SafariProjects";
import { MailContact } from "@/components/windows/MailContact";
import { NotesExperience } from "@/components/windows/NotesExperience";
import { CalendarEducation } from "@/components/windows/CalendarEducation";
import { LaunchpadOverview } from "@/components/windows/LaunchpadOverview";
import { GitHubStats } from "@/components/windows/GitHubStats";
import { Wallpaper } from "@/components/desktop/Wallpaper";
import { IPadMenuBar } from "./IPadMenuBar";

interface AppItem {
  id: WindowId;
  label: string;
  sublabel: string;
  icon: ReactNode;
  component: ReactNode;
}

const APPS: AppItem[] = [
  { id: "finder", label: "About Me", sublabel: "Finder", icon: <FinderIcon size={56} />, component: <FinderAbout /> },
  { id: "terminal", label: "Skills", sublabel: "Terminal", icon: <TerminalIcon size={56} />, component: <TerminalSkills /> },
  { id: "safari", label: "Projects", sublabel: "Safari", icon: <SafariIcon size={56} />, component: <SafariProjects /> },
  { id: "mail", label: "Contact", sublabel: "Mail", icon: <MailIcon size={56} />, component: <MailContact /> },
  { id: "notes", label: "Experience", sublabel: "Notes", icon: <NotesIcon size={56} />, component: <NotesExperience /> },
  { id: "calendar", label: "Education", sublabel: "Calendar", icon: <CalendarIcon size={56} />, component: <CalendarEducation /> },
  { id: "github", label: "GitHub", sublabel: "Open Source", icon: <GitHubIcon size={56} />, component: <GitHubStats /> },
  { id: "launchpad", label: "Overview", sublabel: "Launchpad", icon: <LaunchpadIcon size={56} />, component: <LaunchpadOverview /> },
];

const DOCK_APPS = [
  { id: "finder" as WindowId, icon: <FinderIcon size={46} /> },
  { id: "terminal" as WindowId, icon: <TerminalIcon size={46} /> },
  { id: "safari" as WindowId, icon: <SafariIcon size={46} /> },
  { id: "mail" as WindowId, icon: <MailIcon size={46} /> },
  { id: "notes" as WindowId, icon: <NotesIcon size={46} /> },
  { id: "calendar" as WindowId, icon: <CalendarIcon size={46} /> },
  { id: "github" as WindowId, icon: <GitHubIcon size={46} /> },
  { id: "launchpad" as WindowId, icon: <LaunchpadIcon size={46} /> },
];

function AppIcon({ app, onTap }: { app: AppItem; onTap: (id: WindowId) => void }) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => onTap(app.id)}
      className="flex flex-col items-center gap-2"
    >
      <div className="flex items-center justify-center">{app.icon}</div>
      <div className="text-center">
        <p className="text-[12px] font-medium text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
          {app.label}
        </p>
        <p className="text-[10px] text-white/60 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
          {app.sublabel}
        </p>
      </div>
    </motion.button>
  );
}

export function IPadDesktop() {
  const [openApp, setOpenApp] = useState<WindowId | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const activeApp = APPS.find((a) => a.id === openApp);

  const handleDockTap = (id: WindowId) => {
    if (id === "launchpad") {
      setOpenApp(null);
      setIsFullscreen(false);
    } else {
      setOpenApp(id);
      setIsFullscreen(false);
    }
  };

  const handleClose = () => {
    setOpenApp(null);
    setIsFullscreen(false);
  };

  const handleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  return (
    <div className="fixed inset-0 overflow-hidden select-none">
      <Wallpaper />

      {/* MenuBar — hidden in fullscreen */}
      <AnimatePresence>
        {!isFullscreen && (
          <motion.div
            initial={{ y: -30 }}
            animate={{ y: 0 }}
            exit={{ y: -30 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <IPadMenuBar />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Home Screen — visible when no app is open */}
      <AnimatePresence>
        {!openApp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 pt-[32px] pb-[72px] flex flex-col overflow-y-auto"
          >
            {/* Hero */}
            <div className="text-center pt-5 pb-3">
              <h1 className="text-xl font-semibold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                {DATA.name}
              </h1>
              <p className="text-xs text-white/70 mt-1 px-8 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                {DATA.description}
              </p>
            </div>

            {/* App Grid — 4 columns to fit all 7 apps */}
            <div className="flex justify-center px-10 pt-3 pb-4">
              <div className="grid grid-cols-4 gap-x-12 gap-y-6">
                {APPS.map((app, i) => (
                  <motion.div
                    key={app.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: 0.05 + i * 0.04,
                    }}
                  >
                    <AppIcon app={app} onTap={setOpenApp} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex justify-center gap-3 px-8 pb-3">
              <div className="px-5 py-2 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10">
                <p className="text-sm font-semibold text-white text-center">{ALL_SKILLS.length}</p>
                <p className="text-[9px] text-white/50 uppercase text-center">Skills</p>
              </div>
              <div className="px-5 py-2 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10">
                <p className="text-sm font-semibold text-white text-center">{DATA.projects.length}</p>
                <p className="text-[9px] text-white/50 uppercase text-center">Projects</p>
              </div>
              <div className="px-5 py-2 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10">
                <p className="text-sm font-semibold text-white text-center">{DATA.work.length}</p>
                <p className="text-[9px] text-white/50 uppercase text-center">Roles</p>
              </div>
            </div>

            {/* Top Technologies */}
            <div className="flex justify-center px-8 pb-4">
              <div className="px-4 py-3 rounded-xl bg-white/8 backdrop-blur-xl border border-white/10 max-w-lg w-full">
                <p className="text-[9px] font-semibold text-white/40 uppercase tracking-wider mb-2">
                  Top Technologies
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {ALL_SKILLS.slice(0, 10).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-[10px] font-medium text-white/70 bg-white/10 rounded-full border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* App Window — iPadOS centered style */}
      <AnimatePresence>
        {activeApp && (
          <motion.div
            key={activeApp.id}
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 30 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className={`absolute flex flex-col overflow-hidden shadow-2xl border border-white/15 ${
              isFullscreen
                ? "inset-0 rounded-none z-[9998]"
                : "top-[36px] bottom-[72px] left-4 right-4 rounded-xl"
            }`}
          >
            {/* Title Bar */}
            <div className="flex items-center gap-2 px-3 py-2 bg-[#f6f6f6]/90 dark:bg-[#2d2d2d]/90 backdrop-blur-xl border-b border-black/5 dark:border-white/5 shrink-0">
              {/* Traffic Lights */}
              <div className="flex items-center gap-1.5 group">
                <button
                  onClick={handleClose}
                  className="w-3 h-3 rounded-full bg-[#FF5F57] hover:brightness-90 transition-all flex items-center justify-center"
                >
                  <span className="text-[8px] text-black/0 group-hover:text-black/60 font-bold leading-none">
                    ✕
                  </span>
                </button>
                <button
                  onClick={handleClose}
                  className="w-3 h-3 rounded-full bg-[#FEBC2E] hover:brightness-90 transition-all flex items-center justify-center"
                >
                  <span className="text-[8px] text-black/0 group-hover:text-black/60 font-bold leading-none">
                    −
                  </span>
                </button>
                <button
                  onClick={handleFullscreen}
                  className="w-3 h-3 rounded-full bg-[#28C840] hover:brightness-90 transition-all flex items-center justify-center"
                >
                  <span className="text-[8px] text-black/0 group-hover:text-black/60 font-bold leading-none">
                    {isFullscreen ? "⤓" : "⤢"}
                  </span>
                </button>
              </div>

              {/* Title */}
              <div className="flex-1 text-center text-xs font-medium text-neutral-600 dark:text-neutral-400">
                {activeApp.label}
              </div>
              <div className="w-[52px]" />
            </div>

            {/* Content */}
            <div className="flex-1 bg-white dark:bg-[#1e1e1e] overflow-y-auto">
              {activeApp.component}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dock — hidden in fullscreen */}
      <AnimatePresence>
        {!isFullscreen && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: "spring", stiffness: 250, damping: 25 }}
            className="fixed bottom-[6px] left-0 right-0 z-[9999] flex justify-center"
          >
            <div
              className="flex items-center gap-[2px] px-[8px] pt-[6px] pb-[4px] rounded-[22px]"
              style={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(50px) saturate(180%)",
                WebkitBackdropFilter: "blur(50px) saturate(180%)",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.25), inset 0 0.5px 0 rgba(255,255,255,0.15)",
              }}
            >
              {DOCK_APPS.map((app) => (
                <motion.button
                  key={app.id}
                  onClick={() => handleDockTap(app.id)}
                  className="relative flex flex-col items-center group px-[3px]"
                  whileHover={{ scale: 1.2, y: -8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <div
                    className="w-[46px] h-[46px] flex items-center justify-center"
                    style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.3))" }}
                  >
                    {app.icon}
                  </div>
                  {/* Open indicator */}
                  <div className="h-[4px] flex items-center justify-center">
                    {openApp === app.id && (
                      <motion.div
                        className="w-[4px] h-[4px] bg-white/60 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                      />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Home indicator */}
      {!isFullscreen && (
        <div className="fixed bottom-[2px] left-1/2 -translate-x-1/2 z-[9999]">
          <div className="w-[134px] h-[4px] bg-white/20 rounded-full" />
        </div>
      )}
    </div>
  );
}
