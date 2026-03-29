"use client";

import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import type { WindowId } from "@/components/desktop/WindowManager";
import {
  FinderIcon,
  TerminalIcon,
  SafariIcon,
  MailIcon,
  NotesIcon,
  CalendarIcon,
  LaunchpadIcon,
} from "@/components/desktop/MacIcons";
import { IPhoneStatusBar } from "./iPhoneStatusBar";
import { IPhoneAppView } from "./iPhoneAppView";

interface AppItem {
  id: WindowId;
  label: string;
  icon: ReactNode;
}

const HOME_APPS: AppItem[] = [
  { id: "finder", label: "About", icon: <FinderIcon size={60} /> },
  { id: "notes", label: "Experience", icon: <NotesIcon size={60} /> },
  { id: "terminal", label: "Skills", icon: <TerminalIcon size={60} /> },
  { id: "safari", label: "Projects", icon: <SafariIcon size={60} /> },
  { id: "mail", label: "Contact", icon: <MailIcon size={60} /> },
  { id: "calendar", label: "Education", icon: <CalendarIcon size={60} /> },
  { id: "launchpad", label: "Overview", icon: <LaunchpadIcon size={60} /> },
];

const DOCK_APPS: AppItem[] = [
  { id: "finder", label: "About", icon: <FinderIcon size={52} /> },
  { id: "safari", label: "Projects", icon: <SafariIcon size={52} /> },
  { id: "mail", label: "Contact", icon: <MailIcon size={52} /> },
  { id: "terminal", label: "Skills", icon: <TerminalIcon size={52} /> },
];

function AppIcon({
  app,
  onTap,
  showLabel = true,
}: {
  app: AppItem;
  onTap: (id: WindowId) => void;
  showLabel?: boolean;
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.85 }}
      onClick={() => onTap(app.id)}
      className="flex flex-col items-center gap-[5px]"
    >
      <div className="flex items-center justify-center">{app.icon}</div>
      {showLabel && (
        <span className="text-[11px] text-white font-medium tracking-[0.01em] drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
          {app.label}
        </span>
      )}
    </motion.button>
  );
}

export function IPhoneHome() {
  const [openApp, setOpenApp] = useState<WindowId | null>(null);

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Wallpaper */}
      <img
        src="/wallpaper.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Home Screen Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Status Bar */}
        <IPhoneStatusBar />

        {/* App Grid */}
        <div className="flex-1 flex items-start justify-center px-6 pt-10">
          <div className="grid grid-cols-4 gap-x-6 gap-y-6">
            {HOME_APPS.map((app, i) => (
              <motion.div
                key={app.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: 0.1 + i * 0.05,
                }}
              >
                <AppIcon app={app} onTap={setOpenApp} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dock */}
        <div className="px-4 pb-3">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.3 }}
            className="flex items-center justify-around px-4 py-3 rounded-[28px]"
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(40px) saturate(180%)",
              WebkitBackdropFilter: "blur(40px) saturate(180%)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            {DOCK_APPS.map((app) => (
              <AppIcon key={app.id} app={app} onTap={setOpenApp} showLabel={false} />
            ))}
          </motion.div>
        </div>

        {/* Home Indicator */}
        <div className="flex justify-center pb-2">
          <div className="w-[134px] h-[5px] bg-white/30 rounded-full" />
        </div>
      </div>

      {/* Full-screen App View */}
      <IPhoneAppView appId={openApp} onClose={() => setOpenApp(null)} />
    </div>
  );
}
