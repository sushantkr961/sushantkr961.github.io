# Portfolio Project — CLAUDE.md

## Project Overview
Sushant Kumar's personal portfolio website deployed at **https://sushantkr961.github.io** via GitHub Pages.

## Current State (as of March 2026)
- **Active branch**: `nextjs-portfolio` — macOS desktop-style portfolio (live)
- **master branch**: Reset to commit `99a3996` (old React CRA portfolio)
- **gh-pages branch**: Contains the currently deployed static build (Next.js macOS desktop version)
- **sushant branch**: Earlier Next.js 14 version (base for nextjs-portfolio)

## What's Built
A **multi-platform portfolio** that adapts to device:
- **Desktop (>1024px)**: macOS-style with MenuBar, Dock, draggable Finder-style windows
- **Tablet (768–1024px)**: iPadOS-style with home screen app grid, centered windows, Dock
- **Mobile (<768px)**: iPhone-style with app grid, full-screen app views, status bar

### Windows / Apps
| Window | App Style | Content |
|--------|-----------|---------|
| Finder | About Me | Profile photo, bio, social links, contact info |
| Terminal | Skills | Terminal-style skill listing with animations |
| Safari | Projects | Tab-based project browser with video previews |
| Mail | Contact | Email, phone, social links |
| Notes | Experience | Work history timeline |
| Calendar | Education | Education timeline |
| Launchpad | Overview | Quick navigation grid, stats, top technologies |

### Key Features
- Draggable, focusable windows with z-index management (desktop)
- Traffic light buttons: close (red), minimize (yellow), fullscreen (green)
- Fullscreen mode hides MenuBar + Dock
- Dock with bounce animation, open indicators, minimize restore
- Dark/light theme toggle via next-themes
- Wallpaper background on all layouts

## Tech Stack
- **Next.js 15** + **React 19** (static export for GitHub Pages)
- **pnpm** as package manager (not npm)
- **Framer Motion 12** for all animations (drag, spring, open/close)
- **Tailwind CSS** + Radix UI for styling
- **next-themes** for dark/light mode
- **gh-pages** package for deployment (with `--dotfiles` for `.nojekyll`)

## Key Files
- `src/data/resume.tsx` — Single source of truth for ALL portfolio data (do NOT split)
- `src/components/desktop/` — macOS shell: Desktop, MenuBar, Dock, Window, WindowManager, MacIcons, Wallpaper
- `src/components/tablet/` — iPadOS layout: IPadDesktop, IPadMenuBar
- `src/components/mobile/` — iPhone layout: iPhoneHome, iPhoneAppView, iPhoneStatusBar
- `src/components/windows/` — Window content: FinderAbout, TerminalSkills, SafariProjects, MailContact, NotesExperience, CalendarEducation, LaunchpadOverview
- `src/hooks/useWindowManager.ts` — Window state hook (open, close, minimize, maximize, focus, restore)
- `src/hooks/useMediaQuery.ts` — Responsive breakpoint hooks (useIsMobile, useIsTablet)
- `next.config.mjs` — Static export, no basePath (user site, served at root `/`)
- `public/` — Assets: profile pic (me.png), wallpaper.jpg, company logos, project demo videos (mp4), .nojekyll

## Deployment
```bash
pnpm run deploy  # builds + pushes out/ to gh-pages branch (use `pnpm run`, not `pnpm deploy`)
```
Site is live at root `/` — no basePath or assetPrefix needed (it's a user site, not a project site).
**Important**: `.nojekyll` in `public/` + `--dotfiles` flag prevents GitHub Pages Jekyll from ignoring `_next/`.

## Build & Dev
```bash
pnpm install      # install deps
pnpm dev          # local dev server (turbopack)
pnpm build        # static export to out/
pnpm run deploy   # build + deploy to gh-pages
```

## Implementation Status
- [x] Phase 1: Project setup (branch created, config fixed)
- [x] Phase 1: Upgrade to Next.js 15 + React 19 + pnpm
- [x] Phase 2: Core desktop infrastructure (WindowManager, Window component)
- [x] Phase 3: Desktop shell (MenuBar, Dock, Desktop)
- [x] Phase 4: Window content (7 windows including Launchpad)
- [x] Phase 5: Icons & polish (fullscreen, minimize restore, MacIcons)
- [x] Phase 5: Responsive layouts (iPad tablet, iPhone mobile)
- [x] Phase 6: Cleanup & deploy (removed old components, .gitignore, .nojekyll, deployed)

## Rules
- Keep ALL portfolio data in `src/data/resume.tsx` — single file, no splitting
- Use pnpm, not npm
- Framer Motion for all animations
- Static export only (no server runtime) — must work on GitHub Pages
- Don't remove public/ assets (images + videos are used)
- Use `pnpm run deploy` (not `pnpm deploy` which is a pnpm workspace command)
