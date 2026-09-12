import { Icons } from "@/components/icons";
import { HomeIcon, UserIcon } from "lucide-react";
import type { ReactNode } from "react";

/* ------------------------------------------------------------------ *
 *  Projects — newest first. `featured` picks the big cards on the home
 *  page; `subtitle` is the short product name the desktop Safari tabs use;
 *  `kind` drives the badge ("employer · private", "freelance", …).
 *  Employer and contract cards carry NO source link on purpose.
 * ------------------------------------------------------------------ */
export type ProjectKind =
  | "employer"
  | "contract"
  | "freelance"
  | "product"
  | "open-source";
export type ProjectGroup = "iot" | "platforms" | "freelance" | "earlier";

export interface Project {
  /** Action-verb headline shown on cards. */
  title: string;
  /** Short product name (desktop Safari tabs, card eyebrow). */
  subtitle: string;
  kind: ProjectKind;
  group: ProjectGroup;
  /** One honest line about what I did on it. */
  role?: string;
  featured?: boolean;
  /** Physical hardware involved, shown as chips. */
  hardware?: readonly string[];
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: readonly string[];
  links: readonly { type: string; href: string; icon: ReactNode }[];
  image: string;
  video: string;
}

export const PROJECT_GROUPS: Record<ProjectGroup, { label: string; blurb: string }> = {
  iot: {
    label: "Industrial IoT at Uptime Linked",
    blurb: "Sensors on factory machines → live dashboards, relays and reports. 2026 – present.",
  },
  platforms: {
    label: "Logistics & HR platforms",
    blurb: "Marketplace, GPS and HR products I built and led at Pantheon Digital. 2023 – 2026.",
  },
  freelance: {
    label: "Freelance & own products",
    blurb: "Client builds shipped end to end, plus a product of my own.",
  },
  earlier: {
    label: "Earlier & open source",
    blurb: "Full-stack builds from the first years — source on GitHub.",
  },
};

const PROJECTS: readonly Project[] = [
  /* ---------------------- Industrial IoT (2026 →) ---------------------- */
  {
    title: "Keep every factory machine visible, live",
    subtitle: "UptimeLinked",
    kind: "employer",
    group: "iot",
    featured: true,
    role: "Lead engineer · top contributor (490+ commits) · team of 6",
    href: "https://www.hungrybulb.com",
    dates: "Mar 2026 – Present",
    active: true,
    description:
      "Manufacturing IoT platform that turns sensor pulses from the shop floor into decisions a plant manager can act on. Three-phase power meters, cycle counters and temperature loggers stream readings over MQTT; the platform turns them into live Active / Idle / Offline boards, shift-wise production sheets, OEE and productivity scores, automatic downtime tickets with 4M root-cause analysis, energy and carbon reports, and ANDON kiosks on factory TVs. Next.js 16 with ~470 API routes and ~120 Prisma models on MySQL, TimescaleDB for high-volume sensor archives, and alerts over Telegram, WhatsApp and push. Built with the Uptime Linked team; I lead the platform and its roadmap.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "MySQL",
      "TimescaleDB",
      "MQTT",
      "Firebase",
      "Telegram Bot",
      "AWS S3",
      "Recharts",
    ],
    hardware: ["3-phase power meters", "Cycle counters", "NodeMCU", "Temperature / BMS loggers"],
    links: [],
    image: "",
    video: "",
  },
  {
    title: "Read machines from a Raspberry Pi and phone home",
    subtitle: "Intelli-Edge",
    kind: "employer",
    group: "iot",
    featured: true,
    role: "Team build · I own the device sync, health and update paths",
    href: "https://www.hungrybulb.com",
    dates: "2026",
    active: true,
    description:
      "A Python agent that runs on a Raspberry Pi bolted next to the machines. It reads 11 digital inputs and 4 current transformers through an Arduino Nano, plus a Modbus RTU energy meter where one is fitted, and reports one row per machine per time window to UptimeLinked. It runs as a systemd service, queues uploads atomically so a power cut never corrupts data, provisions its own device identity, and self-updates from a signed manifest. Built with the Uptime Linked team.",
    technologies: ["Python", "Raspberry Pi", "Arduino Nano", "Modbus RTU", "systemd", "REST"],
    hardware: ["Raspberry Pi", "Arduino Nano", "Current transformers (CT)", "Modbus RTU energy meter"],
    links: [],
    image: "",
    video: "",
  },
  {
    title: "Drive factory-floor TVs and relays from the cloud",
    subtitle: "Machine Mate",
    kind: "employer",
    group: "iot",
    role: "Team build · I own the server API, relay control spec and device runbook",
    href: "https://www.hungrybulb.com",
    dates: "2026",
    active: true,
    description:
      "A Raspberry Pi 4 that hangs behind one or two TVs on a factory floor. It only ever calls out: every few seconds it asks the server what each screen should show, renders the dashboards with a PySide6 / QML renderer on two HDMI outputs, and drives five GPIO relays — red, yellow and green stack lights, a buzzer and a machine interlock. If the network drops it keeps showing the last data marked stale and fails every relay open after a 75-second grace window. Ships with a one-line installer, A/B self-update with rollback, and an mmctl command for status, logs and reset. Built with the Uptime Linked team.",
    technologies: ["Python", "PySide6 / QML", "Raspberry Pi", "GPIO", "systemd", "Next.js"],
    hardware: ["Raspberry Pi 4", "5-channel GPIO relays", "Stack lights + buzzer", "Dual HDMI"],
    links: [],
    image: "",
    video: "",
  },
  {
    title: "Bridge RS485 energy meters to the internet",
    subtitle: "ESP32 Modbus Gateway",
    kind: "employer",
    group: "iot",
    role: "Team build · firmware planning, server API and test server",
    href: "https://www.hungrybulb.com",
    dates: "2026",
    active: true,
    description:
      "ESP32 firmware that polls RS485 / Modbus RTU devices — starting with the Selec MFM376 three-phase energy meter — from a manifest the server hands it, then uploads readings as JSON over HTTPS. Handles Wi-Fi management, configuration in EEPROM, SD-card buffering while offline and a hardware reset button, on a custom PCB. Built with the Uptime Linked team.",
    technologies: ["C++ (Arduino)", "ESP32", "Modbus RTU", "RS485", "HTTPS", "Express"],
    hardware: ["ESP32", "MAX485 transceiver", "Selec MFM376 energy meter", "SD card"],
    links: [],
    image: "",
    video: "",
  },
  {
    title: "Turn power meters into shift-by-shift energy reports",
    subtitle: "UptimeLinked Energy",
    kind: "employer",
    group: "iot",
    role: "Contributor · reports and run-time derivation",
    href: "https://www.hungrybulb.com",
    dates: "2026",
    active: true,
    description:
      "Energy monitoring app for factories: shift and hourly energy reports, machine run-time derived from consumption for customers with energy-only sensors, PDF and Excel exports, and alerts through a Telegram bot. A Next.js PWA over Prisma and MySQL; the ESP32 gateway firmware that feeds it lives in the same repo.",
    technologies: ["Next.js", "Prisma", "MySQL", "PWA", "Telegram Bot", "jsPDF", "ExcelJS"],
    links: [],
    image: "",
    video: "",
  },
  {
    title: "Trace every order from batch to dispatch",
    subtitle: "TaktBoard",
    kind: "employer",
    group: "iot",
    role: "Merge lead · planned and lead the TaktBoard → UptimeLinked merge",
    href: "https://www.hungrybulb.com",
    dates: "2026",
    active: true,
    description:
      "Production planning and traceability MES for discrete manufacturers. Customer orders become batches that move through a visual workflow designer — material receipt, processing, assembly, quality check, packaging, warehouse, with outsourced stages — with pick lists, per-stage rejected and rework counts, QR / barcode scanning, OEE and operator analytics, and an AI assistant powered by Claude. Being merged into UptimeLinked as sellable module bundles.",
    technologies: [
      "Next.js 16",
      "React 19",
      "Prisma",
      "MySQL",
      "React Flow",
      "TanStack Query",
      "Zod",
      "Anthropic SDK",
      "Cloudflare R2",
    ],
    links: [],
    image: "",
    video: "",
  },
  {
    title: "Get upstream of every deal",
    subtitle: "Upstream CRM",
    kind: "employer",
    group: "iot",
    role: "Core contributor (30+ commits)",
    href: "https://www.hungrybulb.com",
    dates: "2026",
    active: true,
    description:
      "Sales CRM with a drag-and-drop kanban pipeline, deal lifecycle with stages and probabilities, contacts and companies, a product catalogue with margins, activities and reports. Connected to UptimeLinked through signed webhooks so support and sales share one customer record.",
    technologies: ["Next.js", "TypeScript", "MySQL", "NextAuth", "dnd-kit", "Recharts"],
    links: [],
    image: "",
    video: "",
  },
  {
    title: "Close deals from the phone",
    subtitle: "Upstream CRM app",
    kind: "employer",
    group: "iot",
    role: "Built solo",
    href: "https://www.hungrybulb.com",
    dates: "2026",
    active: true,
    description:
      "Expo companion app for the CRM: deals with role-based permissions, push notifications, secure token storage and haptics, routed with expo-router.",
    technologies: ["React Native", "Expo", "expo-router", "TanStack Query", "NativeWind"],
    links: [],
    image: "",
    video: "",
  },
  {
    title: "Put the factory dashboard in a pocket",
    subtitle: "UptimeLinked app",
    kind: "employer",
    group: "iot",
    role: "Built solo",
    href: "https://www.hungrybulb.com",
    dates: "2026",
    active: true,
    description:
      "React Native shell that wraps the platform for Android and iOS, with native file downloads and viewers for exported reports.",
    technologies: ["React Native", "WebView", "TypeScript"],
    links: [],
    image: "",
    video: "",
  },
  {
    title: "Read labels with the camera",
    subtitle: "OCR scanner",
    kind: "employer",
    group: "iot",
    role: "Prototype · built solo",
    href: "https://www.hungrybulb.com",
    dates: "2026",
    active: false,
    description:
      "React Native prototype using Vision Camera with an on-device OCR frame processor to read part labels and meter displays and copy them to the clipboard — groundwork for camera-based data entry on the floor.",
    technologies: ["React Native", "Vision Camera", "OCR", "Nitro Modules"],
    links: [],
    image: "",
    video: "",
  },

  /* ------------------ Logistics & HR platforms (2023–26) ------------------ */
  {
    title: "Move India's trucks with live GPS",
    subtitle: "LoadingWalla app",
    kind: "employer",
    group: "platforms",
    featured: true,
    role: "Built the app · led the team",
    href: "https://play.google.com/store/apps/details?id=com.loadingwalla",
    dates: "Jan 2024 – 2026",
    active: true,
    description:
      "Logistics marketplace connecting shippers with verified truck operators across India. Post a load, match a truck, book, pay through Razorpay, and follow the shipment on a live map fed by Traccar GPS devices. Includes a toll calculator for route costing, KYC through Aadhaar and DigiLocker, in-app chat and push alerts. Live on Google Play.",
    technologies: [
      "TypeScript",
      "React Native",
      "Redux-saga",
      "Firebase",
      "Razorpay",
      "Traccar",
      "Google Maps",
      "Laravel",
      "MySQL",
    ],
    links: [
      {
        type: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.loadingwalla",
        icon: <Icons.playStore className="size-3" />,
      },
    ],
    image: "",
    video: "/lwApp.mp4",
  },
  {
    title: "Book trucks from the browser",
    subtitle: "LoadingWalla website",
    kind: "employer",
    group: "platforms",
    role: "Built solo",
    href: "https://loadingwalla.com",
    dates: "Dec 2024 – 2026",
    active: true,
    description:
      "The web side of LoadingWalla: search and book trucks, post loads, match with operators, live GPS tracking, the toll calculator, OTP-verified contact and agent flows, a blog and support. Next.js App Router with Redux Toolkit, Google Maps and its own API routes, sharing the Laravel backend with the app.",
    technologies: ["Next.js", "TypeScript", "Redux-toolkit", "Google Maps", "Framer Motion", "MySQL"],
    links: [
      {
        type: "Website",
        href: "https://loadingwalla.com",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "",
    video: "/LwWeb.mp4",
  },
  {
    title: "Run the marketplace: bookings, GPS commerce, payments",
    subtitle: "LoadingWalla API & CRM",
    kind: "employer",
    group: "platforms",
    role: "Backend and admin CRM",
    href: "https://loadingwalla.com",
    dates: "2024 – 2025",
    active: true,
    description:
      "Laravel backend and admin CRM behind the LoadingWalla apps: trucks, loads, bookings, wallets and Razorpay webhooks, GPS device sales with plans and installs, toll-plaza pricing, KYC (Aadhaar, DigiLocker, Signzy vehicle checks), field-agent attendance and visits, blogs and help desk. MySQL for business data, MongoDB for high-volume GPS pings, Redis and Pusher for realtime.",
    technologies: ["Laravel", "PHP", "MySQL", "MongoDB", "Redis", "Razorpay", "Firebase", "AWS S3", "Pusher"],
    links: [],
    image: "",
    video: "",
  },
  {
    title: "Clock in from anywhere, verified",
    subtitle: "ZFour HRMS · web + mobile",
    kind: "employer",
    group: "platforms",
    featured: true,
    role: "Project lead · team of 5",
    href: "https://pantheondigitals.com",
    dates: "2024 – 2026",
    active: true,
    description:
      "HR suite shipped to the App Store and Play Store: attendance with geo-fenced and trusted-Wi-Fi clock-in, biometric device sync, leave and regularisation, payroll and payslips, reimbursements and loans, a recruitment ATS, assets, helpdesk tickets, company policies, training videos and an internal social feed. Laravel backend with granular RBAC; React Native app with Redux-Saga, Firebase push, maps and PDF payslips. Improved performance by 30% for 7,000+ users.",
    technologies: ["Laravel", "PHP", "MySQL", "React Native", "Redux-saga", "Firebase", "Redis", "Google Maps"],
    links: [],
    image: "",
    video: "",
  },
  {
    title: "Track every field employee, live",
    subtitle: "ZFour Realtime Tracking",
    kind: "employer",
    group: "platforms",
    role: "Built solo · app, backend, dashboard, AWS",
    href: "https://pantheondigitals.com",
    dates: "2025",
    active: true,
    description:
      "Three-part system: a React Native app that keeps sending location in the background even when closed (with battery, network and speed), an Express + Socket.io backend on MySQL, and a Next.js dashboard with Leaflet maps showing live positions with animated movement and session playback. Deployed on AWS EC2 and RDS.",
    technologies: ["React Native", "Express.js", "Socket.IO", "MySQL", "Next.js", "Leaflet", "AWS EC2 / RDS"],
    links: [],
    image: "",
    video: "",
  },
  {
    title: "Ingest GPS at scale, smooth the noise",
    subtitle: "Geotracking API",
    kind: "contract",
    group: "platforms",
    role: "Built solo for a client · repo lives in their organisation",
    href: "https://github.com/amtechsci",
    dates: "2026",
    active: true,
    description:
      "High-frequency location ingestion service. The API acknowledges pings instantly into a Redis Stream, a worker batches them into MySQL, and analytics simplify tracks with the Ramer–Douglas–Peucker algorithm, detect stops and flag offline gaps. Authenticates with the client's existing Laravel tokens.",
    technologies: ["TypeScript", "Express.js", "Redis Streams", "MySQL", "Jest"],
    links: [],
    image: "",
    video: "",
  },
  {
    title: "Give employees a company feed",
    subtitle: "ZFeed",
    kind: "employer",
    group: "platforms",
    role: "Built solo",
    href: "https://pantheondigitals.com",
    dates: "2025",
    active: true,
    description:
      "Internal social feed for the HRMS: posts by type, likes on posts and comments, comment threads, my-feed versus company feed and a user directory. Next.js 15 App Router with API routes proxying the HRMS backend and Redux-Saga state.",
    technologies: ["Next.js", "TypeScript", "Redux-saga", "Tailwind CSS"],
    links: [],
    image: "",
    video: "",
  },
  {
    title: "Rebuild the HRMS on Node",
    subtitle: "HRMS (Node rewrite)",
    kind: "employer",
    group: "platforms",
    role: "Built solo",
    href: "https://pantheondigitals.com",
    dates: "2026",
    active: false,
    description:
      "Node and Sequelize re-implementation of the ZFour HRMS with 24 models, BullMQ job queues on Redis, S3 uploads and a Next.js frontend — the migration path off Laravel.",
    technologies: ["Node.js", "Express.js", "Sequelize", "MySQL", "BullMQ", "Redis", "AWS S3", "Next.js"],
    links: [],
    image: "",
    video: "",
  },

  /* ------------------- Freelance & own products ------------------- */
  {
    title: "Run a whole school from one installer",
    subtitle: "School Management System",
    kind: "product",
    group: "freelance",
    featured: true,
    role: "Own product · built solo",
    href: "https://github.com/sushantkr961/School-Mangagement-Software---onPremise",
    dates: "2026 – Present",
    active: true,
    description:
      "A complete school ERP that installs from a single desktop shortcut. An Electron supervisor boots a bundled MariaDB, an Express API and a Next.js server, then opens a setup wizard — the school's IT admin installs once, and hundreds of teachers, students and parents connect from their own devices with nothing to install. A Cloudflare tunnel makes the parent portal reachable without port forwarding or a static IP. Multi-branch isolation is enforced structurally by a Prisma extension that injects the branch scope into every query. 81 tables across 13 modules, 281 unit tests plus 19 isolation tests against a real database. A cloud multi-tenant mode with a vendor console was added in July 2026.",
    technologies: [
      "TypeScript",
      "Next.js",
      "Electron",
      "Express.js",
      "Prisma",
      "MariaDB",
      "Zod",
      "Vitest",
      "Tailwind CSS",
      "Cloudflare Tunnel",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/sushantkr961/School-Mangagement-Software---onPremise",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "",
  },
  {
    title: "Launch a luxury-deals app on iOS and Android",
    subtitle: "Indulge Global",
    kind: "freelance",
    group: "freelance",
    featured: true,
    role: "Freelance · frontend and API integration",
    href: "https://play.google.com/store/apps/details?id=com.rutu12.IndulgeApplication",
    dates: "Aug 2024 – Nov 2024",
    active: true,
    description:
      "Lifestyle app offering exclusive deals, curated products and premium services across fashion, travel, dining and entertainment. I built the React Native frontend from Figma and wired the APIs: personalised recommendations, secure payments and bookings. Shipped to both stores.",
    technologies: ["TypeScript", "React Native", "Xcode", "Figma"],
    links: [
      {
        type: "Website",
        href: "https://indulge.global",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "",
    video: "/indulgeApp.mp4",
  },
  {
    title: "Put an $800M real-estate team online",
    subtitle: "Jas Oberoi Group",
    kind: "freelance",
    group: "freelance",
    featured: true,
    role: "Freelance · built solo",
    href: "https://jasoberoi.ca",
    dates: "May 2024 – Jul 2024",
    active: true,
    description:
      "Website for a leading real-estate team in Surrey, BC with over $800 million in career sales. Next.js frontend with listings and consultation flows, backed by Node, Express and MongoDB. Delivered end to end as a freelance build.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Node.js", "Express.js"],
    links: [
      {
        type: "Website",
        href: "https://jasoberoi.ca",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/sushantkr961/jasoberoi",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "/jasoberoi.mp4",
  },

  /* ---------------------- Earlier & open source ---------------------- */
  {
    title: "Sell online with a live line to the store admin",
    subtitle: "SkMart",
    kind: "open-source",
    group: "earlier",
    href: "https://github.com/sushantkr961/SkMart",
    dates: "2023",
    active: false,
    description:
      "MERN e-commerce store: catalogue with categories and reviews, cart and order flow, PayPal payments, an admin dashboard with sales charts, and a real-time Socket.IO chat between shoppers and the store admin. JWT auth hardened with helmet, plus database seeders.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Redux", "PayPal", "JWT Auth"],
    links: [
      { type: "Website", href: "https://skmart.onrender.com", icon: <Icons.globe className="size-3" /> },
      { type: "Source", href: "https://github.com/sushantkr961/SkMart", icon: <Icons.github className="size-3" /> },
    ],
    image: "",
    video: "",
  },
  {
    title: "Browse and book hotels, Tripadvisor-style",
    subtitle: "Tripadvisor Clone",
    kind: "open-source",
    group: "earlier",
    href: "https://github.com/sushantkr961/Tripadvisor-Clone",
    dates: "2023",
    active: false,
    description:
      "Hotel browsing with debounced search and full account management — signup, login and password reset over email via Nodemailer — plus an admin dashboard behind private routes. TypeScript Express and Mongoose backend; Chakra UI and Redux frontend.",
    technologies: ["TypeScript", "React", "Express.js", "MongoDB", "Chakra UI", "Redux", "Nodemailer"],
    links: [
      { type: "Website", href: "https://cheery-dasik-4fae30.netlify.app", icon: <Icons.globe className="size-3" /> },
      { type: "Source", href: "https://github.com/sushantkr961/Tripadvisor-Clone", icon: <Icons.github className="size-3" /> },
    ],
    image: "",
    video: "",
  },
  {
    title: "Play HLS streams inside a React Native app",
    subtitle: "HLS Video Player",
    kind: "open-source",
    group: "earlier",
    href: "https://github.com/sushantkr961/houseofedtechAssignment",
    dates: "Jan 2026",
    active: false,
    description:
      "Expo app pairing an instrumented WebView with a custom HLS player on expo-video: play / pause, mute, ±10s jump, fullscreen and a multi-stream selector, with controls kept in sync with the player's own state. Local notifications fire when web content finishes loading.",
    technologies: ["TypeScript", "React Native", "Expo", "HLS", "expo-video"],
    links: [
      { type: "Source", href: "https://github.com/sushantkr961/houseofedtechAssignment", icon: <Icons.github className="size-3" /> },
    ],
    image: "",
    video: "",
  },
  {
    title: "Organise work on a Kanban board",
    subtitle: "Workflo",
    kind: "open-source",
    group: "earlier",
    href: "https://github.com/sushantkr961/workflo-",
    dates: "2024",
    active: false,
    description:
      "Column-based task board on the Next.js App Router with API routes for auth and task CRUD, Redux Toolkit on the client, Mongoose for persistence and JWT sessions.",
    technologies: ["TypeScript", "Next.js", "Redux-toolkit", "MongoDB", "Tailwind CSS", "JWT Auth"],
    links: [{ type: "Source", href: "https://github.com/sushantkr961/workflo-", icon: <Icons.github className="size-3" /> }],
    image: "",
    video: "",
  },
  {
    title: "Chat one-to-one and in groups",
    subtitle: "MERN Chat App",
    kind: "open-source",
    group: "earlier",
    href: "https://github.com/sushantkr961/chat_app",
    dates: "2023",
    active: false,
    description:
      "Messaging app with one-to-one and group chats, JWT authentication and a Chakra UI frontend. Chat state flows through a React context provider; the backend models users, chats and messages separately.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Chakra UI", "JWT Auth"],
    links: [{ type: "Source", href: "https://github.com/sushantkr961/chat_app", icon: <Icons.github className="size-3" /> }],
    image: "",
    video: "",
  },
];

export const DATA = {
  name: "Sushant Kumar",
  initials: "SK",
  url: "https://sushantkr961.github.io",
  location: "New Delhi, INDIA",
  locationLink: "https://www.google.com/maps/place/newdelhi",
  description:
    "I build web, mobile and IoT software that ships to real users — factory sensors feeding live dashboards, logistics platforms tracking trucks in real time, HR systems live on both app stores, and custom software that runs where businesses actually work.",
  tagline: "Full-Stack, React Native & IoT Engineer — freelance and full-time",
  summary:
    "I'm a mechanical engineer turned software developer, and it shaped how I build: for reliability, efficiency, and clean interfaces. After finishing my [Mechanical Engineering degree](/#education) in 2020, I retrained through [Masai School's](#platform) full-stack program, then spent the last 3+ years shipping production apps — first at [Pantheon Digital](#designation) (2023–2026) and now as a Product Lead at [Uptime Linked](#designation), while taking on [freelance](#freelancer) product builds on the side. I've shipped apps live on both app stores, led a team of 6, and built everything from real-time GPS logistics to on-premise school ERPs.",
  avatarUrl: "/me.png",
  skillGroups: [
    {
      label: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "C++ (Arduino)", "Java", "Kotlin", "PHP", "SQL", "HTML", "CSS"],
    },
    {
      label: "Frontend",
      items: [
        "React",
        "Next.js",
        "Redux",
        "Redux-toolkit",
        "Redux-saga",
        "TanStack Query",
        "Tailwind CSS",
        "Chakra UI",
        "Material UI",
        "Framer Motion",
        "Radix UI",
      ],
    },
    {
      label: "Mobile",
      items: [
        "React Native",
        "Expo",
        "React Navigation",
        "Android Studio",
        "Xcode",
        "Play Store Release",
        "Firebase Cloud Messaging",
      ],
    },
    {
      label: "IoT & Edge",
      items: [
        "Raspberry Pi",
        "ESP32",
        "Arduino Nano",
        "Modbus RTU / RS485",
        "MQTT",
        "Current transformers (CT)",
        "3-phase energy meters",
        "Cycle counters",
        "Temperature / BMS loggers",
        "GPIO relays",
        "PySide6 / QML",
        "systemd",
      ],
    },
    {
      label: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "Prisma",
        "Mongoose",
        "REST APIs",
        "JWT Auth",
        "Socket.IO",
        "Zod",
        "Laravel",
        "Template Engines",
      ],
    },
    {
      label: "Databases",
      items: ["MongoDB", "MySQL", "MariaDB", "Firebase"],
    },
    {
      label: "Tooling & Delivery",
      items: [
        "Electron",
        "Docker",
        "Git",
        "Vitest",
        "pnpm",
        "Vercel",
        "Netlify",
        "GitHub Pages",
        "Figma",
        "Postman",
      ],
    },
    {
      label: "Integrations",
      items: ["Razorpay", "PayPal", "Traccar GPS", "Cloudflare Tunnel", "Nodemailer"],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://drive.google.com/file/d/14Qq1p4eUGvDNjziaUtVvT7HynPCK1jtx/view",
      icon: UserIcon,
      label: "Resume",
    },
  ],
  contact: {
    email: "sushantonly961@gmail.com",
    tel: "+91 7544909637",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sushantkr961",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sushantkr961",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        // url: "mailto:sushantonly961@gmail.com",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=sushantonly961@gmail.com&su=Inquiry&body=Hello,%20I%20would%20like%20to%20ask...",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  availability: {
    open: true,
    label: "Available for freelance",
    note: "Taking on 1–2 product builds per quarter",
  },
  whatsapp: "917544909637",
  stats: [
    { value: "7K+", label: "users served" },
    { value: "2", label: "app stores live" },
    { value: "20+", label: "products shipped" },
    { value: "3+", label: "years building" },
  ],
  services: [
    {
      id: "mobile",
      title: "Mobile Apps",
      blurb:
        "Cross-platform iOS + Android apps in React Native — shipped to the App Store and Play Store, not left in a demo.",
      tech: ["React Native", "Expo", "Firebase", "Redux-Saga"],
    },
    {
      id: "web",
      title: "Full-Stack Web",
      blurb:
        "Fast, scalable web apps and dashboards with React, Next.js, and Node.js — from marketing sites to internal CRMs.",
      tech: ["Next.js", "React", "Node.js", "TypeScript"],
    },
    {
      id: "product",
      title: "Full Product / MVP",
      blurb:
        "Idea to launched product — web, mobile, and backend built and shipped together. I take ownership end to end.",
      tech: ["Web + Mobile", "REST APIs", "AWS", "CI/CD"],
    },
    {
      id: "custom",
      title: "Custom Software, ERP & IoT",
      blurb:
        "Bespoke business software — multi-tenant ERPs, on-premise installs, real-time tracking, and sensor-to-dashboard IoT on Raspberry Pi and ESP32.",
      tech: ["Electron", "Prisma", "Raspberry Pi / ESP32", "Socket.IO"],
    },
  ],
  /** How a freelance engagement runs — a real sequence, so it is numbered on the page. */
  process: [
    {
      step: "Scope call",
      blurb: "30 minutes on what you're building, who it's for, and what \"done\" looks like. Free.",
    },
    {
      step: "Fixed plan & quote",
      blurb: "A written scope with milestones, a price, and a timeline — no surprises later.",
    },
    {
      step: "Build in weekly demos",
      blurb: "You see working software every week and can steer while it's cheap to change.",
    },
    {
      step: "Ship + 30-day support",
      blurb: "Store submission, deployment, handover docs, and a month of fixes on me.",
    },
  ],
  work: [
    {
      company: "Uptime Linked · Hungrybulb Technologies",
      href: "https://www.hungrybulb.com",
      badges: [],
      location: "New Delhi · Hybrid",
      title: "Full Stack Developer & Product Lead",
      logoUrl: "/uptime.png",
      start: "Mar 2026",
      end: "present",
      description:
        "Lead product development across 6 platforms (2 internal, 4 global) for an Industrial IoT company, managing a team of 6 engineers from architecture to delivery. Build cross-platform mobile and web apps with React Native, React, Node.js, and TypeScript, and set the team's CI/CD and code-review standards on AWS.",
    },
    {
      company: "Pantheon Digital Pvt. Ltd.",
      badges: [],
      href: "https://pantheondigitals.com",
      location: "Saket, New Delhi",
      title: "Software Developer → Project Lead",
      logoUrl: "/pantheon.jpg",
      start: "Apr 2023",
      end: "Feb 2026",
      description:
        "Promoted to project lead within a year, directing a 5-member team across 3 concurrent products. Built and shipped LoadingWalla — a logistics platform with real-time GPS tracking (Android app + website) — and an HRMS suite live on the App Store and Google Play. Improved overall application performance by 30% for 7,000+ users (~33,000 requests/day).",
    },
  ],
  education: [
    {
      school: "Aryabhatta Knowledge University",
      href: "https://akubihar.ac.in",
      degree: "Bachelor's Degree in Mechanical Engineering",
      logoUrl: "/aku.jpeg",
      start: "2016",
      end: "2020",
    },
    {
      school: "Central Board of Secondary Education",
      href: "https://kpsbihta.in",
      degree: "Senior secondary",
      logoUrl: "/cbse.png",
      start: "2014",
      end: "2016",
    },
    // {
    //   school: "Central Board of Secondary Education",
    //   href: "https://kpsbihta.in",
    //   degree: "Secondary",
    //   logoUrl: "/cbse.png",
    //   start: "2012",
    //   end: "2014",
    // },
  ],
  certification: [
    {
      school: "Masai School",
      href: "https://www.masaischool.com",
      degree: "Full Stack Web Development Program",
      logoUrl: "/masai.png",
      start: "Sep 2022",
      end: "Feb 2023",
    },
  ],
  projects: PROJECTS,
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 14th - 16th, 2018",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "FirstNet Public Safety Hackathon",
  //     dates: "March 23rd - 24th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //     icon: "public",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //     links: [],
  //   },
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackDavis",
  //     dates: "January 20th - 21st, 2018",
  //     location: "Davis, California",
  //     description:
  //       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
  //     win: "Best Data Hack",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/my6footprint",
  //       },
  //       {
  //         title: "ML",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
  //       },
  //       {
  //         title: "iOS",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/CarbonWallet",
  //       },
  //       {
  //         title: "Server",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/wallet6-server",
  //       },
  //     ],
  //   },
  //   {
  //     title: "ETH Waterloo",
  //     dates: "October 13th - 15th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
  //     links: [
  //       {
  //         title: "Organization",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ethdocnet",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 15th - 17th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a virtual reality application allowing users to see themselves in third person.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Streamer Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/htn2017",
  //       },
  //       {
  //         title: "Client Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/RTSPClient",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The 6ix",
  //     dates: "August 26th - 27th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ShareShip/ShareShip",
  //       },
  //       {
  //         title: "Site",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://share-ship.herokuapp.com/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Stupid Hack Toronto",
  //     dates: "July 23rd, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/nsagirlfriend/nsagirlfriend",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Global AI Hackathon - Toronto",
  //     dates: "June 23rd - 25th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/TinySamosas/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "McGill AI for Social Innovation Hackathon",
  //     dates: "June 17th - 18th, 2017",
  //     location: "Montreal, Quebec",
  //     description:
  //       "Developed realtime facial microexpression analyzer using AI",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
  //     links: [],
  //   },
  //   {
  //     title: "Open Source Circular Economy Days Hackathon",
  //     dates: "June 10th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/genecis",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: "May 19th - 21st, 2017",
  //     location: "International",
  //     description: "Improved PocketDoc and submitted to online competition",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
  //     win: "Top 10 Finalist | Honourable Mention",
  //     links: [
  //       {
  //         title: "Medium Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
  //       },
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackMining",
  //     dates: "May 12th - 14th, 2017",
  //     location: "Toronto, Ontario",
  //     description: "Developed neural network to optimize a mining process",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
  //     links: [],
  //   },
  //   {
  //     title: "Waterloo Equithon",
  //     dates: "May 5th - 7th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "SpaceApps Waterloo",
  //     dates: "April 28th - 30th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/earthwatch",
  //       },
  //     ],
  //   },
  //   {
  //     title: "MHacks 9",
  //     dates: "March 24th - 26th, 2017",
  //     location: "Ann Arbor, Michigan",
  //     description:
  //       "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/threejs-planes",
  //       },
  //     ],
  //   },
  //   {
  //     title: "StartHacks I",
  //     dates: "March 4th - 5th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
  //     win: "1st Place Winner",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-ionic",
  //       },
  //       {
  //         title: "Source (Server)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "QHacks II",
  //     dates: "February 3rd - 5th, 2017",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed a mobile game which enables city-wide manhunt with random lobbies",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/human-huntr-react-native",
  //       },
  //       {
  //         title: "Source (API)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/human-huntr-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Terrible Hacks V",
  //     dates: "November 26th, 2016",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mock of Windows 11 with interesting notifications and functionality",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Portal Hackathon",
  //     dates: "October 29, 2016",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/UWPortalSDK/crowmark",
  //       },
  //     ],
  //   },
  // ],
} as const;

/** Flat skill list, derived so the groups above stay the single place skills are edited. */
export const ALL_SKILLS: string[] = DATA.skillGroups.flatMap((g) => [...g.items]);
