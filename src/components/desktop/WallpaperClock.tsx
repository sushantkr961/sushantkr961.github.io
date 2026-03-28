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
          weekday: "long",
          month: "long",
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
      className="absolute inset-x-0 top-[15%] flex flex-col items-center select-none pointer-events-none z-[1]"
    >
      <p className="text-white/60 text-[15px] font-medium tracking-wide">
        {time.date}
      </p>
      <p
        className="text-white/70 font-thin tracking-tight leading-none mt-1"
        style={{ fontSize: "clamp(64px, 10vw, 96px)" }}
      >
        {time.hours}:{time.minutes}
      </p>
    </motion.div>
  );
}
