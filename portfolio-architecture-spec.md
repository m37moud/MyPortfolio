# Portfolio Architecture Specification

## 1. Purpose

This document translates the PRD in `mahmoud_aly_portfolio_prd_v2_portfolio_ready.md` into an implementation-ready architecture for Mahmoud Aly's portfolio website.

It defines:

- the target technical architecture
- the rendering and routing strategy
- the file and module structure
- the content model
- the SEO, accessibility, and performance approach
- the contact and resume delivery strategy
- the testing and deployment plan
- the migration path from the current static implementation

---

## 2. Architecture Decision

### 2.1 Chosen Target

The portfolio should be implemented as a `Next.js` application using:

- `Next.js` with App Router
- `TypeScript`
- `Tailwind CSS`
- `Framer Motion` for selective animation
- `Vercel` for deployment

### 2.2 Why This Architecture

This choice matches the PRD recommendation while solving needs the current static generator handles only partially:

- strong SEO metadata management
- easy sitemap and robots support
- built-in asset optimization
- clean handling of future project detail pages
- simple deployment on Vercel
- a better long-term structure for extension without introducing a CMS

### 2.3 Current State

Current repo state:

- fully source-driven `Next.js` app
- App Router-based single-page portfolio
- content managed through typed modules in `content/`
- reusable section components and typed domain models
- canonical static assets served from `public/`

---

## 3. System Scope

### 3.1 Product Shape

MVP is a single-page portfolio with anchored sections:

- Hero
- About
- Experience
- Selected Projects
- Skills
- Resume
- Contact

### 3.2 Future Scope

Architecture must allow later addition of:

- project detail pages
- Arabic localized content with RTL support
- optional contact form backend
- blog or notes section

---

## 4. Rendering Strategy

### 4.1 Primary Rendering Mode

Use static generation for the MVP.

Reason:

- content changes infrequently
- page speed is a priority
- no authenticated user state exists
- no CMS is required

### 4.2 Next.js Rendering Plan

- `/` should be statically rendered at build time
- metadata should be generated through Next.js metadata APIs
- `sitemap.ts` and `robots.ts` should be generated from app code
- OG image can remain static initially, with optional later dynamic generation

### 4.3 Client-Side JavaScript Policy

Default to server-rendered markup and minimal client code.

Client components should be used only for:

- motion on scroll
- section reveal effects
- any future interactive contact form state

Avoid unnecessary client-side state or complex hydration.

---

## 5. Routing Strategy

### 5.1 MVP Routes

- `/` main portfolio page
- `/resume` optional redirect route if a canonical resume URL is desired

### 5.2 Future Routes

- `/projects/[slug]` for project detail pages
- `/ar` for Arabic homepage
- `/ar/projects/[slug]` for localized case studies

### 5.3 URL Rules

- section navigation uses anchor links on `/`
- project slugs must be stable, lowercase, and hyphenated
- social and resume links must be absolute or root-relative, not fragile relative paths

---

## 6. Information Architecture

### 6.1 Page Composition

The homepage should be assembled from independent section components in this order:

1. `Header`
2. `HeroSection`
3. `AboutSection`
4. `ExperienceSection`
5. `ProjectsSection`
6. `SkillsSection`
7. `ResumeSection`
8. `ContactSection`
9. `Footer`

### 6.2 Section Rules

- each section owns only presentation logic
- content is injected through typed props
- no section should hardcode personal data internally
- section IDs must match navigation anchors

---

## 7. Application Structure

Recommended structure:

```text
app/
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
  globals.css

components/
  layout/
    header.tsx
    footer.tsx
    section-heading.tsx
  sections/
    hero-section.tsx
    about-section.tsx
    experience-section.tsx
    projects-section.tsx
    skills-section.tsx
    resume-section.tsx
    contact-section.tsx
  ui/
    button.tsx
    container.tsx
    badge.tsx
    social-link.tsx

content/
  site.ts
  experience.ts
  projects.ts
  skills.ts

lib/
  metadata.ts
  seo.ts
  links.ts
  utils.ts

types/
  site.ts
  experience.ts
  project.ts
  skills.ts

public/
  resume/
    Mahmoud_Aly_Android_Developer.pdf
  images/
    og-image.svg
    favicon.svg

tests/
  e2e/
  unit/
```

### 7.1 Boundary Rules

- `app/` composes routes and metadata
- `components/` contains presentational and interaction units
- `content/` is the single source of truth for editable portfolio data
- `types/` defines domain contracts
- `lib/` contains pure helpers only
- `public/` contains directly served assets

---

## 8. Content Architecture

### 8.1 Source of Truth

The portfolio should remain code-managed, not CMS-managed, for the MVP.

Editable content lives in TypeScript modules:

- `content/site.ts`
- `content/experience.ts`
- `content/projects.ts`
- `content/skills.ts`

### 8.2 Content Modeling Rules

- every content file exports typed data only
- no rendering logic inside content modules
- links should be validated centrally
- project records must include stable `slug`
- resume file path must be configured in one place only

### 8.3 Domain Models

Minimum required types:

- `NavigationItem`
- `HeroAction`
- `SocialLink`
- `AboutHighlight`
- `ExperienceEntry`
- `ProjectLink`
- `Project`
- `SkillGroup`
- `SeoMetadata`
- `ContactProfile`

### 8.4 Project Model

Each project should support:

- `slug`
- `name`
- `tagline`
- `summary`
- `role`
- `scope`
- `technologies`
- `highlights`
- `links`
- `featured`
- `sortOrder`
- optional `coverImage`
- optional `caseStudyEnabled`

This keeps the MVP simple while enabling detail pages later.

---

## 9. Component Architecture

### 9.1 Component Types

Use three layers:

1. Page composition components
2. Section components
3. Reusable UI primitives

### 9.2 Component Guidelines

- prefer stateless components
- keep section animation wrappers separate from content structure where practical
- do not put data fetching in leaf UI components
- use semantic HTML first, styling second

### 9.3 Client Components

Client components should be limited to:

- scroll reveal orchestration
- motion timing
- any future form submission state

Everything else should stay server-side.

---

## 10. Styling Architecture

### 10.1 Styling System

Use `Tailwind CSS` with a small set of design tokens mapped in `tailwind.config`.

### 10.2 Token Categories

Define tokens for:

- colors
- typography
- spacing
- radius
- shadows
- motion durations
- z-index layers

### 10.3 Styling Rules

- use CSS variables for brand colors and theme primitives
- avoid one-off hardcoded spacing and colors inside JSX
- preserve the PRD visual direction: dark, technical, premium, minimal noise
- use Framer Motion only where it materially improves perception

### 10.4 Font Strategy

Recommended pairing:

- headings: `Space Grotesk`
- body: `Inter`

Fonts should be loaded using Next.js font tooling for better performance.

---

## 11. SEO Architecture

### 11.1 Metadata Ownership

Global SEO defaults should be defined in `lib/metadata.ts` and applied in `app/layout.tsx`.

### 11.2 MVP SEO Requirements

- page title
- meta description
- canonical URL
- Open Graph title and description
- Open Graph image
- Twitter card metadata
- semantic heading hierarchy
- generated `sitemap.xml`
- generated `robots.txt`

### 11.3 Structured Data

Add JSON-LD for:

- `Person`
- optionally `WebSite`

This helps search visibility without major complexity.

---

## 12. Accessibility Architecture

### 12.1 Baseline Requirements

- semantic sections and landmarks
- one `h1` on the page
- keyboard-accessible navigation
- visible focus states
- sufficient contrast
- descriptive link labels
- alt text for meaningful images

### 12.2 Motion Safety

- respect `prefers-reduced-motion`
- reveal animations must degrade gracefully
- no essential information should depend on animation timing

---

## 13. Performance Architecture

### 13.1 Performance Goals

- fast first contentful paint on mobile
- minimal JavaScript payload
- strong Lighthouse scores for Performance, SEO, and Accessibility

### 13.2 Implementation Rules

- prefer server components by default
- use optimized image assets
- avoid large animation bundles
- avoid runtime-heavy component libraries
- lazy-load only when it reduces meaningful cost

### 13.3 Asset Rules

- move resume and static brand assets into `public/`
- export OG image in web-friendly format
- keep screenshots out of production rendering paths

---

## 14. Contact and Resume Strategy

### 14.1 MVP Contact Decision

Use direct contact methods only for the MVP:

- `mailto:` email link
- LinkedIn link
- GitHub link

Reason:

- lowest maintenance path
- no spam handling
- no backend dependency
- matches PRD launch-speed guidance

### 14.2 Future Contact Form

If a form is later added, preferred order is:

1. Resend via Next.js route handler
2. Formspree
3. EmailJS only if required by deployment constraints

### 14.3 Resume Delivery

- store the PDF in `public/resume/`
- expose a stable download URL
- use a shared constant for the resume path

---

## 15. Deployment Architecture

### 15.1 Hosting

Deploy on `Vercel`.

### 15.2 Environment Model

MVP requires no runtime secrets if using direct contact links only.

If a form is added later:

- add secret keys through Vercel environment variables
- keep route handlers server-only

### 15.3 Domain Strategy

- support Vercel preview deployments for review
- connect custom domain later when brand is finalized
- define canonical base URL in one config location

---

## 16. Testing Strategy

### 16.1 Automated Testing

Minimum test layers:

- unit tests for helpers and data guards
- end-to-end tests for primary user flows

### 16.2 MVP E2E Coverage

Test these flows:

- homepage renders key identity content
- anchor navigation works
- resume download link resolves
- project links are present and valid in markup
- contact links render correctly
- mobile navigation layout does not break

### 16.3 Manual QA

Before launch:

- responsive review on desktop, tablet, and mobile
- keyboard navigation review
- reduced-motion review
- Lighthouse run
- social preview verification

---

## 17. Analytics and Observability

### 17.1 MVP Decision

Analytics are optional for the MVP.

If enabled, use a lightweight privacy-friendly option such as:

- Vercel Analytics
- Plausible

Avoid heavy trackers for the first version.

### 17.2 Error Monitoring

Not required for MVP unless form submission is introduced.

If backend behavior is later added, Sentry is a suitable follow-up.

---

## 18. Security and Content Safety

### 18.1 Security Basics

- validate all external links
- use `rel="noreferrer noopener"` on external targets
- avoid injecting raw HTML from content modules
- keep any future API routes rate-limited if form submission is introduced

### 18.2 Privacy

- do not expose personal data beyond intended contact channels
- avoid storing visitor data unless analytics is intentionally enabled

---

## 19. Migration Outcome

The migration is complete when the repo keeps only:

- `content/` as the canonical content source
- `public/` as the canonical static asset location
- `Next.js` route composition, Tailwind styling, lightweight client animation, and metadata-driven SEO

The legacy static pipeline should not remain alongside the App Router implementation, because it would create duplicate sources of truth and increase drift risk.

---

## 20. Open Decisions

These should be explicitly confirmed before implementation if priorities change:

- whether project detail pages are MVP or post-MVP
- whether Arabic support is planned soon enough to shape the first data model
- whether analytics should be enabled at launch
- whether the resume should open in-browser, download directly, or support both

Current default assumption:

- no project detail pages in MVP
- English only
- no analytics required
- resume supports direct download from the homepage

---

## 21. Final Recommendation

Build the portfolio as a statically generated `Next.js` App Router site with TypeScript content modules, Tailwind styling, lightweight motion, and Vercel deployment.

This gives Mahmoud a strong recruiter-facing MVP now while creating a clean path for future case studies, localization, and optional contact form workflows without re-architecting the project later.
