"use client";

import type { Project } from "@/data/resume";

/* ------------------------------------------------------------------ *
 *  Generated cover for projects with no video: a signal trace seeded
 *  from the product name, so every card is different but on-brand.
 *  No image files, no network — just SVG.
 * ------------------------------------------------------------------ */

function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function seeded(seed: number) {
  let s = seed || 1;
  return () => {
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    return ((s >>> 0) % 10000) / 10000;
  };
}

export function ProjectCover({ p, className = "" }: { p: Project; className?: string }) {
  const rnd = seeded(hash(p.subtitle));
  const n = 14;
  const pts: [number, number][] = Array.from({ length: n }, (_, i) => [
    (i / (n - 1)) * 400,
    110 - rnd() * 70,
  ]);
  const d = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const bars = p.group === "iot";
  const initials = p.subtitle
    .split(/[\s·]+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <div className={`absolute inset-0 overflow-hidden bg-landing-bg ${className}`}>
      <svg viewBox="0 0 400 160" className="absolute inset-0 size-full" aria-hidden>
        <defs>
          <linearGradient id={`g-${hash(p.subtitle)}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="rgb(var(--l-accent))" stopOpacity="0.28" />
            <stop offset="1" stopColor="rgb(var(--l-accent))" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* grid */}
        {[40, 80, 120].map((y) => (
          <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="rgb(var(--l-line) / 0.05)" />
        ))}
        {[80, 160, 240, 320].map((x) => (
          <line key={x} y1="0" y2="160" x1={x} x2={x} stroke="rgb(var(--l-line) / 0.05)" />
        ))}
        {bars ? (
          pts.map(([x, y], i) => (
            <rect
              key={i}
              x={(i * 400) / n + 4}
              y={y}
              width={400 / n - 8}
              height={160 - y}
              rx="2"
              fill="rgb(var(--l-accent))"
              opacity={0.12 + (i % 3) * 0.08}
            />
          ))
        ) : (
          <>
            <path d={`${d} L400 160 L0 160 Z`} fill={`url(#g-${hash(p.subtitle)})`} />
            <path
              d={d}
              fill="none"
              stroke="rgb(var(--l-accent))"
              strokeWidth="2"
              strokeLinejoin="round"
              opacity="0.85"
            />
            {pts
              .filter((_, i) => i % 4 === 0)
              .map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="3" fill="rgb(var(--l-accent))" />
              ))}
          </>
        )}
      </svg>
      <span className="pointer-events-none absolute right-4 top-3 font-display text-5xl font-semibold text-landing-line/[0.07]">
        {initials}
      </span>
    </div>
  );
}
