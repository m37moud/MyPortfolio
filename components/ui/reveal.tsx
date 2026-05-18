"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Transition } from "framer-motion";
import type { PropsWithChildren } from "react";

interface RevealProps extends PropsWithChildren {
  className?: string;
  as?: "div" | "article";
}

export function Reveal({ children, className, as = "div" }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const transition: Transition = { duration: 0.5, ease: "easeOut" };

  const shared = {
    initial: prefersReducedMotion ? false : { opacity: 0, y: 24 },
    whileInView: prefersReducedMotion ? {} : { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition,
    className,
    children,
  };

  if (as === "article") {
    return <motion.article {...shared} />;
  }

  return <motion.div {...shared} />;
}
