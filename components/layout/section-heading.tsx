import type { SectionIntro } from "@/types/site";

import { Reveal } from "@/components/ui/reveal";

export function SectionHeading({ kicker, headline }: SectionIntro) {
  return (
    <Reveal className="mb-9 max-w-3xl">
      <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.24em] text-[#2f78ec]">
        {kicker}
      </span>
      <h2 className="font-heading text-4xl leading-none tracking-[-0.04em] text-white sm:text-5xl">
        {headline}
      </h2>
    </Reveal>
  );
}
