import Link from "next/link";

import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <Container>
      <footer className="flex flex-col gap-5 border-t border-white/10 py-10 text-sm text-white/60 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <span className="font-heading text-2xl font-bold tracking-[-0.06em] text-white">
            {siteContent.footer.brandLabel}
          </span>
          <p>{siteContent.footer.copyright}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-4">
          {siteContent.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </footer>
    </Container>
  );
}
