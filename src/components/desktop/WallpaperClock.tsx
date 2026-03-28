"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function WallpaperClock() {
  const [time, setTime] = useState<{ hours: string; minutes: string; date: string } | null>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime({
        hours: now.getHours().toString(),
        minutes: now.getMinutes().toString().padStart(2, "0"),
        date: now.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        }),
      });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="absolute inset-x-0 top-[12%] flex flex-col items-center select-none pointer-events-none z-[1]"
    >
      {/* Date */}
      <p
        className="text-[20px] font-semibold tracking-wide"
        style={{
          color: "rgba(255,255,255,0.85)",
          textShadow: "0 1px 4px rgba(0,0,0,0.15)",
        }}
      >
        {time.date}
      </p>

      {/* Time — frosted glass effect */}
      <p
        className="font-bold leading-[0.9] mt-1"
        style={{
          fontSize: "clamp(80px, 14vw, 140px)",
          color: "transparent",
          backgroundImage:
            "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.55) 60%, rgba(255,255,255,0.3) 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.1))",
          letterSpacing: "-0.02em",
        }}
      >
        {time.hours}:{time.minutes}
      </p>
    </motion.div>
  );
}
