import Link from "next/link";

import { siteContent } from "@/content/site";
import { externalLinkProps, formatBareUrl, formatLinkedInHandle } from "@/lib/links";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/layout/section-heading";

const normalizePhoneHref = (value: string) => `tel:${value.replaceAll(" ", "")}`;

export function ContactSection() {
  const { contact, contactSection } = siteContent;

  const cards = [
    {
      label: "Email",
      href: `mailto:${contact.email}`,
      value: contact.email,
    },
    {
      label: "LinkedIn",
      href: contact.linkedIn,
      value: formatLinkedInHandle(contact.linkedIn),
    },
    {
      label: "GitHub",
      href: contact.github,
      value: formatBareUrl(contact.github),
    },
    ...(contact.phone
      ? [
          {
            label: "Phone",
            href: normalizePhoneHref(contact.phone),
            value: contact.phone,
          },
        ]
      : []),
  ];

  return (
    <section id="contact" className="section-spacing pb-14">
      <Container>
        <SectionHeading {...contactSection} />
        <Reveal className="mb-6 text-sm text-white/62">{contact.availabilityNote}</Reveal>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <Reveal
              key={card.label}
              as="article"
              className="rounded-[22px] border border-white/10 bg-panel px-5 py-6 shadow-panel"
            >
              <Link
                href={card.href}
                {...externalLinkProps(card.href)}
                className="block transition hover:text-white"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                  {card.label}
                </span>
                <strong className="mt-3 block text-base text-white">{card.value}</strong>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
