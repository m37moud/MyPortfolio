import Image from "next/image";
import Link from "next/link";

import { projects } from "@/content/projects";
import { siteContent } from "@/content/site";
import { externalLinkProps } from "@/lib/links";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/layout/section-heading";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-spacing">
      <Container>
        <SectionHeading {...siteContent.projectsSection} />
        <div className="grid gap-5">
          {projects
            .slice()
            .sort((left, right) => left.sortOrder - right.sortOrder)
            .map((project) => (
              <Reveal
                key={project.slug}
                as="article"
                className="grid gap-6 rounded-[28px] border border-white/10 bg-panel p-5 shadow-panel lg:grid-cols-[minmax(300px,360px)_1fr] lg:items-start"
              >
                <div
                  className={`relative aspect-[4/3] w-full rounded-[20px] border border-white/8 bg-linear-135 ${project.visualClass} overflow-hidden`}
                >
                  {project.image ? (
                    <>
                      <div className="absolute inset-0 p-3 sm:p-4">
                        <div className="relative h-full w-full overflow-hidden rounded-[16px] border border-white/12 bg-slate-950/20 shadow-[0_18px_40px_rgba(0,0,0,0.25)] backdrop-blur-[2px]">
                          <Image
                            src={project.image.src}
                            alt={project.image.alt}
                            fill
                            sizes="(min-width: 1024px) 360px, (min-width: 640px) 80vw, 100vw"
                            className="object-cover object-center"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-slate-950/35 via-transparent to-white/8" />
                        </div>
                      </div>
                    </>
                  ) : null}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_25%)]" />
                </div>
                <div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                      <p className="mt-2 text-sm text-white/66">{project.tagline}</p>
                    </div>
                    <span className="text-sm font-medium text-white/60">{project.role}</span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-white/72">{project.summary}</p>
                  <p className="mt-4 text-sm leading-7 text-white/68">
                    <strong className="text-white">Scope:</strong> {project.scope.join(" · ")}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/68">
                    <strong className="text-white">Stack:</strong> {project.technologies.join(" · ")}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3 text-sm text-[#80b1ff]">
                    {project.links.map((link) => (
                      <Link
                        key={`${project.slug}-${link.href}`}
                        href={link.href}
                        {...externalLinkProps(link.href)}
                        className="rounded-full border border-[#80b1ff]/20 px-3 py-2 transition hover:border-[#80b1ff]/40 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
        </div>
      </Container>
    </section>
  );
}
