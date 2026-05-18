import { siteContent } from "@/content/site";

const previewUrl = process.env.VERCEL_URL;
const vercelEnv = process.env.VERCEL_ENV;

export function getResolvedSiteUrl() {
  if (vercelEnv === "preview" && previewUrl) {
    return new URL(`https://${previewUrl}`);
  }

  return new URL(siteContent.siteUrl);
}
