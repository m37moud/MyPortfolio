import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/layout/section-heading";

export function AboutSection() {
  const { about, aboutSection } = siteContent;
  const [leadParagraph, supportingParagraph] = about.paragraphs;

  return (
    <section id="about" className="section-spacing">
      <Container>
        <SectionHeading {...aboutSection} />
        <div className="grid gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <Reveal className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-6 shadow-panel sm:p-8">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8ab6ff]">
              How I work
            </span>
            <p className="mt-4 max-w-[28ch] text-[1.45rem] leading-8 text-white sm:text-[1.65rem] sm:leading-9">
              {leadParagraph}
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/68 sm:text-base">
              {supportingParagraph}
            </p>

            <div className="mt-8 rounded-[22px] border border-white/8 bg-black/15 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/46">
                Core strengths
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {about.highlightCards.map((card) => (
                  <span
                    key={card.title}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium tracking-[0.08em] text-white/82"
                  >
                    {card.title}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="grid gap-4 sm:grid-cols-2">
            {about.highlightCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[22px] border border-white/10 bg-panel px-5 py-6 shadow-panel transition duration-300 hover:-translate-y-1 hover:border-white/16"
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
