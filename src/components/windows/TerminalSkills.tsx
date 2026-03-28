"use client";

import { DATA } from "@/data/resume";
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
        <span className="text-white">ls ./skills/</span>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-1 mt-1.5">
          {DATA.skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="text-yellow-300"
            >
              {skill}/
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
        <span className="text-white">echo &quot;Total: {DATA.skills.length} skills loaded&quot;</span>
        <div className="text-green-300 mt-0.5">Total: {DATA.skills.length} skills loaded</div>
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
