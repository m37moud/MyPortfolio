export interface ProjectLink {
  label: string;
  href: string;
  type: "github" | "google-play" | "app-store" | "demo" | "other";
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectCard {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  role: string;
  visualClass: string;
  image?: ProjectImage;
  scope: string[];
  technologies: string[];
  highlights: string[];
  links: ProjectLink[];
  featured: boolean;
  sortOrder: number;
}
