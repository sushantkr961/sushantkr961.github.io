import { Icons } from "@/components/icons";
import { HomeIcon, UserIcon } from "lucide-react";

export const DATA = {
  name: "Sushant Kumar",
  initials: "SK",
  url: "https://sushantkr961.github.io",
  location: "New Delhi, INDIA",
  locationLink: "https://www.google.com/maps/place/newdelhi",
  description:
    "Mechanical Engineer turned Software Developer. Passionate about building solutions and solving problems. Always learning and growing in tech.",
  summary:
    "At the end of 2022, I fully transitioned into [software development](#occupation)—what once started as a hobby became my full-time focus. Before that, I earned my [bachelor's degree in Mechanical Engineering](/#education) in 2020. In mid-2022, I joined [Masai School](#platform), an online platform, to sharpen my coding skills and dive deep into [full-stack development](#skills). By early 2023, I landed my first role as a [Software Developer at Pantheon Digital](#designation) while also working as a [freelancer](#freelancer), turning my passion into a profession.",
  avatarUrl: "/me.png",
  skillGroups: [
    {
      label: "Languages",
      items: ["TypeScript", "JavaScript", "Java", "Kotlin", "PHP", "SQL", "HTML", "CSS"],
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

  work: [
    {
      company: "Loading Walla Ventures Pvt. Ltd.",
      href: "https://loadingwalla.com/",
      badges: [],
      location: "Saket, New Delhi",
      title: "Software Developer (Team Lead)",
      logoUrl: "/loadingwalla.png",
      start: "Oct 2024",
      end: "present",
      description:
        "Developed LoadingWalla’s website using Next.js, TypeScript, and Node.js, ensuring a scalable and high-performance web experience. Additionally, I built the Android app using React Native, delivering a smooth and efficient mobile experience. To streamline internal operations, I also engineered the CRM platform using Next.js, optimizing user management and business workflows.",
    },
    {
      company: "Pantheon Digital Pvt. Ltd.",
      badges: [],
      href: "https://pantheondigitals.com",
      location: "Saket, New Delhi",
      title: "Software Developer",
      logoUrl: "/pantheon.jpg",
      start: "April 2023",
      end: "Sep 2024",
      description:
        "Developed and maintained Pantheon Digital’s website, HR portal, and CRM software to streamline internal operations. Implemented secure authentication with login/signup functionality, built asset management and attendance tracking features for the HR portal, and enhanced the CRM by developing a ticketing system to improve customer support efficiency.",
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
  projects: [
    {
      title: "School Management System — On-Premise",
      href: "https://github.com/sushantkr961/School-Mangagement-Software---onPremise",
      dates: "2026 - Present",
      active: true,
      description:
        "A complete [school ERP](#erp) that installs from a single desktop shortcut. An [Electron](#electron) supervisor boots a bundled [MariaDB](#mariadb), an [Express API](#api) and a [Next.js](#nextjs) server, then opens a setup wizard — the school's IT admin installs once, and hundreds of teachers, students and parents connect from their own devices with nothing to install. A [Cloudflare tunnel](#tunnel) makes the parent portal reachable without port forwarding, a static IP, or router config, and works behind the CGNAT most school broadband sits behind. [Multi-branch isolation](#isolation) is enforced structurally by a Prisma extension that injects the branch scope into every query and throws rather than leak another school's data. 81 tables across 13 modules, backed by [281 unit tests](#tests) plus 19 branch-isolation tests against a real database — covering integer-paise money handling, exam grading rules, and timetable conflict detection.",
      technologies: [
        "TypeScript",
        "Next.js",
        "Electron",
        "Node.js",
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
      title: "Loadingwalla Android App",
      href: "https://play.google.com/store/apps/details?id=com.loadingwalla",
      dates: "Jan 2024 - Present",
      active: true,
      description:
        "[LoadingWalla](#company) is a [logistics](#logistics) and [transportation platform](#transportation)  designed to simplify goods movement in India. It connects [shippers](#shippers) with verified [truck operators](#trucks), enabling efficient truck bookings and load matching. The app features real-time [GPS tracking](#gps) for shipments, a [toll calculator](#toll) for route planning, and a transparent pricing model to ensure cost-effectiveness. Businesses, individuals, and truck operators can all benefit from its seamless and intuitive interface, available on Android via the [Google Play Store](#https://play.google.com/store/apps/details?id=com.loadingwalla). By streamlining logistics operations, LoadingWalla is transforming how India handles transportation needs.",
      technologies: [
        "Typescript",
        "React Native",
        "Redux",
        "Redux-saga",
        "Node.js",
        "Laravel",
        "Firebase",
        "Razorpay",
        "My SQL",
        "Traccar",
        "Figma",
        "Express.js",
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
      title: "Loadingwalla Website",
      href: "https://loadingwalla.com",
      dates: "December 2024 - Present",
      active: true,
      description:
        "The [LoadingWalla website](#https://loadingwalla.com) offers a seamless platform for managing logistics and transportation needs. Users can search for and book trucks, post load requirements, and match loads with truck operators to ensure efficient transportation. The website features [real-time GPS tracking](#gps) for shipments, a [toll calculator](#toll) for accurate route planning, and transparent pricing to eliminate hidden costs. It also provides a blog section with industry insights and updates, along with easy access to customer support for a hassle-free experience. Designed with a user-friendly and mobile-responsive interface, the website integrates seamlessly with the LoadingWalla mobile app, making it a comprehensive solution for businesses, individuals, and truck operators.",
      technologies: [
        "Next.js",
        "Typescript",
        "Redux",
        "Redux-toolkit",
        "Node.js",
        "Laravel",
        "My SQL",
        "Traccar",
        "Figma",
        "Express.js",
      ],
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
      title: "Indulge Global Moblile Application",
      href: "https://play.google.com/store/apps/details?id=com.rutu12.IndulgeApplication",
      dates: "August 2024 - November 2024",
      active: true,
      description:
        "The [Indulge Global mobile application](#indulge) is a platform that enhances the shopping and lifestyle experience by offering exclusive deals, curated products, and premium services across fashion, travel, dining, and entertainment. I built the [frontend and implemented APIs](#responsible) for this [Freelance Project](#freelance), ensuring a seamless and user-friendly experience. The app features personalized recommendations, secure payment integration, and smooth booking options, making luxury and everyday essentials easily accessible in one place.",
      technologies: ["Typescript", "React Native", "Xcode", "Figma"],
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
      title: "Jas Oberoi Group",
      href: "https://jasoberoi.ca",
      dates: "May 2024 - July 2024",
      active: true,
      description:
        "The [Jas Oberoi Group](#company) is a leading real estate team in Surrey, BC, specializing in residential and commercial properties with over $800 million in career sales. They provide a seamless real estate experience through expert consultation and a commitment to excellence. I built their [static website](#static) as a [freelance project](#freelance), ensuring a professional and user-friendly online presence.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "Node.js",
        "Express.js",
      ],
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
      video:
        "/jasoberoi.mp4",
    },
    {
      title: "SkMart — MERN E-Commerce",
      href: "https://github.com/sushantkr961/SkMart",
      dates: "2023",
      active: false,
      description:
        "A full [e-commerce store](#store) built on the MERN stack: product catalog with categories and reviews, cart and order flow, [PayPal payments](#paypal), and an admin dashboard with sales analytics charts. It also carries a [real-time chat](#chat) built on [Socket.IO](#socket) that connects shoppers directly to the store admin, plus database seeders and [JWT](#jwt) authentication hardened with helmet.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
        "Redux",
        "PayPal",
        "JWT Auth",
        "Bootstrap",
      ],
      links: [
        {
          type: "Website",
          href: "https://skmart.onrender.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sushantkr961/SkMart",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Tripadvisor Clone",
      href: "https://github.com/sushantkr961/Tripadvisor-Clone",
      dates: "2023",
      active: false,
      description:
        "A [Tripadvisor](#tripadvisor) clone covering hotel browsing, debounced search, and full account management — signup, login, and [password reset over email](#email) via Nodemailer. Ships an [admin dashboard](#admin) for adding hotels behind private routes. The backend is written in [TypeScript](#ts) with Express and Mongoose; the frontend uses Chakra UI and Redux.",
      technologies: [
        "TypeScript",
        "React",
        "Express.js",
        "MongoDB",
        "Chakra UI",
        "Redux",
        "JWT Auth",
        "Nodemailer",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "https://cheery-dasik-4fae30.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sushantkr961/Tripadvisor-Clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "HLS Video Player & WebView App",
      href: "https://github.com/sushantkr961/houseofedtechAssignment",
      dates: "Jan 2026",
      active: false,
      description:
        "An [Expo](#expo) React Native app pairing an instrumented [WebView](#webview) with a custom [HLS video player](#hls). The player is built on expo-video with a hand-rolled control suite — play/pause, mute, ±10s jump, fullscreen, and a multi-stream selector — with controls kept reactively in sync with the player's internal state. A [local notification](#notifications) system fires when web content finishes loading.",
      technologies: ["TypeScript", "React Native", "Expo", "HLS", "expo-video"],
      links: [
        {
          type: "Source",
          href: "https://github.com/sushantkr961/houseofedtechAssignment",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Workflo — Kanban Task Board",
      href: "https://github.com/sushantkr961/workflo-",
      dates: "2024",
      active: false,
      description:
        "A [Kanban](#kanban) task-management board with column-based task organisation, built on [Next.js](#nextjs) App Router with API routes handling auth and task CRUD. Uses [Redux Toolkit](#redux) for client state, Mongoose for persistence, and JWT for sessions.",
      technologies: [
        "TypeScript",
        "Next.js",
        "Redux-toolkit",
        "MongoDB",
        "Tailwind CSS",
        "JWT Auth",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sushantkr961/workflo-",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "MERN Chat App",
      href: "https://github.com/sushantkr961/chat_app",
      dates: "2023",
      active: false,
      description:
        "A [MERN](#mern) messaging app supporting one-to-one and [group chats](#group), with JWT authentication and a Chakra UI frontend. Chat state is shared through a React context provider, with the backend modelling users, chats and messages separately.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Chakra UI", "JWT Auth"],
      links: [
        {
          type: "Source",
          href: "https://github.com/sushantkr961/chat_app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
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
