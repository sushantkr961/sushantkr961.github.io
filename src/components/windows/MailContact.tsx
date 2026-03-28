"use client";

import { DATA } from "@/data/resume";
import { Send, Github, Linkedin, Mail } from "lucide-react";

export function MailContact() {
  return (
    <div className="flex h-full">
      {/* Mail Sidebar — hidden on mobile */}
      <div className="hidden md:block w-40 shrink-0 bg-[#f2f1f0]/80 dark:bg-[#252525]/80 border-r border-black/5 dark:border-white/5 p-3">
        <div className="space-y-0.5">
          {["Inbox", "Sent", "Drafts", "Trash"].map((item, i) => (
            <div
              key={item}
              className={`px-2 py-1 rounded text-[11px] ${
                i === 0
                  ? "bg-[#007AFF] text-white"
                  : "text-neutral-600 dark:text-neutral-400"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Compose Area */}
      <div className="flex-1 flex flex-col p-4">
        <div className="space-y-2 border-b border-black/5 dark:border-white/5 pb-3 mb-3">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-neutral-400 w-10">To:</span>
            <span className="text-neutral-700 dark:text-neutral-300">{DATA.contact.email}</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-neutral-400 w-10">From:</span>
            <span className="text-neutral-500">visitor@portfolio.dev</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-neutral-400 w-10">Subject:</span>
            <span className="text-neutral-700 dark:text-neutral-300">Let&apos;s connect!</span>
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Hi {DATA.name.split(" ")[0]}! 👋
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Want to get in touch? Reach out through any of these channels:
          </p>

          {/* Contact Links */}
          <div className="space-y-2">
            {Object.entries(DATA.contact.social).map(([key, social]) => (
              <a
                key={key}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-lg bg-[#f8f8f8] dark:bg-[#2a2a2a] hover:bg-[#f0f0f0] dark:hover:bg-[#333] transition-colors border border-black/5 dark:border-white/5"
              >
                {key === "GitHub" && <Github className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />}
                {key === "LinkedIn" && <Linkedin className="w-4 h-4 text-[#0077b5]" />}
                {key === "email" && <Mail className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />}
                <div>
                  <p className="text-xs font-medium text-neutral-800 dark:text-neutral-200">
                    {social.name}
                  </p>
                  <p className="text-[10px] text-neutral-500">{social.url.replace("https://", "").slice(0, 40)}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-400 mt-2">
            <span>📞 {DATA.contact.tel}</span>
          </div>
        </div>

        {/* Send Button */}
        <div className="pt-3 border-t border-black/5 dark:border-white/5">
          <a
            href={DATA.contact.social.email.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#007AFF] text-white text-xs font-medium rounded-md hover:bg-[#0066d6] transition-colors"
          >
            <Send className="w-3 h-3" />
            Send Email
          </a>
        </div>
      </div>
    </div>
  );
}
