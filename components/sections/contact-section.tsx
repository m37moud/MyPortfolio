import Link from "next/link";

import { siteContent } from "@/content/site";
import { externalLinkProps, formatBareUrl, formatLinkedInHandle } from "@/lib/links";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/layout/section-heading";

const normalizePhoneHref = (value: string) => `tel:${value.replaceAll(" ", "")}`;

type IconProps = {
  className?: string;
};

function EmailIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.25" y="5.25" width="17.5" height="13.5" rx="2.5" />
      <path d="m5.5 7 6.5 5 6.5-5" />
    </svg>
  );
}

function LinkedInIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M6.75 8.25a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm-1.25 2h2.5v8.25H5.5v-8.25Zm4.5 0h2.4v1.13h.03c.33-.63 1.15-1.3 2.38-1.3 2.55 0 3.02 1.68 3.02 3.87v4.55h-2.5v-4.04c0-.96-.02-2.2-1.34-2.2-1.34 0-1.55 1.05-1.55 2.13v4.1H10V10.25Z" />
    </svg>
  );
}

function GitHubIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.49-3.76-1.49-.51-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.65 2.16 3.26 1.53.1-.73.39-1.22.72-1.5-2.47-.28-5.07-1.24-5.07-5.5 0-1.21.43-2.2 1.15-2.98-.12-.28-.5-1.4.1-2.92 0 0 .94-.3 3.08 1.14a10.69 10.69 0 0 1 5.6 0c2.14-1.45 3.08-1.14 3.08-1.14.6 1.52.22 2.64.1 2.92.72.78 1.15 1.77 1.15 2.98 0 4.27-2.6 5.21-5.08 5.49.4.34.76 1 .76 2.02v3c0 .3.2.65.77.54A11.25 11.25 0 0 0 12 .75Z" />
    </svg>
  );
}

function PhoneIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6.9 4.5h2.32c.44 0 .82.3.93.72l.78 3.15a1 1 0 0 1-.29.97l-1.4 1.3a13.45 13.45 0 0 0 4.12 4.12l1.3-1.4a1 1 0 0 1 .98-.29l3.14.78c.42.1.72.49.72.93v2.32a1 1 0 0 1-.9 1c-7 .56-12.27-4.7-11.71-11.7a1 1 0 0 1 1.01-.9Z" />
    </svg>
  );
}

function ArrowIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function ContactSection() {
  const { contact, contactSection } = siteContent;

  const cards = [
    {
      featured: true,
      label: "Email",
      href: `mailto:${contact.email}`,
      value: contact.email,
      description: "For hiring, project inquiries, and direct outreach.",
      actionLabel: "Message",
      icon: EmailIcon,
    },
    {
      label: "LinkedIn",
      href: contact.linkedIn,
      value: formatLinkedInHandle(contact.linkedIn),
      description: "Connect professionally and review career experience.",
      actionLabel: "Open profile",
      icon: LinkedInIcon,
    },
    {
      label: "GitHub",
      href: contact.github,
      value: formatBareUrl(contact.github),
      description: "Browse repositories, code samples, and technical work.",
      actionLabel: "View code",
      icon: GitHubIcon,
    },
    ...(contact.phone
      ? [
          {
            label: "Phone",
            href: normalizePhoneHref(contact.phone),
            value: contact.phone,
            description: "Best for urgent conversations and direct follow-up.",
            actionLabel: "Call",
            icon: PhoneIcon,
          },
        ]
      : []),
  ];

  return (
    <section id="contact" className="section-spacing relative overflow-hidden pb-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(47,120,236,0.16)_0%,rgba(47,120,236,0.06)_34%,transparent_72%)] blur-3xl" />
        <div className="absolute inset-x-0 top-12 h-52 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.06]" />
      </div>
      <Container>
        <SectionHeading {...contactSection} />
        <Reveal className="mb-8 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6 shadow-panel sm:p-7">
          <div className="max-w-3xl">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8ab6ff]">
                {contact.availabilityNote}
              </p>
              <p className="mt-3 max-w-[44ch] text-lg leading-8 text-white/86">
                {contact.cta}
              </p>
              {contact.responseNote ? (
                <p className="mt-3 max-w-[54ch] text-sm leading-7 text-white/62">
                  {contact.responseNote}
                </p>
              ) : null}
            </div>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium uppercase tracking-[0.14em] text-white/76">
                Email for hiring and project work
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium uppercase tracking-[0.14em] text-white/76">
                Phone for urgent follow-up
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium uppercase tracking-[0.14em] text-white/76">
                Remote and freelance friendly
              </span>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <Reveal
              key={card.label}
              as="article"
              className={`rounded-[22px] border bg-panel shadow-panel transition-transform duration-300 hover:-translate-y-1 ${
                card.featured
                  ? "border-[#2f78ec]/35 bg-[linear-gradient(180deg,rgba(47,120,236,0.14),rgba(10,18,32,0.96))] md:col-span-2 xl:col-span-2"
                  : "border-white/10"
              }`}
            >
              <Link
                href={card.href}
                {...externalLinkProps(card.href)}
                aria-label={`${card.actionLabel} via ${card.label}: ${card.value}`}
                className="group block h-full rounded-[22px] px-5 py-6 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f78ec]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111f] sm:px-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#2f78ec]/25 bg-[#2f78ec]/10 text-[#7db0ff] transition duration-300 group-hover:border-[#2f78ec]/45 group-hover:bg-[#2f78ec]/18 group-hover:text-white">
                      <card.icon className="h-5 w-5" />
                    </span>
                    {card.featured ? (
                      <span className="inline-flex rounded-full border border-[#8ab6ff]/20 bg-[#8ab6ff]/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#b8d5ff]">
                        Primary contact
                      </span>
                    ) : null}
                  </div>
                  <ArrowIcon
                    className={`h-4 w-4 shrink-0 text-white/36 transition duration-300 group-hover:translate-x-1 group-hover:text-white/72 ${
                      card.featured ? "mt-1" : "mt-0.5"
                    }`}
                  />
                </div>

                <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                  {card.label}
                </span>
                <strong
                  className={`mt-3 block text-white transition duration-300 group-hover:text-[#d8e7ff] ${
                    card.featured ? "text-xl leading-8 sm:text-[1.65rem]" : "text-base leading-7"
                  }`}
                >
                  {card.value}
                </strong>
                <span
                  className={`mt-3 block transition duration-300 group-hover:text-white/72 ${
                    card.featured ? "max-w-[38ch] text-base leading-7 text-white/68" : "text-sm leading-6 text-white/58"
                  }`}
                >
                  {card.description}
                </span>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#9fc3ff] transition duration-300 group-hover:text-white">
                  {card.actionLabel}
                  <ArrowIcon className="h-3.5 w-3.5 transition duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
