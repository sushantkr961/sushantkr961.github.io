"use client";

import { useWindowManager } from "@/hooks/useWindowManager";
import type { WindowId } from "./WindowManager";
import { motion } from "framer-motion";
import { useState, useRef, type ReactNode, type MouseEvent } from "react";
import {
  FinderIcon,
  TerminalIcon,
  SafariIcon,
  MailIcon,
  NotesIcon,
  CalendarIcon,
  LaunchpadIcon,
} from "./MacIcons";

interface DockApp {
  id: WindowId;
  label: string;
  icon: ReactNode;
}

const DOCK_APPS: DockApp[] = [
  { id: "finder", label: "Finder", icon: <FinderIcon size={50} /> },
  { id: "terminal", label: "Terminal", icon: <TerminalIcon size={50} /> },
  { id: "safari", label: "Safari", icon: <SafariIcon size={50} /> },
  { id: "mail", label: "Mail", icon: <MailIcon size={50} /> },
  { id: "notes", label: "Notes", icon: <NotesIcon size={50} /> },
  { id: "calendar", label: "Calendar", icon: <CalendarIcon size={50} /> },
  { id: "launchpad", label: "Launchpad", icon: <LaunchpadIcon size={50} /> },
];

function DockIconButton({ app }: { app: DockApp }) {
  const { windows, openWindow, focusWindow } = useWindowManager();
  const [isBouncing, setIsBouncing] = useState(false);
  const win = windows[app.id];

  const handleClick = () => {
    if (!win.isOpen) {
      // Not open — bounce then open
      setIsBouncing(true);
      setTimeout(() => {
        setIsBouncing(false);
        openWindow(app.id);
      }, 500);
    } else if (win.isMinimized) {
      // Minimized — restore it
      openWindow(app.id);
    } else {
      // Already visible — just focus
      focusWindow(app.id);
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      className="relative flex flex-col items-center group px-[3px]"
      whileHover={{ scale: 1.3, y: -14 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {/* Tooltip */}
      <div className="absolute -top-12 px-3 py-1 bg-[#2a2a2a]/90 backdrop-blur-xl text-white text-[12px] font-medium rounded-[4px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-white/[0.08]">
        {app.label}
        <div className="absolute -bottom-[4px] left-1/2 -translate-x-1/2 w-[8px] h-[8px] bg-[#2a2a2a]/90 rotate-45 border-r border-b border-white/[0.08]" />
      </div>

      {/* Icon with bounce */}
      <motion.div
        animate={isBouncing ? { y: [0, -28, 0, -14, 0] } : { y: 0 }}
        transition={
          isBouncing
            ? { duration: 0.5, times: [0, 0.2, 0.45, 0.65, 1] }
            : {}
        }
        className="w-[50px] h-[50px] flex items-center justify-center"
        style={{
          filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.3))",
        }}
      >
        {app.icon}
      </motion.div>

      {/* Open indicator dot */}
      <div className="h-[5px] flex items-center justify-center">
        {win.isOpen && (
          <motion.div
            className="w-[4px] h-[4px] bg-white/60 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
      </div>
    </motion.button>
  );
}

export function Dock() {
  return (
    <div className="fixed bottom-[3px] left-1/2 -translate-x-1/2 z-[9999]">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: 0.3,
        }}
        className="flex items-end px-[8px] pt-[6px] pb-[3px] rounded-[20px]"
        style={{
          background: "rgba(255,255,255,0.18)",
          backdropFilter: "blur(60px) saturate(200%)",
          WebkitBackdropFilter: "blur(60px) saturate(200%)",
          border: "1px solid rgba(255,255,255,0.25)",
          boxShadow:
            "0 12px 40px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.15), inset 0 0.5px 0 rgba(255,255,255,0.2)",
        }}
      >
        {DOCK_APPS.map((app) => (
          <DockIconButton key={app.id} app={app} />
        ))}
      </motion.div>
    </div>
  );
}
