import type { Metadata } from "next";

import { siteContent } from "@/content/site";

const siteUrl = new URL(siteContent.siteUrl);

export const baseMetadata: Metadata = {
  metadataBase: siteUrl,
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  applicationName: "Mahmoud Aly Portfolio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Mahmoud Aly portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    images: ["/images/og-image.svg"],
  },
  icons: {
    icon: "/images/favicon.svg",
  },
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteContent.hero.name,
  jobTitle: siteContent.hero.title,
  url: siteContent.siteUrl,
  email: `mailto:${siteContent.contact.email}`,
  sameAs: [
    siteContent.contact.linkedIn,
    siteContent.contact.github,
  ],
  alumniOf: siteContent.resume.education.institution,
};
