import Link from "next/link";

import { siteContent } from "@/content/site";
import { externalLinkProps } from "@/lib/links";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  const { hero, devicePreview } = siteContent;

  return (
    <section id="home" className="pt-10">
      <Container>
        <div className="grid gap-12 py-8 sm:py-10 lg:min-h-[calc(100vh-108px)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal className="space-y-7">
            <div>
              <p className="font-heading text-[clamp(3.8rem,8vw,6.2rem)] leading-[0.92] tracking-[-0.08em] text-white">
                {hero.name}
              </p>
              <h1 className="mt-2 font-heading text-[clamp(2.35rem,4vw,4.1rem)] leading-[0.95] tracking-[-0.06em] text-[#2f78ec]">
                {hero.title}
              </h1>
            </div>
            <div className="max-w-2xl space-y-4">
              <p className="text-xl leading-8 text-white/88 sm:text-2xl">
                {hero.summary}
              </p>
              <p className="max-w-xl text-base leading-8 text-white/72">
                {hero.supportingText}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {hero.actions.map((action) => (
                <ButtonLink
                  key={action.label}
                  href={action.href}
                  variant={action.variant}
                  download={action.download}
                >
                  {action.label}
                </ButtonLink>
              ))}
            </div>
            <ul className="flex flex-wrap gap-5 text-sm text-white/78">
              {hero.socialLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    {...externalLinkProps(link.href)}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mx-auto flex w-full justify-center lg:justify-end">
            <div className="w-full max-w-[390px] rounded-[42px] border border-white/18 bg-linear-to-b from-white/18 to-white/4 p-3.5 shadow-[0_28px_70px_rgba(0,0,0,0.4)]">
              <div className="mx-auto mb-3 h-6 w-28 rounded-full bg-black/80" />
              <div className="rounded-[30px] border border-white/5 bg-[radial-gradient(circle_at_top_center,rgba(65,122,219,0.18),transparent_34%),linear-gradient(180deg,#0c1628_0%,#091120_100%)] p-4">
                <div className="mb-4 flex items-center justify-between text-xs text-white/70">
                  <span>{devicePreview.currentScreenLabel}</span>
                  <span>{devicePreview.currentTime}</span>
                </div>

                <div className="rounded-[22px] border border-white/8 bg-white/4 p-5">
                  <p className="text-sm text-white/68">{devicePreview.greetingLabel}</p>
                  <h2 className="mt-2 text-3xl font-semibold text-white">
                    {devicePreview.greetingName}
                  </h2>
                </div>

                <div className="mt-4 grid gap-3 rounded-[22px] border border-white/8 bg-white/4 p-5">
                  {devicePreview.agenda.map((item) => (
                    <div key={item.label} className="flex items-center gap-3 text-sm text-white/86">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#2f78ec] shadow-[0_0_0_4px_rgba(47,120,236,0.12)]" />
                      <span>{item.label}</span>
                      <span className="ml-auto text-xs text-white/48">{item.time}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-[22px] border border-white/8 bg-white/4 p-5">
                  <p className="text-sm text-white/68">{devicePreview.activityHeading}</p>
                  <div className="mt-4 grid gap-3">
                    {devicePreview.activities.map((item) => (
                      <div key={item.label} className="flex items-center justify-between gap-4 text-sm">
                        <strong className="font-medium text-white">{item.label}</strong>
                        <span className="text-white/48">{item.timeAgo}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between px-1 text-xs text-white/60">
                  {devicePreview.tabs.map((tab) => (
                    <span
                      key={tab}
                      className={tab === devicePreview.activeTab ? "text-white" : undefined}
                    >
                      {tab}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
