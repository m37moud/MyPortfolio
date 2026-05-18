export interface LinkItem {
  label: string;
  href: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface HeroAction {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "ghost";
  download?: boolean;
}

export interface HeroContent {
  name: string;
  title: string;
  summary: string;
  supportingText: string;
  actions: HeroAction[];
  socialLinks: LinkItem[];
}

export interface DeviceAgendaItem {
  label: string;
  time: string;
}

export interface DeviceActivityItem {
  label: string;
  timeAgo: string;
}

export interface DevicePreviewContent {
  currentScreenLabel: string;
  currentTime: string;
  greetingLabel: string;
  greetingName: string;
  agenda: DeviceAgendaItem[];
  activityHeading: string;
  activities: DeviceActivityItem[];
  tabs: string[];
  activeTab: string;
}

export interface HighlightCard {
  title: string;
  body: string;
}

export interface AboutContent {
  headline: string;
  paragraphs: string[];
  highlightCards: HighlightCard[];
}

export interface ResumeContent {
  heading: string;
  summary: string;
  downloadLabel: string;
  downloadHref: string;
  snapshotHeading: string;
  experienceSnapshot: string[];
  educationHeading: string;
  education: {
    institution: string;
    degree: string;
    graduated: string;
  };
}

export interface ContactContent {
  headline: string;
  cta: string;
  email: string;
  linkedIn: string;
  github: string;
  phone?: string;
  availabilityNote: string;
}

export interface SeoContent {
  title: string;
  description: string;
}

export interface SectionIntro {
  kicker: string;
  headline: string;
}

export interface FooterContent {
  brandLabel: string;
  copyright: string;
}

export interface SiteContent {
  language: string;
  siteUrl: string;
  seo: SeoContent;
  navigation: NavigationItem[];
  hero: HeroContent;
  devicePreview: DevicePreviewContent;
  aboutSection: SectionIntro;
  about: AboutContent;
  experienceSection: SectionIntro;
  projectsSection: SectionIntro;
  skillsSection: SectionIntro;
  resumeSection: SectionIntro;
  resume: ResumeContent;
  contactSection: SectionIntro;
  contact: ContactContent;
  footer: FooterContent;
}
