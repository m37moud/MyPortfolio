# Mahmoud Aly Portfolio

This project is Mahmoud Aly's personal portfolio website. It presents his Android engineering experience, selected projects, technical skills, resume, and contact details through a fast, SEO-friendly single-page experience built with the Next.js App Router.

The app is intentionally content-driven: portfolio data lives in typed TypeScript modules, route composition lives in `app/`, and reusable UI stays in `components/`. That keeps updates straightforward while preserving a clean architecture for future growth such as project detail pages, localization, or a backend-powered contact flow.

## What the app does

- Introduces Mahmoud Aly as an Android Developer
- Highlights work experience and project case studies
- Organizes technical skills into grouped categories
- Exposes a downloadable resume through a stable public URL
- Publishes metadata, sitemap, robots rules, and structured data for discoverability

## Architecture overview

The application follows a source-driven architecture with clear boundaries:

- `app/` handles routing, page composition, metadata routes, and global styles
- `components/` contains layout primitives, portfolio sections, and shared UI helpers
- `content/` is the editable source of truth for portfolio copy and structured records
- `types/` defines the TypeScript contracts used by content and UI
- `lib/` contains pure helpers for metadata and link handling
- `public/` serves static assets such as the resume PDF and social preview images

At runtime, the homepage is composed from section components in `app/page.tsx`. Those sections render typed content imported from `content/`, while `app/layout.tsx` wraps the page with shared chrome such as the header, footer, fonts, and global background styling.

## Rendering model

- Framework: `Next.js 15` with the App Router
- Rendering strategy: static generation for the homepage
- Styling strategy: global CSS plus utility-first Tailwind CSS v4 classes
- Animation strategy: selective client-side motion via `framer-motion`
- SEO strategy: Next.js metadata APIs, JSON-LD structured data, `robots.ts`, and `sitemap.ts`

Most of the site renders as static server output. Client-side JavaScript is used sparingly for progressive enhancement, especially scroll-based reveal animation through `components/ui/reveal.tsx`.

## Data and content flow

The portfolio is not CMS-backed. Instead, content is managed directly in code through typed modules:

- `content/site.ts`: site-wide information, navigation, hero content, about copy, resume summary, contact details, and SEO fields
- `content/experience.ts`: professional experience timeline entries
- `content/projects.ts`: selected project cards, links, and technical highlights
- `content/skills.ts`: grouped skill categories

This approach keeps the content model explicit and version-controlled. Type contracts in `types/` help prevent broken UI caused by malformed content updates.

## Tech stack

### Core framework

- `Next.js 15`
- `React 19`
- `TypeScript 5`

### Styling and UI

- `Tailwind CSS 4`
- Global CSS in `app/globals.css`
- Google Fonts loaded in `app/layout.tsx`

### Motion and interaction

- `framer-motion` for reveal and motion effects

### SEO and platform features

- Next.js Metadata API
- JSON-LD person schema
- `robots.txt` generation from `app/robots.ts`
- `sitemap.xml` generation from `app/sitemap.ts`

## Folder structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
  resume/route.ts
  robots.ts
  sitemap.ts

components/
  layout/
  sections/
  ui/

content/
  site.ts
  experience.ts
  projects.ts
  skills.ts

lib/
  links.ts
  metadata.ts

types/
  experience.ts
  project.ts
  site.ts
  skills.ts

public/
  images/
  resume/
```

## Key implementation decisions

### 1. Single-page portfolio, route-ready structure

The current product is a single-page portfolio with anchor navigation, but the architecture leaves room for future route expansion such as project detail pages or localized routes.

### 2. Typed content instead of a CMS

The content model is small, stable, and updated infrequently. Storing it in TypeScript keeps the project simpler than introducing a headless CMS while still giving structure and safety.

### 3. Static-first delivery

Because the content changes occasionally and there is no authenticated experience, static generation gives strong performance and low operational complexity.

### 4. Minimal client code

Only interaction that benefits the presentation, such as reveal animations, is pushed to the client. This helps keep the site lightweight.

## Important files

- `app/page.tsx`: assembles the homepage sections and injects JSON-LD
- `app/layout.tsx`: global shell, fonts, background, header, and footer
- `app/resume/route.ts`: stable redirect entrypoint for the hosted resume
- `lib/metadata.ts`: canonical metadata and Open Graph/Twitter settings
- `content/site.ts`: central site configuration and primary content source
- `portfolio-architecture-spec.md`: implementation architecture reference for the project

## Local development

### Prerequisites

- Node.js 22+
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000).

## Production commands

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

`npm run serve` is available as an alias for `next start`.

## How to update the portfolio

### Update personal and SEO content

Edit:

- `content/site.ts`

### Update work experience

Edit:

- `content/experience.ts`

### Update project cards

Edit:

- `content/projects.ts`

### Update skill groups

Edit:

- `content/skills.ts`

### Update static files

Replace assets in:

- `public/images/`
- `public/resume/`

## Extendability

The current structure is ready for future enhancements including:

- project detail pages using dynamic App Router routes
- Arabic localization and RTL support
- a backend-backed contact form
- richer OG image generation
- automated testing layers for UI and routing behavior

## Notes

- The live metadata is derived from `content/site.ts`, so site URL and SEO text should be updated there first.
- The `/resume` route redirects to the canonical PDF stored in `public/resume/`.
- `portfolio-architecture-spec.md` documents the intended architectural direction that this repository now follows.
