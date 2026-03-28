# Portfolio Project — CLAUDE.md

## Project Overview
Sushant Kumar's personal portfolio website deployed at **https://sushantkr961.github.io** via GitHub Pages.

## Current State (as of March 2026)
- **Active branch**: `nextjs-portfolio` — macOS desktop-style portfolio rebuild in progress
- **master branch**: Reset to commit `99a3996` (old React CRA portfolio, matches what's currently live)
- **gh-pages branch**: Contains the currently deployed static build (React CRA version)
- **sushant branch**: Earlier Next.js 14 version (base for nextjs-portfolio)

## What's Being Built
A **macOS desktop-style portfolio** with:
- Menu bar (top), Dock (bottom), draggable Finder-style windows
- Windows for: About (Finder), Skills (Terminal), Projects (Safari), Contact (Mail), Experience (Notes), Education (Calendar), Launchpad (overview)
- All portfolio data lives in a single file: `src/data/resume.tsx`

## Tech Stack (Target)
- **Next.js 15** + **React 19** (static export for GitHub Pages)
- **pnpm** as package manager (not npm)
- **Framer Motion 12** for all animations (drag, spring, open/close)
- **Tailwind CSS** + Radix UI for styling
- **next-themes** for dark/light mode
- **gh-pages** package for deployment

## Key Files
- `src/data/resume.tsx` — Single source of truth for ALL portfolio data (do NOT split)
- `src/components/desktop/` — macOS shell components (MenuBar, Dock, Window, WindowManager, Desktop)
- `src/components/windows/` — Window content components (FinderAbout, TerminalSkills, etc.)
- `next.config.mjs` — Static export, no basePath (user site, served at root `/`)
- `public/` — Assets: profile pic (me.png), company logos, 4 project demo videos (mp4)

## Deployment
```bash
pnpm deploy  # builds + pushes out/ to gh-pages branch
```
Site is live at root `/` — no basePath or assetPrefix needed (it's a user site, not a project site).

## Build & Dev
```bash
pnpm install    # install deps
pnpm dev        # local dev server (turbopack)
pnpm build      # static export to out/
pnpm deploy     # build + deploy to gh-pages
```

## Implementation Status
- [x] Phase 1: Project setup (branch created, config fixed)
- [ ] Phase 1: Upgrade to Next.js 15 + React 19 + pnpm
- [ ] Phase 2: Core desktop infrastructure (WindowManager, Window component)
- [ ] Phase 3: Desktop shell (MenuBar, Dock, Desktop)
- [ ] Phase 4: Window content (7 windows)
- [ ] Phase 5: Icons & polish
- [ ] Phase 6: Cleanup & deploy

## Rules
- Keep ALL portfolio data in `src/data/resume.tsx` — single file, no splitting
- Use pnpm, not npm
- Framer Motion for all animations
- Static export only (no server runtime) — must work on GitHub Pages
- Don't remove public/ assets (images + videos are used)
