import Link from "next/link";

import { siteContent } from "@/content/site";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Header() {
  return (
    <Container>
      <header className="sticky top-4 z-30 mt-5 rounded-[22px] border border-white/10 bg-[#040914]/88 px-4 py-4 backdrop-blur-xl md:px-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="#home"
              aria-label={`${siteContent.hero.name} home`}
              className="font-heading text-3xl font-bold tracking-[-0.06em] text-white"
            >
              {siteContent.footer.brandLabel}
            </Link>
            <ButtonLink
              href={siteContent.resume.downloadHref}
              variant="primary"
              download
            >
              {siteContent.resume.downloadLabel}
            </ButtonLink>
          </div>
          <nav
            aria-label="Primary"
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/70"
          >
            {siteContent.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </Container>
  );
}
