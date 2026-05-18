import { experience } from "@/content/experience";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/layout/section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-spacing">
      <Container>
        <SectionHeading {...siteContent.experienceSection} />
        <div className="relative grid gap-7 before:absolute before:bottom-3 before:left-[9.2rem] before:top-3 before:hidden before:w-px before:bg-linear-to-b before:from-[#2f78ec] before:to-[#2f78ec]/10 lg:before:block">
          {experience.map((entry) => (
            <Reveal
              key={`${entry.company}-${entry.period}`}
              as="article"
              className="grid gap-6 lg:grid-cols-[150px_1fr]"
            >
              <div className="relative grid content-start gap-1 pt-1">
                <span className="text-sm font-semibold text-white">{entry.period}</span>
                <span className="text-sm text-white/54">{entry.locationOrMode}</span>
                <span className="absolute -right-7 top-2 hidden h-3 w-3 rounded-full border-[3px] border-[#2f78ec] bg-[#02060e] lg:block" />
              </div>
              <div className="rounded-[26px] border border-white/10 bg-panel px-6 py-7 shadow-panel">
                <h3 className="text-xl font-semibold text-white">{entry.company}</h3>
                <p className="mt-2 font-medium text-[#2f78ec]">{entry.role}</p>
                <p className="mt-4 text-sm leading-7 text-white/72">{entry.summary}</p>
                <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-white/66">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-[#80b1ff]">
                  {entry.featuredTechnologies.join(" · ")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
