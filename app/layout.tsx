import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { baseMetadata } from "@/lib/metadata";

import "./globals.css";

const bodyFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["500", "700"],
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body className="bg-site text-white antialiased">
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(20,57,124,0.22),transparent_25%),radial-gradient(circle_at_top_left,rgba(10,31,72,0.36),transparent_30%),linear-gradient(180deg,#02060e_0%,#040a14_55%,#02060e_100%)]" />
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.35),transparent_65%)]" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
