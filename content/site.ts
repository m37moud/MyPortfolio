import type {
  AboutContent,
  ContactContent,
  DevicePreviewContent,
  FooterContent,
  HeroContent,
  NavigationItem,
  ResumeContent,
  SectionIntro,
  SiteContent,
} from "@/types/site";

export const navigation: NavigationItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const hero: HeroContent = {
  name: "Mahmoud Aly",
  title: "Android Developer",
  summary:
    "Android Developer with 5+ years of experience building scalable, user-friendly mobile apps using Kotlin, Jetpack Compose, and backend-integrated architecture.",
  supportingText:
    "I build Android applications, modernize legacy codebases, and deliver reliable mobile experiences backed by clean architecture and practical backend knowledge.",
  actions: [
    { label: "View Projects", href: "#projects", variant: "primary" },
    {
      label: "Download Resume",
      href: "/resume/Mahmoud_Ali_Android_Developer.pdf",
      variant: "secondary",
      download: true,
    },
    { label: "Contact", href: "#contact", variant: "ghost" },
  ],
  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mahmoud-aly-29847a198/",
    },
    {
      label: "GitHub",
      href: "https://github.com/m37moud",
    },
    { label: "Email", href: "mailto:m37moud00@gmail.com" },
  ],
};

export const devicePreview: DevicePreviewContent = {
  currentScreenLabel: "Home",
  currentTime: "09:41",
  greetingLabel: "Good morning,",
  greetingName: "Mahmoud",
  agenda: [
    { label: "Design review", time: "10:00 AM" },
    { label: "API integration", time: "12:30 PM" },
    { label: "Code refactor", time: "3:30 PM" },
    { label: "Release build", time: "5:00 PM" },
  ],
  activityHeading: "Recent activity",
  activities: [
    { label: "Play request merged", timeAgo: "2h ago" },
    { label: "Issue closed", timeAgo: "5h ago" },
    { label: "Build accepted", timeAgo: "1d ago" },
  ],
  tabs: ["Home", "Tasks", "Projects", "Profile"],
  activeTab: "Home",
};

export const aboutSection: SectionIntro = {
  kicker: "About",
  headline: "Building reliable Android apps that people use.",
};

export const about: AboutContent = {
  headline: aboutSection.headline,
  paragraphs: [
    "I'm an Android Developer with 5+ years of experience building user-friendly mobile applications using Kotlin and Jetpack Compose. My work spans new product development, legacy app improvement, backend API integration, and cross-platform delivery through tools like Compose Multiplatform, Flutter, and Kotlin Multiplatform.",
    "I focus on maintainable architecture, reliable performance, and building products that are practical for both users and teams.",
  ],
  highlightCards: [
    {
      title: "Clean Architecture",
      body: "MVVM, MVI, modular thinking, and maintainable product foundations.",
    },
    {
      title: "Modern Android",
      body: "Kotlin, Jetpack Compose, Coroutines, and scalable UI engineering.",
    },
    {
      title: "Backend Integrated",
      body: "Ktor, Spring Boot, MySQL, Docker, Nginx, and API-driven delivery.",
    },
    {
      title: "Cross-Platform Range",
      body: "Compose Multiplatform, Flutter, and Kotlin Multiplatform exposure.",
    },
  ],
};

export const experienceSection: SectionIntro = {
  kicker: "Experience",
  headline: "Work experience grounded in product delivery.",
};

export const projectsSection: SectionIntro = {
  kicker: "Selected Projects",
  headline: "Specific work across Android, backend, and cross-platform systems.",
};

export const skillsSection: SectionIntro = {
  kicker: "Skills",
  headline: "Technical expertise across the Android stack and beyond.",
};

export const resumeSection: SectionIntro = {
  kicker: "Resume",
  headline: "Professional summary",
};

export const resume: ResumeContent = {
  heading: resumeSection.headline,
  summary:
    "Android Developer with 5+ years of experience across product development, modernization, backend integration, and cross-platform delivery.",
  downloadLabel: "Download Resume",
  downloadHref: "/resume/Mahmoud_Ali_Android_Developer.pdf",
  snapshotHeading: "Key experience snapshot",
  experienceSnapshot: [
    "5+ years building Android applications with Kotlin and Jetpack Compose.",
    "Delivered backend-integrated systems using Ktor, MySQL, Docker, and Nginx.",
    "Supported cross-platform initiatives with Compose Multiplatform, Flutter, and Kotlin Multiplatform.",
  ],
  educationHeading: "Education",
  education: {
    institution: "Beni Suef University",
    degree: "Bachelor's Degree",
    graduated: "August 2012",
  },
};

export const contactSection: SectionIntro = {
  kicker: "Contact",
  headline:
    "Have an Android role, freelance project, or collaboration opportunity? Let's connect.",
};

export const contact: ContactContent = {
  headline: contactSection.kicker,
  cta: contactSection.headline,
  email: "m37moud00@gmail.com",
  linkedIn: "https://www.linkedin.com/in/mahmoud-aly-29847a198/",
  github: "https://github.com/m37moud",
  phone: "+20 114 858 8723",
  availabilityNote: "Open to full-time and freelance opportunities.",
};

export const footer: FooterContent = {
  brandLabel: "MA",
  copyright: "2026 Mahmoud Aly. All rights reserved.",
};

export const siteContent: SiteContent = {
  language: "en",
  siteUrl: "https://mahmoudaly.dev",
  seo: {
    title: "Mahmoud Aly | Android Developer",
    description:
      "Android Developer with 5+ years of experience building Kotlin and Jetpack Compose applications, integrating backend services, and improving mobile app performance and maintainability.",
  },
  navigation,
  hero,
  devicePreview,
  aboutSection,
  about,
  experienceSection,
  projectsSection,
  skillsSection,
  resumeSection,
  resume,
  contactSection,
  contact,
  footer,
};
