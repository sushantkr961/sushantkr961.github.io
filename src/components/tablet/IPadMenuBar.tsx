"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AppleLogo } from "@/components/desktop/MacIcons";
import { DATA } from "@/data/resume";

export function IPadMenuBar() {
  const { theme, setTheme } = useTheme();
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleDateString("en-US", {
          weekday: "short",
          day: "numeric",
          month: "short",
        }) +
          "\u2002" +
          now.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
          })
      );
    };
    update();
    const interval = setInterval(update, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[28px] z-[9999] flex items-center justify-between px-[16px] select-none"
      style={{
        background: "rgba(0,0,0,0.28)",
        backdropFilter: "blur(80px) saturate(200%)",
        WebkitBackdropFilter: "blur(80px) saturate(200%)",
      }}
    >
      {/* Left */}
      <div className="flex items-center">
        <AppleLogo className="w-[13px] h-[16px] text-white/90" />
        <span className="text-[13px] font-bold text-white/90 ml-[18px] tracking-[0.01em]">
          {DATA.name}
        </span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-[10px]">
        {/* WiFi */}
        <svg className="w-[14px] h-[11px] text-white/80" viewBox="0 0 16 12" fill="currentColor">
          <path d="M8 10.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" />
          <path d="M5.17 8.83a4 4 0 015.66 0" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" />
          <path d="M2.34 6a7 7 0 0111.32 0" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" />
        </svg>

        {/* Battery */}
        <svg className="w-[22px] h-[11px] text-white/80" viewBox="0 0 28 14" fill="none">
          <rect x="0.5" y="0.5" width="24" height="13" rx="2.5" stroke="currentColor" strokeWidth="1" />
          <rect x="25.5" y="4" width="2" height="6" rx="1" fill="currentColor" opacity="0.4" />
          <rect x="2" y="2" width="18" height="9.5" rx="1.5" fill="currentColor" />
        </svg>

        {/* Theme toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:bg-white/10 rounded-[3px] p-[2px] transition-colors"
          >
            {theme === "dark" ? (
              <svg className="w-[13px] h-[13px] text-white/80" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            ) : (
              <svg className="w-[13px] h-[13px] text-white/80" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
            )}
          </button>
        )}

        {/* Time */}
        <span className="text-[13px] text-white/90 font-medium tabular-nums tracking-[0.01em]">
          {time}
        </span>
      </div>
    </div>
  );
}
