export const isExternalHref = (href: string) =>
  href.startsWith("http://") || href.startsWith("https://");

export const externalLinkProps = (href: string) =>
  isExternalHref(href)
    ? { target: "_blank", rel: "noreferrer noopener" as const }
    : {};

export const formatLinkedInHandle = (value: string) =>
  value.replace("https://www.linkedin.com/in/", "").replace(/\/$/, "");

export const formatBareUrl = (value: string) => value.replace(/^https?:\/\//, "");
