"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { WindowId } from "@/components/desktop/WindowManager";
import { FinderAbout } from "@/components/windows/FinderAbout";
import { TerminalSkills } from "@/components/windows/TerminalSkills";
import { SafariProjects } from "@/components/windows/SafariProjects";
import { MailContact } from "@/components/windows/MailContact";
import { NotesExperience } from "@/components/windows/NotesExperience";
import { CalendarEducation } from "@/components/windows/CalendarEducation";
import { LaunchpadOverview } from "@/components/windows/LaunchpadOverview";
import { GitHubStats } from "@/components/windows/GitHubStats";
import { ChevronLeft } from "lucide-react";

const APP_CONTENT: Record<WindowId, { title: string; component: React.ReactNode }> = {
  finder: { title: "About Me", component: <FinderAbout /> },
  terminal: { title: "Skills", component: <TerminalSkills /> },
  safari: { title: "Projects", component: <SafariProjects /> },
  mail: { title: "Contact", component: <MailContact /> },
  notes: { title: "Experience", component: <NotesExperience /> },
  calendar: { title: "Education", component: <CalendarEducation /> },
  github: { title: "GitHub", component: <GitHubStats /> },
  launchpad: { title: "Overview", component: <LaunchpadOverview /> },
};

interface Props {
  appId: WindowId | null;
  onClose: () => void;
}

export function IPhoneAppView({ appId, onClose }: Props) {
  if (!appId) return null;
  const app = APP_CONTENT[appId];

  return (
    <AnimatePresence>
      {appId && (
        <motion.div
          key={appId}
          initial={{ scale: 0.8, opacity: 0, borderRadius: 40 }}
          animate={{ scale: 1, opacity: 1, borderRadius: 0 }}
          exit={{ scale: 0.8, opacity: 0, borderRadius: 40 }}
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
          className="fixed inset-0 z-[100] flex flex-col bg-white dark:bg-[#1c1c1e]"
        >
          {/* App Header Bar */}
          <div className="flex items-center gap-2 px-3 py-2 bg-[#f8f8f8] dark:bg-[#2c2c2e] border-b border-black/5 dark:border-white/5 safe-area-top">
            <button
              onClick={onClose}
              className="flex items-center gap-0.5 text-[#007AFF] text-[15px] font-normal active:opacity-50"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
              <span>Home</span>
            </button>
            <span className="flex-1 text-center text-[15px] font-semibold text-neutral-900 dark:text-white pr-14">
              {app.title}
            </span>
          </div>

          {/* App Content */}
          <div className="flex-1 overflow-y-auto overscroll-contain">
            {app.component}
          </div>

          {/* Home Indicator */}
          <div className="flex justify-center py-2 bg-white dark:bg-[#1c1c1e]">
            <div className="w-[134px] h-[5px] bg-black/20 dark:bg-white/20 rounded-full" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
