"use client";

import { motion, useReducedMotion } from "framer-motion";

/* ------------------------------------------------------------------ *
 *  The signature: a GPS-style track drawn across the hero. Each
 *  waypoint is a real milestone in chronological order — the line is
 *  the career, drawn the way the trucking app draws a trip.
 * ------------------------------------------------------------------ */

const PTS: [number, number][] = [
  [16, 118],
  [96, 98],
  [172, 106],
  [300, 58],
  [408, 72],
  [520, 38],
  [640, 88],
  [752, 64],
  [868, 78],
  [984, 40],
];

const WAYPOINTS = [
  { i: 0, when: "2024", what: "LoadingWalla", sub: "GPS logistics, Play Store", side: "top" },
  { i: 3, when: "2024", what: "ZFour HRMS", sub: "live on both app stores", side: "bottom" },
  { i: 6, when: "2026", what: "School ERP", sub: "one-click on-prem install", side: "top" },
  { i: 9, when: "now", what: "Industrial IoT", sub: "Pi · ESP32 · MQTT", side: "bottom" },
] as const;

export function RouteTrace() {
  const reduce = useReducedMotion();
  const d = PTS.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x} ${y}`).join(" ");
  const last = PTS[PTS.length - 1];

  return (
    <div className="relative mt-8 select-none" aria-hidden>
      <svg
        viewBox="0 0 1000 150"
        className="h-auto w-full overflow-visible"
        fill="none"
      >
        {/* faint grid — the map underneath the trip */}
        {[30, 75, 120].map((y) => (
          <line
            key={y}
            x1="0"
            x2="1000"
            y1={y}
            y2={y}
            stroke="rgb(var(--l-line) / 0.06)"
            strokeDasharray="2 10"
          />
        ))}
        {/* ghost of the full route */}
        <path d={d} stroke="rgb(var(--l-line) / 0.08)" strokeWidth="2" />
        {/* the drawn route */}
        <motion.path
          d={d}
          stroke="rgb(var(--l-accent))"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: [0.3, 0.1, 0.2, 1], delay: 0.3 }}
        />
        {/* GPS pings along the way */}
        {PTS.map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r={WAYPOINTS.some((w) => w.i === i) ? 5 : 2.5}
            fill={
              WAYPOINTS.some((w) => w.i === i)
                ? "rgb(var(--l-bg))"
                : "rgb(var(--l-accent))"
            }
            stroke="rgb(var(--l-accent))"
            strokeWidth={WAYPOINTS.some((w) => w.i === i) ? 2.5 : 0}
            initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + (i / (PTS.length - 1)) * 2.2, duration: 0.3 }}
          />
        ))}
        {/* live pulse at the current position */}
        {!reduce && (
          <motion.circle
            cx={last[0]}
            cy={last[1]}
            r={6}
            stroke="rgb(var(--l-live))"
            strokeWidth="1.5"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0.8, 0], scale: [0.6, 2.4] }}
            transition={{ delay: 2.7, duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            style={{ transformOrigin: `${last[0]}px ${last[1]}px` }}
          />
        )}
      </svg>

      {/* HTML labels so type stays crisp at every width */}
      {WAYPOINTS.map((w, n) => {
        const [x] = PTS[w.i];
        const left = `${(x / 1000) * 100}%`;
        const isLast = w.i === PTS.length - 1;
        const isFirst = w.i === 0;
        return (
          <motion.div
            key={w.what}
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduce ? 0 : 0.5 + (w.i / (PTS.length - 1)) * 2.2 }}
            style={{ left }}
            className={`absolute whitespace-nowrap font-mono text-[11px] leading-tight ${
              w.side === "top" ? "-top-2 -translate-y-full" : "-bottom-1 translate-y-full"
            } ${
              isLast ? "-translate-x-full text-right" : isFirst ? "" : "-translate-x-1/2 text-center"
            } ${n === 1 || n === 2 ? "hidden sm:block" : ""}`}
          >
            <span className={isLast ? "text-landing-live" : "text-landing-accent"}>
              {w.when}
            </span>
            <span className="text-landing-text"> · {w.what}</span>
            <span className="block text-landing-dim">{w.sub}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
