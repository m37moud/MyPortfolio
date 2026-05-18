import Link from "next/link";
import type { PropsWithChildren } from "react";

import { externalLinkProps } from "@/lib/links";
import type { HeroAction } from "@/types/site";

const variantClasses: Record<HeroAction["variant"], string> = {
  primary:
    "border-transparent bg-linear-to-b from-[#2f78ec] to-[#0356c5] text-white shadow-[0_20px_45px_rgba(3,86,197,0.32)]",
  secondary:
    "border-white/15 bg-white/[0.03] text-white/90 hover:border-white/30 hover:bg-white/[0.06]",
  ghost:
    "border-white/10 bg-transparent text-white/80 hover:border-white/20 hover:text-white",
};

interface ButtonLinkProps extends PropsWithChildren {
  href: string;
  variant: HeroAction["variant"];
  download?: boolean;
}

export function ButtonLink({ children, href, variant, download = false }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      download={download}
      className={`inline-flex min-h-12 items-center justify-center rounded-2xl border px-5 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 ${variantClasses[variant]}`}
      {...externalLinkProps(href)}
    >
      {children}
    </Link>
  );
}
