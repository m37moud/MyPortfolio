import type { ExperienceEntry } from "@/types/experience";

export const experience: ExperienceEntry[] = [
  {
    company: "Ceramica Mayorca Co.",
    role: "Android Developer",
    period: "Jan 2024 - Present",
    locationOrMode: "On-site",
    summary:
      "Developed a multi-application ecosystem for product display and business operations, covering Android, backend, and cross-platform delivery.",
    bullets: [
      "Designed and developed a comprehensive application ecosystem for managing product displays and business operations using Kotlin and Jetpack Compose.",
      "Implemented an MVVM-based architecture to improve maintainability and scalability across the product.",
      "Built and deployed backend APIs with Ktor and MySQL to support smooth integration between mobile and server layers.",
      "Delivered Android and iOS experiences through Compose Multiplatform with a consistent cross-platform approach.",
      "Deployed backend services using Docker on Ubuntu VPS with Nginx and SSL.",
      "Improved product stability by monitoring analytics and resolving issues before release.",
    ],
    featuredTechnologies: [
      "Kotlin",
      "Jetpack Compose",
      "Ktor",
      "MySQL",
      "Compose Multiplatform",
      "Docker",
      "Nginx",
    ],
  },
  {
    company: "Mafateeh IT & Media Solutions",
    role: "Android Developer",
    period: "2023 - 2024",
    locationOrMode: "Remote",
    summary:
      "Improved legacy Android media products with a focus on performance, stability, playback quality, and store-ready releases.",
    bullets: [
      "Refactored legacy Android codebases to improve stability, maintainability, and long-term supportability.",
      "Optimized media streaming and background services to improve playback smoothness and loading speed.",
      "Improved UI consistency and accessibility across Watar FM, Mood FM, and Beat FM.",
      "Reduced performance bottlenecks by optimizing API calls and memory usage.",
      "Published stable Google Play releases while maintaining compliance with current Android SDK and policy requirements.",
    ],
    featuredTechnologies: [
      "Java",
      "Android Services",
      "MediaPlayer",
      "Retrofit",
      "Threads",
      "Google Play Console",
    ],
  },
  {
    company: "Freelancer",
    role: "Android Developer",
    period: "2020 - 2023",
    locationOrMode: "Remote",
    summary:
      "Delivered Android applications for clients across multiple industries, covering both greenfield builds and modernization work.",
    bullets: [
      "Developed and delivered multiple Android applications for clients across different industries.",
      "Built end-to-end mobile solutions using Kotlin and Jetpack Compose with a focus on clean architecture and usability.",
      "Worked directly with clients to gather requirements, shape UI and UX flows, and deliver scalable features under tight deadlines.",
      "Updated legacy projects and added new features to extend product life and improve user value.",
    ],
    featuredTechnologies: [
      "Kotlin",
      "Jetpack Compose",
      "Android Jetpack Components",
      "Material Design",
      "Room",
      "Firebase",
    ],
  },
];
