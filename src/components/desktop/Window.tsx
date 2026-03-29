"use client";

import { useWindowManager } from "@/hooks/useWindowManager";
import type { WindowId } from "./WindowManager";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useCallback, type ReactNode, type PointerEvent as ReactPointerEvent } from "react";

interface WindowProps {
  id: WindowId;
  title: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}

type Edge = "n" | "s" | "e" | "w" | "ne" | "nw" | "se" | "sw";

const MIN_WIDTH = 320;
const MIN_HEIGHT = 200;

const EDGE_CURSORS: Record<Edge, string> = {
  n: "ns-resize",
  s: "ns-resize",
  e: "ew-resize",
  w: "ew-resize",
  ne: "nesw-resize",
  nw: "nwse-resize",
  se: "nwse-resize",
  sw: "nesw-resize",
};

export function Window({ id, title, icon, children, className }: WindowProps) {
  const { windows, closeWindow, minimizeWindow, focusWindow, maximizeWindow, restoreWindow, resizeWindow, moveWindow } =
    useWindowManager();
  const win = windows[id];
  const resizeRef = useRef<{
    edge: Edge;
    startX: number;
    startY: number;
    startW: number;
    startH: number;
    startPosX: number;
    startPosY: number;
  } | null>(null);

  const handleMaximize = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (win.isMaximized) {
      restoreWindow(id);
    } else {
      maximizeWindow(id);
    }
  };

  const onResizeStart = useCallback(
    (edge: Edge) => (e: ReactPointerEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      focusWindow(id);

      resizeRef.current = {
        edge,
        startX: e.clientX,
        startY: e.clientY,
        startW: win.size.width,
        startH: win.size.height,
        startPosX: win.position.x,
        startPosY: win.position.y,
      };

      const onMove = (ev: globalThis.PointerEvent) => {
        if (!resizeRef.current) return;
        const { edge, startX, startY, startW, startH, startPosX, startPosY } = resizeRef.current;
        const dx = ev.clientX - startX;
        const dy = ev.clientY - startY;

        let newW = startW;
        let newH = startH;
        let newX = startPosX;
        let newY = startPosY;

        if (edge.includes("e")) newW = Math.max(MIN_WIDTH, startW + dx);
        if (edge.includes("w")) {
          newW = Math.max(MIN_WIDTH, startW - dx);
          newX = startPosX + startW - newW;
        }
        if (edge.includes("s")) newH = Math.max(MIN_HEIGHT, startH + dy);
        if (edge.includes("n")) {
          newH = Math.max(MIN_HEIGHT, startH - dy);
          newY = startPosY + startH - newH;
        }

        resizeWindow(id, { width: newW, height: newH });
        moveWindow(id, { x: newX, y: newY });
      };

      const onUp = () => {
        resizeRef.current = null;
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
      };

      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
    },
    [id, win.size, win.position, focusWindow, resizeWindow, moveWindow]
  );

  const resizeHandles: { edge: Edge; className: string }[] = [
    { edge: "n", className: "absolute top-0 left-2 right-2 h-1 cursor-ns-resize" },
    { edge: "s", className: "absolute bottom-0 left-2 right-2 h-1 cursor-ns-resize" },
    { edge: "w", className: "absolute left-0 top-2 bottom-2 w-1 cursor-ew-resize" },
    { edge: "e", className: "absolute right-0 top-2 bottom-2 w-1 cursor-ew-resize" },
    { edge: "nw", className: "absolute top-0 left-0 w-3 h-3 cursor-nwse-resize" },
    { edge: "ne", className: "absolute top-0 right-0 w-3 h-3 cursor-nesw-resize" },
    { edge: "sw", className: "absolute bottom-0 left-0 w-3 h-3 cursor-nesw-resize" },
    { edge: "se", className: "absolute bottom-0 right-0 w-3 h-3 cursor-nwse-resize" },
  ];

  return (
    <AnimatePresence>
      {win.isOpen && !win.isMinimized && (
        <motion.div
          key={id}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            ...(win.isMaximized
              ? { x: -win.position.x, y: -win.position.y }
              : { x: 0, y: 0 }
            ),
          }}
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
          style={{
            position: "absolute",
            left: win.position.x,
            top: win.position.y,
            width: win.isMaximized
              ? (typeof window !== "undefined" ? window.innerWidth : 1200)
              : win.size.width,
            height: win.isMaximized
              ? (typeof window !== "undefined" ? window.innerHeight : 800)
              : win.size.height,
            zIndex: win.zIndex,
            boxShadow: "0 8px 40px rgba(0,0,0,0.3), 0 2px 12px rgba(0,0,0,0.15), inset 0 0.5px 0 rgba(255,255,255,0.1)",
          }}
          onPointerDown={() => focusWindow(id)}
          className={`flex flex-col overflow-hidden border border-white/25 dark:border-white/15 ${win.isMaximized ? "" : "rounded-xl"} ${className ?? ""}`}
        >
          {/* Title Bar */}
          <div
            className="flex items-center gap-2 px-3 py-2.5 bg-[#e8e8e8] dark:bg-[#2d2d2d] border-b border-black/10 dark:border-white/5 select-none cursor-grab active:cursor-grabbing shrink-0"
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
          <div className="flex-1 bg-white dark:bg-[#1e1e1e] overflow-y-auto">
            {children}
          </div>

          {/* Resize handles — only when not maximized */}
          {!win.isMaximized &&
            resizeHandles.map(({ edge, className: cls }) => (
              <div
                key={edge}
                className={`${cls} z-10`}
                onPointerDown={onResizeStart(edge)}
              />
            ))
          }
        </motion.div>
      )}
    </AnimatePresence>
  );
}
