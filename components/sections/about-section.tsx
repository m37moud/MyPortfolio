import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/layout/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="section-spacing">
      <Container>
        <SectionHeading {...siteContent.aboutSection} />
        <div className="grid gap-7 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="max-w-2xl space-y-5 text-base leading-8 text-white/72">
            {siteContent.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal className="grid gap-4 sm:grid-cols-2">
            {siteContent.about.highlightCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[22px] border border-white/10 bg-panel px-5 py-6 shadow-panel"
              >
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/68">{card.body}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
