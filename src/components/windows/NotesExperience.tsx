"use client";

import { DATA } from "@/data/resume";
import { useState } from "react";
import { Briefcase, Calendar } from "lucide-react";

export function NotesExperience() {
  const [selected, setSelected] = useState(0);
  const work = DATA.work[selected];

  return (
    <div className="flex flex-col md:flex-row h-full">
      {/* Notes Sidebar — horizontal on mobile, vertical on desktop */}
      <div className="md:w-48 shrink-0 bg-[#fefce8]/80 dark:bg-[#2a2518]/80 border-b md:border-b-0 md:border-r border-black/5 dark:border-white/5 overflow-x-auto md:overflow-y-auto">
        <div className="p-2 border-b border-black/5 dark:border-white/5">
          <p className="text-[10px] font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider px-2">
            Work Experience
          </p>
        </div>
        <div className="flex md:flex-col">
          {DATA.work.map((w, i) => (
            <button
              key={w.company}
              onClick={() => setSelected(i)}
              className={`min-w-[140px] md:min-w-0 w-full text-left p-2.5 border-b border-black/5 dark:border-white/5 transition-colors ${
                i === selected
                  ? "bg-[#fef08a]/50 dark:bg-amber-900/20"
                  : "hover:bg-[#fef9c3]/30 dark:hover:bg-amber-900/10"
              }`}
            >
              <p className="text-[11px] font-semibold text-neutral-800 dark:text-neutral-200 truncate">
                {w.company}
              </p>
              <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                {w.title}
              </p>
              <p className="text-[9px] text-neutral-400 mt-0.5">
                {w.start} — {w.end}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Note Content */}
      <div className="flex-1 bg-[#fffef5] dark:bg-[#1e1e1e] p-4 md:p-5 overflow-y-auto">
        <div className="max-w-lg">
          <div className="flex items-start gap-3 mb-4">
            {work.logoUrl && (
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-black/10 dark:border-white/10 shrink-0">
                <img src={work.logoUrl} alt={work.company} className="w-full h-full object-cover" />
              </div>
            )}
            <div>
              <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                {work.company}
              </h2>
              <span className="flex items-center gap-1 text-[11px] text-neutral-500 mt-0.5">
                <Briefcase className="w-3 h-3" />
                {work.title}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-4 text-[11px] text-neutral-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {work.start} — {work.end}
            </span>
            {work.location && <span>📍 {work.location}</span>}
          </div>

          {work.badges && work.badges.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {work.badges.map((badge) => (
                <span key={badge} className="px-2 py-0.5 text-[10px] font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full">
                  {badge}
                </span>
              ))}
            </div>
          )}

          <div className="border-t border-amber-200/50 dark:border-white/5 pt-4">
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {work.description}
            </p>
          </div>

          {work.href && (
            <a href={work.href} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-[11px] text-[#007AFF] hover:underline">
              Visit {work.company} →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
