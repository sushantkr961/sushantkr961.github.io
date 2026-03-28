"use client";

import { DATA } from "@/data/resume";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Lock, ExternalLink } from "lucide-react";

export function SafariProjects() {
  const [activeTab, setActiveTab] = useState(0);
  const project = DATA.projects[activeTab];

  return (
    <div className="flex flex-col h-full">
      {/* Safari Tab Bar */}
      <div className="flex items-center gap-1 px-2 py-1 bg-[#e8e8e8] dark:bg-[#333] border-b border-black/5 dark:border-white/5 overflow-x-auto">
        {DATA.projects.map((p, i) => (
          <button
            key={p.title}
            onClick={() => setActiveTab(i)}
            className={`px-3 py-1 rounded-md text-[10px] font-medium whitespace-nowrap transition-colors ${
              i === activeTab
                ? "bg-white dark:bg-[#444] text-neutral-800 dark:text-neutral-200 shadow-sm"
                : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
            }`}
          >
            {p.title.length > 20 ? p.title.slice(0, 20) + "…" : p.title}
          </button>
        ))}
      </div>

      {/* Address Bar */}
      <div className="flex items-center gap-2 px-3 py-1.5 bg-[#f0f0f0] dark:bg-[#2a2a2a] border-b border-black/5 dark:border-white/5">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab(Math.max(0, activeTab - 1))}
            className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setActiveTab(Math.min(DATA.projects.length - 1, activeTab + 1))}
            className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="flex-1 flex items-center gap-1.5 bg-white dark:bg-[#3a3a3a] rounded-md px-2 py-1 text-[11px]">
          <Lock className="w-2.5 h-2.5 text-green-500" />
          <span className="text-neutral-500 dark:text-neutral-400">{project.href}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Video/Image Preview */}
        {project.video && (
          <div className="rounded-lg overflow-hidden mb-4 border border-black/10 dark:border-white/10 shadow-sm">
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
            />
          </div>
        )}

        {/* Project Info */}
        <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
          {project.title}
        </h2>
        <p className="text-[11px] text-neutral-500 mb-3">{project.dates}</p>
        <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
          {project.description.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] font-medium bg-[#f0f0f0] dark:bg-[#333] text-neutral-600 dark:text-neutral-400 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-2">
          {project.links.map((link) => (
            <a
              key={link.type}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 text-[11px] font-medium bg-[#007AFF] text-white rounded-md hover:bg-[#0066d6] transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              {link.type}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
