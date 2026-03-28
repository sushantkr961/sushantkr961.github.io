"use client";

import { useWindowManager } from "@/hooks/useWindowManager";
import type { WindowId } from "./WindowManager";
import { motion, AnimatePresence } from "framer-motion";
import { type ReactNode } from "react";

interface WindowProps {
  id: WindowId;
  title: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Window({ id, title, icon, children, className }: WindowProps) {
  const { windows, closeWindow, minimizeWindow, focusWindow, maximizeWindow, restoreWindow } =
    useWindowManager();
  const win = windows[id];

  const handleMaximize = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (win.isMaximized) {
      restoreWindow(id);
    } else {
      maximizeWindow(id);
    }
  };

  return (
    <AnimatePresence>
      {win.isOpen && !win.isMinimized && (
        <motion.div
          key={id}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={
            win.isMaximized
              ? { scale: 1, opacity: 1, x: 0, y: 0, width: "100%", height: "100%" }
              : { scale: 1, opacity: 1 }
          }
          exit={{ scale: 0.5, opacity: 0, y: 100 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          drag={!win.isMaximized}
          dragMomentum={false}
          dragConstraints={
            win.isMaximized
              ? undefined
              : {
                  top: 28,
                  left: 0,
                  right: typeof window !== "undefined" ? window.innerWidth - win.size.width : 800,
                  bottom: typeof window !== "undefined" ? window.innerHeight - 80 : 600,
                }
          }
          style={
            win.isMaximized
              ? {
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: win.zIndex,
                  boxShadow: "0 8px 40px rgba(0,0,0,0.3), 0 2px 12px rgba(0,0,0,0.15), inset 0 0.5px 0 rgba(255,255,255,0.1)",
                }
              : {
                  position: "absolute",
                  left: win.position.x,
                  top: win.position.y,
                  width: win.size.width,
                  zIndex: win.zIndex,
                  boxShadow: "0 8px 40px rgba(0,0,0,0.3), 0 2px 12px rgba(0,0,0,0.15), inset 0 0.5px 0 rgba(255,255,255,0.1)",
                }
          }
          onPointerDown={() => focusWindow(id)}
          className={`flex flex-col overflow-hidden border border-white/25 dark:border-white/15 ${win.isMaximized ? "" : "rounded-xl"} ${className ?? ""}`}
        >
          {/* Title Bar */}
          <div
            className="flex items-center gap-2 px-3 py-2.5 border-b border-black/5 dark:border-white/5 select-none cursor-grab active:cursor-grabbing"
            style={{
              background: "rgba(246,246,246,0.75)",
              backdropFilter: "blur(40px) saturate(180%)",
              WebkitBackdropFilter: "blur(40px) saturate(180%)",
            }}
          >
            {/* Traffic Lights */}
            <div className="flex items-center gap-1.5 group">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeWindow(id);
                }}
                className="w-3 h-3 rounded-full bg-[#FF5F57] hover:brightness-90 transition-all flex items-center justify-center"
              >
                <span className="text-[8px] text-black/0 group-hover:text-black/60 font-bold leading-none">
                  ✕
                </span>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  minimizeWindow(id);
                }}
                className="w-3 h-3 rounded-full bg-[#FEBC2E] hover:brightness-90 transition-all flex items-center justify-center"
              >
                <span className="text-[8px] text-black/0 group-hover:text-black/60 font-bold leading-none">
                  −
                </span>
              </button>
              <button
                onClick={handleMaximize}
                className="w-3 h-3 rounded-full bg-[#28C840] hover:brightness-90 transition-all flex items-center justify-center"
              >
                <span className="text-[8px] text-black/0 group-hover:text-black/60 font-bold leading-none">
                  {win.isMaximized ? "⤓" : "⤢"}
                </span>
              </button>
            </div>

            {/* Window Title */}
            <div className="flex-1 flex items-center justify-center gap-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-400">
              <span className="text-sm">{icon}</span>
              <span>{title}</span>
            </div>

            {/* Spacer for centering */}
            <div className="w-[52px]" />
          </div>

          {/* Window Content */}
          <div
            className="flex-1 overflow-y-auto"
            style={{
              background: "rgba(255,255,255,0.88)",
              backdropFilter: "blur(40px) saturate(180%)",
              WebkitBackdropFilter: "blur(40px) saturate(180%)",
              ...(win.isMaximized ? { flex: 1 } : { height: win.size.height - 40 }),
            }}
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
