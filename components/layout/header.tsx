"use client";

import Link from "next/link";
import { startTransition, useEffect, useState } from "react";

import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/container";

const SCROLL_THRESHOLD = 36;
const SECTION_OFFSET = 180;
const HEADER_HIDE_OFFSET = 140;
const SCROLL_DIRECTION_DELTA = 10;
const SECTION_IDS = siteContent.navigation.map((item) => item.href.replace("#", ""));

export function Header() {
  const navigationItems = siteContent.navigation;

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    let previousScrollY = 0;

    const updateHeaderState = () => {
      const scrollY = window.scrollY;
      const nextScrolled = scrollY > SCROLL_THRESHOLD;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const aboutSection = document.getElementById("about");

      setIsScrolled((current) => (current === nextScrolled ? current : nextScrolled));

      let nextActiveHref = "#home";

      for (const id of SECTION_IDS) {
        const element = document.getElementById(id);

        if (!element) {
          continue;
        }

        const top = element.getBoundingClientRect().top + scrollY;

        if (scrollY + SECTION_OFFSET >= top) {
          nextActiveHref = `#${id}`;
        }
      }

      setActiveHref((current) => (current === nextActiveHref ? current : nextActiveHref));

      const nextShowBackToTop = aboutSection
        ? scrollY + SECTION_OFFSET >= aboutSection.getBoundingClientRect().top + scrollY
        : scrollY > HEADER_HIDE_OFFSET;

      setShowBackToTop((current) => (current === nextShowBackToTop ? current : nextShowBackToTop));

      if (isMobileMenuOpen || scrollY <= HEADER_HIDE_OFFSET || prefersReducedMotion) {
        setIsHeaderVisible(true);
        previousScrollY = scrollY;
        return;
      }

      const scrollDelta = scrollY - previousScrollY;

      if (scrollDelta > SCROLL_DIRECTION_DELTA) {
        setIsHeaderVisible(false);
      } else if (scrollDelta < -SCROLL_DIRECTION_DELTA) {
        setIsHeaderVisible(true);
      }

      previousScrollY = scrollY;
    };

    let frameId = 0;

    const handleScroll = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = 0;

        startTransition(() => {
          updateHeaderState();
        });
      });
    };

    updateHeaderState();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    window.addEventListener("hashchange", handleScroll);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("hashchange", handleScroll);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    setIsHeaderVisible(true);

    const closeMenu = () => setIsMobileMenuOpen(false);

    window.addEventListener("resize", closeMenu);
    window.addEventListener("hashchange", closeMenu);

    return () => {
      window.removeEventListener("resize", closeMenu);
      window.removeEventListener("hashchange", closeMenu);
    };
  }, [isMobileMenuOpen]);

  const scrollToHero = () => {
    const heroSection = document.getElementById("home");

    if (!heroSection) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    heroSection.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `${window.location.pathname}#home`);
    setIsHeaderVisible(true);
    setShowBackToTop(false);
  };

  return (
    <>
      <div
        className={`sticky top-4 z-40 mt-5 transition duration-300 motion-reduce:transition-none ${
          isHeaderVisible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-6 opacity-0"
        }`}
      >
      <Container>
        <header
          className={`relative overflow-hidden rounded-[26px] border border-white/10 bg-[#040914]/82 backdrop-blur-xl transition-all duration-300 motion-reduce:transition-none ${
            isScrolled
              ? "shadow-[0_20px_70px_rgba(0,0,0,0.38)]"
              : "shadow-[0_28px_90px_rgba(0,0,0,0.22)]"
          }`}
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_top_right,rgba(47,120,236,0.24),transparent_62%)] opacity-90" />

          <div
            className={`relative transition-all duration-300 ${
              isScrolled ? "px-4 py-3 md:px-5" : "px-4 py-4 md:px-5 md:py-[1.125rem]"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <Link
                href="#home"
                aria-label={`${siteContent.hero.name} home`}
                className="group flex min-w-0 items-center gap-3 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#63a2ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#040914]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] border border-white/10 bg-white/[0.04] font-heading text-[1.65rem] font-bold tracking-[-0.08em] text-white transition duration-300 group-hover:border-[#63a2ff]/30 group-hover:bg-white/[0.07]">
                  {siteContent.footer.brandLabel}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold uppercase tracking-[0.24em] text-[#8ab6ff]">
                    Android Developer
                  </span>
                  <span className="mt-0.5 hidden truncate font-heading text-[1.35rem] leading-none tracking-[-0.05em] text-white md:block">
                    {siteContent.hero.name}
                  </span>
                </span>
              </Link>

              <div className="hidden items-center gap-3 lg:flex">
                <nav aria-label="Primary" className="flex items-center gap-1 rounded-full border border-white/8 bg-black/10 p-1">
                  {navigationItems.map((item) => {
                    const isActive = activeHref === item.href;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        data-active={isActive ? "true" : undefined}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#63a2ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#040914] ${
                          isActive
                            ? "bg-white/[0.08] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                            : "text-white/68 hover:bg-white/[0.05] hover:text-white"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>

                <Link
                  href={siteContent.resume.downloadHref}
                  download
                  className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/14 bg-white/[0.04] px-5 text-sm font-semibold text-white/90 transition duration-200 hover:-translate-y-0.5 hover:border-white/28 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#63a2ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#040914]"
                >
                  {siteContent.resume.downloadLabel}
                </Link>
              </div>

              <button
                type="button"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-primary-nav"
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white transition duration-200 hover:border-white/20 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#63a2ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#040914] lg:hidden"
                onClick={() => setIsMobileMenuOpen((current) => !current)}
              >
                <span className="sr-only">Toggle navigation menu</span>
                <span className="flex flex-col gap-1.5">
                  <span
                    className={`block h-0.5 w-5 rounded-full bg-current transition duration-200 ${
                      isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-5 rounded-full bg-current transition duration-200 ${
                      isMobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-5 rounded-full bg-current transition duration-200 ${
                      isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2 lg:hidden">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#63a2ff]/20 bg-[#2f78ec]/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[#9bc1ff]">
                <span className="h-2 w-2 rounded-full bg-[#63a2ff] shadow-[0_0_0_6px_rgba(99,162,255,0.12)]" />
                Open to work
              </span>
            </div>

            <div className="mt-3 hidden items-center justify-between gap-4 lg:flex">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#63a2ff]/20 bg-[#2f78ec]/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[#9bc1ff]">
                <span className="h-2 w-2 rounded-full bg-[#63a2ff] shadow-[0_0_0_6px_rgba(99,162,255,0.12)]" />
                Open to work
              </span>
              <p className="text-sm text-white/54">Scroll through projects, delivery history, and contact details.</p>
            </div>

            <div
              id="mobile-primary-nav"
              className={`grid overflow-hidden transition-all duration-300 lg:hidden ${
                isMobileMenuOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0">
                <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
                  <nav aria-label="Mobile primary" className="grid gap-2">
                    {navigationItems.map((item) => {
                      const isActive = activeHref === item.href;

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          data-active={isActive ? "true" : undefined}
                          className={`rounded-2xl px-4 py-3 text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#63a2ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#040914] ${
                            isActive
                              ? "border border-white/10 bg-white/[0.08] text-white"
                              : "border border-transparent bg-white/[0.02] text-white/72 hover:bg-white/[0.05] hover:text-white"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </nav>

                  <Link
                    href={siteContent.resume.downloadHref}
                    download
                    className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-2xl border border-[#63a2ff]/22 bg-[linear-gradient(135deg,rgba(47,120,236,0.18),rgba(255,255,255,0.05))] px-5 text-sm font-semibold text-white transition duration-200 hover:border-[#63a2ff]/35 hover:bg-[linear-gradient(135deg,rgba(47,120,236,0.24),rgba(255,255,255,0.08))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#63a2ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#040914]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {siteContent.resume.downloadLabel}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
      </Container>
      </div>

      <button
        type="button"
        aria-label="Back to top"
        className={`fixed bottom-6 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-[#63a2ff]/24 bg-[#091120]/86 px-4 py-3 text-sm font-semibold text-white shadow-[0_20px_55px_rgba(0,0,0,0.32)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[#63a2ff]/45 hover:bg-[#0d1730]/92 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#63a2ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#040914] motion-reduce:transition-none sm:right-6 ${
          showBackToTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
        onClick={scrollToHero}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-base leading-none text-[#9bc1ff]">
          ↑
        </span>
        <span>Back to top</span>
      </button>
    </>
  );
}
