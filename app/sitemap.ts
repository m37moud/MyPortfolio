import type { MetadataRoute } from "next";

import { getResolvedSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getResolvedSiteUrl();

  return [
    {
      url: siteUrl.toString(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
