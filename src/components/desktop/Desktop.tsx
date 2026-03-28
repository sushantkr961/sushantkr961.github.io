"use client";

import { WindowManagerProvider, type WindowId } from "./WindowManager";
import { MenuBar } from "./MenuBar";
import { Dock } from "./Dock";
import { Window } from "./Window";
import { Wallpaper } from "./Wallpaper";
import { FinderAbout } from "@/components/windows/FinderAbout";
import { TerminalSkills } from "@/components/windows/TerminalSkills";
import { SafariProjects } from "@/components/windows/SafariProjects";
import { MailContact } from "@/components/windows/MailContact";
import { NotesExperience } from "@/components/windows/NotesExperience";
import { CalendarEducation } from "@/components/windows/CalendarEducation";
import { LaunchpadOverview } from "@/components/windows/LaunchpadOverview";
import {
  FinderIcon,
  TerminalIcon,
  SafariIcon,
  MailIcon,
  NotesIcon,
  CalendarIcon,
  LaunchpadIcon,
} from "./MacIcons";
import { IPhoneHome } from "@/components/mobile/iPhoneHome";
import { IPadDesktop } from "@/components/tablet/IPadDesktop";
import { BootScreen } from "./BootScreen";
import { WallpaperClock } from "./WallpaperClock";
import { useIsMobile, useIsTablet } from "@/hooks/useMediaQuery";
import { useWindowManager } from "@/hooks/useWindowManager";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WINDOW_IDS: WindowId[] = ["finder", "terminal", "safari", "mail", "notes", "calendar", "launchpad"];

function MacDesktopInner() {
  const { windows } = useWindowManager();

  // Check if any window is maximized
  const anyMaximized = WINDOW_IDS.some(
    (id) => windows[id].isOpen && !windows[id].isMinimized && windows[id].isMaximized
  );

  const anyWindowOpen = WINDOW_IDS.some(
    (id) => windows[id].isOpen && !windows[id].isMinimized
  );

  return (
    <div className="fixed inset-0 overflow-hidden select-none">
      <Wallpaper />

      {/* Wallpaper Clock — visible when no windows are open */}
      <AnimatePresence>
        {!anyWindowOpen && (
          <motion.div
            key="clock"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <WallpaperClock />
          </motion.div>
        )}
      </AnimatePresence>

      {/* MenuBar — hidden when fullscreen */}
      <AnimatePresence>
        {!anyMaximized && (
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: -30 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <MenuBar />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 pt-[25px] pb-[68px]" style={anyMaximized ? { paddingTop: 0, paddingBottom: 0 } : undefined}>
        <Window id="finder" title="Finder — About Me" icon={<FinderIcon size={16} />}>
          <FinderAbout />
        </Window>
        <Window id="terminal" title="Terminal — zsh" icon={<TerminalIcon size={16} />}>
          <TerminalSkills />
        </Window>
        <Window id="safari" title="Safari — Projects" icon={<SafariIcon size={16} />}>
          <SafariProjects />
        </Window>
        <Window id="mail" title="Mail — Contact" icon={<MailIcon size={16} />}>
          <MailContact />
        </Window>
        <Window id="notes" title="Notes — Experience" icon={<NotesIcon size={16} />}>
          <NotesExperience />
        </Window>
        <Window id="calendar" title="Calendar — Education" icon={<CalendarIcon size={16} />}>
          <CalendarEducation />
        </Window>
        <Window id="launchpad" title="Launchpad — Overview" icon={<LaunchpadIcon size={16} />}>
          <LaunchpadOverview />
        </Window>
      </div>

      {/* Dock — hidden when fullscreen */}
      <AnimatePresence>
        {!anyMaximized && (
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: "spring", stiffness: 250, damping: 25 }}
          >
            <Dock />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MacDesktop() {
  return (
    <WindowManagerProvider>
      <MacDesktopInner />
    </WindowManagerProvider>
  );
}

export function Desktop() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const [booting, setBooting] = useState(true);
  const [mounted, setMounted] = useState(false);

  const handleBootComplete = useCallback(() => {
    setBooting(false);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 bg-black" />
    );
  }

  return (
    <>
      <AnimatePresence>
        {booting && <BootScreen onComplete={handleBootComplete} />}
      </AnimatePresence>
      {!booting && (
        isMobile ? <IPhoneHome /> : isTablet ? <IPadDesktop /> : <MacDesktop />
      )}
    </>
  );
}
