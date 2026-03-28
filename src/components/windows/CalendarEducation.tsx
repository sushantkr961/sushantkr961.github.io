"use client";

import { DATA } from "@/data/resume";
import { GraduationCap, Award } from "lucide-react";

export function CalendarEducation() {
  return (
    <div className="p-5 overflow-y-auto h-full">
      {/* Education Section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <GraduationCap className="w-4 h-4 text-red-500" />
          <h2 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
            Education
          </h2>
        </div>

        <div className="space-y-3">
          {DATA.education.map((edu) => (
            <a
              key={edu.school}
              href={edu.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-3 rounded-lg bg-[#f8f8f8] dark:bg-[#2a2a2a] border border-black/5 dark:border-white/5 hover:shadow-md transition-shadow"
            >
              {/* Date Column */}
              <div className="w-14 shrink-0 text-center">
                <div className="bg-red-500 text-white text-[9px] font-bold uppercase rounded-t px-1 py-0.5">
                  {edu.start}
                </div>
                <div className="bg-white dark:bg-[#333] border border-t-0 border-black/10 dark:border-white/10 rounded-b px-1 py-1">
                  <span className="text-[10px] text-neutral-600 dark:text-neutral-400">{edu.end}</span>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  {edu.logoUrl && (
                    <img
                      src={edu.logoUrl}
                      alt={edu.school}
                      className="w-6 h-6 rounded object-cover"
                    />
                  )}
                  <div>
                    <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 truncate">
                      {edu.school}
                    </p>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                      {edu.degree}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Award className="w-4 h-4 text-blue-500" />
          <h2 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
            Certifications
          </h2>
        </div>

        <div className="space-y-3">
          {DATA.certification.map((cert) => (
            <a
              key={cert.school}
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-3 rounded-lg bg-[#f8f8f8] dark:bg-[#2a2a2a] border border-black/5 dark:border-white/5 hover:shadow-md transition-shadow"
            >
              {/* Date Column */}
              <div className="w-14 shrink-0 text-center">
                <div className="bg-blue-500 text-white text-[9px] font-bold uppercase rounded-t px-1 py-0.5">
                  {cert.start}
                </div>
                <div className="bg-white dark:bg-[#333] border border-t-0 border-black/10 dark:border-white/10 rounded-b px-1 py-1">
                  <span className="text-[10px] text-neutral-600 dark:text-neutral-400">{cert.end}</span>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  {cert.logoUrl && (
                    <img
                      src={cert.logoUrl}
                      alt={cert.school}
                      className="w-6 h-6 rounded object-cover"
                    />
                  )}
                  <div>
                    <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 truncate">
                      {cert.school}
                    </p>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                      {cert.degree}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
