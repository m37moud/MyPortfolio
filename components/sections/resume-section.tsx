import { siteContent } from "@/content/site";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function ResumeSection() {
  const { resume, resumeSection } = siteContent;

  return (
    <section id="resume" className="section-spacing">
      <Container>
        <Reveal className="grid gap-8 rounded-[30px] border border-white/10 bg-panel px-6 py-8 shadow-panel lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.24em] text-[#2f78ec]">
              {resumeSection.kicker}
            </span>
            <h2 className="font-heading text-4xl leading-none tracking-[-0.04em] text-white sm:text-5xl">
              {resume.heading}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-white/72">
              {resume.summary}
            </p>
            <div className="mt-6">
              <ButtonLink href={resume.downloadHref} variant="primary" download>
                {resume.downloadLabel}
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/8 bg-black/10 p-5">
            <h3 className="text-lg font-semibold text-white">{resume.snapshotHeading}</h3>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-white/68">
              {resume.experienceSnapshot.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-6 border-t border-white/8 pt-5">
              <h3 className="text-lg font-semibold text-white">{resume.educationHeading}</h3>
              <p className="mt-3 text-sm text-white/78">{resume.education.institution}</p>
              <p className="mt-1 text-sm text-white/64">{resume.education.degree}</p>
              <p className="mt-1 text-sm text-white/54">
                Graduated {resume.education.graduated}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
