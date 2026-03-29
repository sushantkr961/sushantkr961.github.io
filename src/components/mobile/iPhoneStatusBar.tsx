"use client";

import { useEffect, useState } from "react";

export function IPhoneStatusBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    update();
    const interval = setInterval(update, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-between px-6 pt-[14px] pb-[6px] select-none">
      {/* Time */}
      <span className="text-[15px] font-semibold text-white tracking-[0.01em] w-16">
        {time}
      </span>

      {/* Spacer */}
      <div className="w-[126px]" />

      {/* Right icons */}
      <div className="flex items-center gap-[5px] w-16 justify-end">
        {/* Cellular */}
        <svg className="w-[17px] h-[12px] text-white" viewBox="0 0 20 14" fill="currentColor">
          <rect x="0" y="10" width="3" height="4" rx="0.5" />
          <rect x="4.5" y="7" width="3" height="7" rx="0.5" />
          <rect x="9" y="4" width="3" height="10" rx="0.5" />
          <rect x="13.5" y="0" width="3" height="14" rx="0.5" />
        </svg>
        {/* WiFi */}
        <svg className="w-[15px] h-[11px] text-white" viewBox="0 0 16 12" fill="currentColor">
          <path d="M8 10.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" />
          <path d="M5.17 8.83a4 4 0 015.66 0" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M2.34 6a7 7 0 0111.32 0" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M-.2 3.2a10 10 0 0116.4 0" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
        {/* Battery */}
        <svg className="w-[25px] h-[12px] text-white" viewBox="0 0 30 14" fill="none">
          <rect x="0.5" y="0.5" width="24" height="12.5" rx="3" stroke="currentColor" strokeWidth="1" />
          <rect x="25.5" y="4" width="2.5" height="5.5" rx="1" fill="currentColor" opacity="0.4" />
          <rect x="2" y="2" width="18" height="9" rx="1.5" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
