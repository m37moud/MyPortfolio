import { siteContent } from "@/content/site";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  const { hero } = siteContent;

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-10"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-9rem] top-14 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(47,120,236,0.22)_0%,rgba(47,120,236,0.08)_32%,transparent_68%)] blur-2xl" />
        <div className="absolute inset-x-0 top-10 h-[26rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.08]" />
        <div className="absolute left-[8%] top-[22%] h-28 w-28 rotate-12 rounded-[2rem] border border-white/8 bg-white/[0.02]" />
      </div>
      <Container>
        <div className="grid gap-10 py-6 sm:py-8 lg:min-h-[calc(100vh-148px)] lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-12">
          <Reveal className="space-y-6">
            <div>
              <p className="font-heading text-[clamp(3.8rem,8vw,6.2rem)] leading-[0.92] tracking-[-0.08em] text-white">
                {hero.name}
              </p>
              <h1 className="mt-2 font-heading text-[clamp(2.35rem,4vw,4.1rem)] leading-[0.95] tracking-[-0.06em] text-[#2f78ec]">
                {hero.title}
              </h1>
            </div>
            <div className="max-w-2xl space-y-3">
              <p className="max-w-[26ch] text-xl leading-8 text-white/88 sm:text-2xl">
                {hero.summary}
              </p>
              <p className="max-w-xl text-base leading-8 text-white/70">
                {hero.supportingText}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-1">
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
          </Reveal>

          <Reveal className="mx-auto flex w-full justify-center lg:justify-end">
            <div className="w-[min(100%,22rem)] sm:w-full sm:max-w-[430px] rounded-[34px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-[1px] shadow-[0_32px_90px_rgba(0,0,0,0.42)]">
              <div className="rounded-[33px] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(47,120,236,0.24),transparent_34%),linear-gradient(180deg,rgba(9,17,32,0.98)_0%,rgba(4,10,20,0.98)_100%)] p-4 sm:p-6">
                <div className="flex flex-col gap-2 text-[0.72rem] uppercase tracking-[0.22em] text-white/48 sm:flex-row sm:items-center sm:justify-between">
                  <span>Proof snapshot</span>
                  <span>Android delivery</span>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-2.5 min-[360px]:grid-cols-2">
                  {hero.expertiseChips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-center text-xs font-medium tracking-[0.08em] text-white/86 backdrop-blur-sm"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                <div className="mt-5 rounded-[26px] border border-[#63a2ff]/18 bg-[linear-gradient(180deg,rgba(47,120,236,0.16),rgba(255,255,255,0.03))] p-5 sm:p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#8ab6ff]">
                    {hero.featuredOutcome.label}
                  </p>
                  <h2 className="mt-4 max-w-[12ch] text-[1.8rem] font-semibold leading-[1.02] text-white sm:text-[2.2rem]">
                    {hero.featuredOutcome.title}
                  </h2>
                  <p className="mt-4 max-w-[34ch] text-sm leading-7 text-white/72">
                    {hero.featuredOutcome.detail}
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#63a2ff] shadow-[0_0_0_6px_rgba(99,162,255,0.14)]" />
                    <span className="text-sm text-white/78">Delivery focus with maintainable foundations</span>
                  </div>
                </div>

                <div className="mt-5 rounded-[26px] border border-white/8 bg-white/[0.03] p-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm font-medium text-white">Recent activity</p>
                    <span className="text-xs uppercase tracking-[0.18em] text-white/42">Selected work</span>
                  </div>

                  <div className="mt-4 grid gap-3.5">
                    {hero.recentActivity.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[18px] border border-white/7 bg-black/10 px-4 py-3 text-sm transition duration-200 hover:border-white/12 hover:bg-white/[0.045]"
                      >
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-white/72" />
                          <div className="min-w-0 flex-1">
                            <p className="text-white/88">{item.label}</p>
                          </div>
                          <span className="text-[0.7rem] uppercase tracking-[0.14em] text-white/40 sm:shrink-0">
                            {item.meta}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
