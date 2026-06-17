import type { ProjectCard } from "@/types/project";

export const projects: ProjectCard[] = [
  {
    slug: "ceramic-mayorca",
    name: "Ceramic Mayorca",
    tagline:
      "Cross-platform product showcase and operations system for the ceramics domain.",
    summary:
      "Ceramic Mayorca is an integrated system built to showcase and manage tile products efficiently. The delivery scope included two customer applications for Android and iOS, a desktop admin panel, and a backend system that supports product data, authentication, and operational workflows.",
    role: "Android Developer",
    visualClass: "from-blue-600 via-blue-500/40 to-slate-950",
    image: {
      src: "/images/projects/ceramic-mayorca.png",
      alt: "Ceramic Mayorca app showcase with premium tile browsing screens and product branding.",
    },
    scope: [
      "Two customer apps for Android and iOS",
      "Desktop admin panel",
      "Backend system",
    ],
    technologies: [
      "Jetpack Compose Multiplatform",
      "Ktor",
      "MySQL",
      "Flyway",
      "JWT Authentication",
      "Docker",
      "Nginx",
      "SSL",
      "Ubuntu VPS",
    ],
    highlights: [
      "Delivered cross-platform customer experiences through Compose Multiplatform.",
      "Built backend APIs with secure authentication and structured data handling.",
      "Handled deployment infrastructure using Docker, Nginx, SSL, and Ubuntu VPS.",
      "Supported product management workflows across mobile, desktop, and backend layers.",
    ],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=net.mayorcaceramic.ceramicmayorca",
        type: "google-play",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/eg/app/ceramic-mayorca/id6751747690",
        type: "app-store",
      },
    ],
    featured: true,
    sortOrder: 1,
  },
  {
    slug: "store-management-android-app",
    name: "Store Management Android App",
    tagline:
      "Inventory-focused Android app for scanning stock items and exporting reports.",
    summary:
      "This Android app was built to support store inventory workflows by scanning barcode and BRCode items through the device camera, storing records locally, and exporting stock reports in spreadsheet-friendly form.",
    role: "Android Developer",
    visualClass: "from-slate-500/60 via-slate-700 to-slate-950",
    image: {
      src: "/images/projects/store-management-android-app.png",
      alt: "Store Management Android app cover with inventory, reporting, and stock operations screens.",
    },
    scope: [
      "Inventory scanning workflow",
      "Local data storage",
      "Report export for stock tracking",
    ],
    technologies: ["Jetpack Compose", "Room", "Hilt", "Coroutines"],
    highlights: [
      "Implemented camera-based stock scanning workflow.",
      "Used local persistence for reliable on-device record management.",
      "Supported exportable reports for inventory and stock review.",
    ],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.m37moud.storemanagement",
        type: "google-play",
      },
    ],
    featured: true,
    sortOrder: 2,
  },
  {
    slug: "radio-streaming-apps-suite",
    name: "Radio Streaming Apps Suite",
    tagline:
      "Android radio apps focused on stable playback and better user experience.",
    summary:
      "This suite included Watar FM, Mood FM, and Beat FM, three Android radio streaming apps centered on live audio playback, background listening, and better performance in legacy codebases that needed modernization and stability work.",
    role: "Android Developer",
    visualClass: "from-cyan-500/30 via-slate-800 to-slate-950",
    image: {
      src: "/images/projects/radio-streaming-apps-suite.png",
      alt: "Radio streaming apps suite cover featuring Watar FM playback and live audio interface screens.",
    },
    scope: [
      "Three Android radio apps",
      "Playback optimization",
      "Legacy codebase improvement",
    ],
    technologies: [
      "Java",
      "MediaPlayer",
      "Threads",
      "Retrofit",
      "Android Services",
    ],
    highlights: [
      "Supported live radio streaming and background playback behavior.",
      "Improved playback smoothness and reduced loading friction through performance optimization.",
      "Enhanced UI consistency and accessibility across Watar FM, Mood FM, and Beat FM.",
      "Maintained production-ready releases for Google Play delivery.",
    ],
    links: [
      {
        label: "Watar FM",
        href: "https://play.google.com/store/apps/details?id=ac.radios.watarfm",
        type: "google-play",
      },
      {
        label: "Mood FM",
        href: "https://play.google.com/store/apps/details?id=ac.radio.moodfm&hl=ar&gl=US",
        type: "google-play",
      },
      {
        label: "Beat FM",
        href: "https://play.google.com/store/apps/details?id=ac.radio.Beatfm&hl=ar&gl=US",
        type: "google-play",
      },
    ],
    featured: true,
    sortOrder: 3,
  },
  {
    slug: "stories-for-kids-admin-app",
    name: "StoriesForKids & Admin App",
    tagline:
      "Interactive children's learning app with companion content management tooling.",
    summary:
      "StoriesForKids combined bilingual Arabic-English educational content, animations, and sound effects in a child-focused Android experience, alongside an admin app used to manage stories, media, and real-time notifications.",
    role: "Android Developer",
    visualClass: "from-emerald-400/40 via-orange-300/25 to-slate-950",
    image: {
      src: "/images/projects/stories-for-kids-admin-app.png",
      alt: "StoriesForKids educational app cover with playful reading screens and child-friendly visuals.",
    },
    scope: [
      "Main children-focused Android app",
      "Admin app for content management",
      "Realtime notification support",
    ],
    technologies: [
      "Kotlin",
      "Material Design",
      "Room Database",
      "Firebase Authentication",
      "Firebase Realtime Database",
      "Firebase Messaging",
      "Dagger Hilt",
      "Animation Frameworks",
    ],
    highlights: [
      "Built an interactive bilingual learning experience for children.",
      "Integrated animation, sound effects, and structured educational content.",
      "Supported admin-side content publishing and push notification workflows.",
    ],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.m37moud.responsivestories",
        type: "google-play",
      },
    ],
    featured: true,
    sortOrder: 4,
  },
  {
    slug: "hr-system-kotlin-kmp-version",
    name: "HR System - Kotlin KMP Version",
    tagline:
      "Cross-platform HR workflow system for attendance and reporting.",
    summary:
      "This Kotlin Multiplatform HR system was designed to automate employee attendance and reporting workflows while exploring cross-platform application structure and a desktop experience built with Compose.",
    role: "Android Developer",
    visualClass: "from-emerald-500/50 via-teal-500/20 to-slate-950",
    image: {
      src: "/images/projects/hr-system-kotlin-kmp-version.png",
      alt: "HRSystem desktop application cover with human resources dashboard and workforce management interface.",
    },
    scope: [
      "Attendance workflows",
      "Reporting workflows",
      "Compose-based desktop experience",
    ],
    technologies: [
      "Kotlin Multiplatform",
      "Jetpack Compose Desktop",
      "SQLDelight",
      "Decompose",
      "Dagger2",
    ],
    highlights: [
      "Applied Kotlin Multiplatform for shared business logic.",
      "Built desktop-oriented workflows with Compose.",
      "Focused on attendance tracking and reporting automation.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/m37moud/HRSystem",
        type: "github",
      },
    ],
    featured: true,
    sortOrder: 5,
  },
];
