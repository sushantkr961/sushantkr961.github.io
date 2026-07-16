"use client";

import { DATA, ALL_SKILLS } from "@/data/resume";
import { motion } from "framer-motion";

export function TerminalSkills() {
  return (
    <div className="bg-[#1e1e1e] text-green-400 font-mono text-xs p-4 h-full min-h-[360px]">
      {/* Terminal Header */}
      <div className="text-neutral-500 mb-3">
        Last login: {new Date().toDateString()} on ttys001
      </div>

      {/* whoami */}
      <div className="mb-3">
        <span className="text-cyan-400">sushant@portfolio</span>
        <span className="text-neutral-500">:</span>
        <span className="text-blue-400">~</span>
        <span className="text-neutral-500"> $ </span>
        <span className="text-white">whoami</span>
        <div className="text-green-300 mt-0.5">{DATA.name} — {DATA.description}</div>
      </div>

      {/* ls skills */}
      <div className="mb-3">
        <span className="text-cyan-400">sushant@portfolio</span>
        <span className="text-neutral-500">:</span>
        <span className="text-blue-400">~</span>
        <span className="text-neutral-500"> $ </span>
        <span className="text-white">tree ./skills/</span>
        <div className="mt-1.5 space-y-2">
          {DATA.skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 + gi * 0.09 }}
            >
              <div className="text-cyan-300">
                {gi === DATA.skillGroups.length - 1 ? "└──" : "├──"} {group.label}/
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-0.5 pl-5 text-yellow-300">
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* skill count */}
      <div className="mb-3">
        <span className="text-cyan-400">sushant@portfolio</span>
        <span className="text-neutral-500">:</span>
        <span className="text-blue-400">~</span>
        <span className="text-neutral-500"> $ </span>
        <span className="text-white">echo &quot;Total: {ALL_SKILLS.length} skills loaded&quot;</span>
        <div className="text-green-300 mt-0.5">Total: {ALL_SKILLS.length} skills loaded</div>
      </div>

      {/* cat experience */}
      <div className="mb-3">
        <span className="text-cyan-400">sushant@portfolio</span>
        <span className="text-neutral-500">:</span>
        <span className="text-blue-400">~</span>
        <span className="text-neutral-500"> $ </span>
        <span className="text-white">cat ./experience/current.txt</span>
        <div className="text-neutral-300 mt-0.5">
          {DATA.work[0].title} @ {DATA.work[0].company}
        </div>
        <div className="text-neutral-500">
          {DATA.work[0].start} — {DATA.work[0].end}
        </div>
      </div>

      {/* Blinking cursor */}
      <div>
        <span className="text-cyan-400">sushant@portfolio</span>
        <span className="text-neutral-500">:</span>
        <span className="text-blue-400">~</span>
        <span className="text-neutral-500"> $ </span>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-2 h-3.5 bg-green-400 ml-0.5 align-middle"
        />
      </div>
    </div>
  );
}
