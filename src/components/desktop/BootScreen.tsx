"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppleLogo } from "./MacIcons";

interface BootScreenProps {
  onComplete: () => void;
}

export function BootScreen({ onComplete }: BootScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate boot progress
    const duration = 2000; // 2 seconds total
    const interval = 30;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step + Math.random() * step * 0.5;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Apple Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AppleLogo className="w-16 h-16 text-white/90" />
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        className="mt-12 w-48 h-[3px] rounded-full bg-white/20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        <motion.div
          className="h-full rounded-full bg-white/90"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.05 }}
        />
      </motion.div>
    </motion.div>
  );
}
