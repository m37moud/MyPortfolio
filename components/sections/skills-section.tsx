import { skillGroups } from "@/content/skills";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/layout/section-heading";

export function SkillsSection() {
  return (
    <section id="skills" className="section-spacing">
      <Container>
        <SectionHeading {...siteContent.skillsSection} />
        <div className="grid gap-4 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <Reveal
              key={group.title}
              as="article"
              className="rounded-[22px] border border-white/10 bg-panel px-5 py-6 shadow-panel"
            >
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/68">
                {group.items.join(" · ")}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
