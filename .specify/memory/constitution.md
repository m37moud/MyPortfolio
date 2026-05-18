<!--
Sync Impact Report
- Version change: template -> 1.0.0
- Modified principles:
  - Template Principle 1 -> I. Recruiter-First Clarity
  - Template Principle 2 -> II. Proof Over Promotion
  - Template Principle 3 -> III. Engineering-Grade UX
  - Template Principle 4 -> IV. Frictionless Conversion Paths
  - Template Principle 5 -> V. Structured MVP Scope
- Added sections:
  - Design System Constraints
  - Delivery Workflow & Quality Gates
- Removed sections:
  - None
- Templates requiring updates:
  - ✅ updated /Users/m37moud/StudioProjects/WebApp/MyPortofolio/.specify/templates/plan-template.md
  - ✅ updated /Users/m37moud/StudioProjects/WebApp/MyPortofolio/.specify/templates/spec-template.md
  - ✅ updated /Users/m37moud/StudioProjects/WebApp/MyPortofolio/.specify/templates/tasks-template.md
  - ✅ reviewed /Users/m37moud/StudioProjects/WebApp/MyPortofolio/.specify/extensions/git/commands/speckit.git.commit.md
  - ✅ reviewed /Users/m37moud/StudioProjects/WebApp/MyPortofolio/.specify/extensions/git/commands/speckit.git.feature.md
  - ✅ reviewed /Users/m37moud/StudioProjects/WebApp/MyPortofolio/.specify/extensions/git/commands/speckit.git.initialize.md
  - ✅ reviewed /Users/m37moud/StudioProjects/WebApp/MyPortofolio/.specify/extensions/git/commands/speckit.git.remote.md
  - ✅ reviewed /Users/m37moud/StudioProjects/WebApp/MyPortofolio/.specify/extensions/git/commands/speckit.git.validate.md
- Follow-up TODOs:
  - None
-->
# Mahmoud Aly Portfolio Constitution

## Core Principles

### I. Recruiter-First Clarity
Every portfolio increment MUST help a recruiter or hiring manager identify
Mahmoud Aly's role, years of experience, primary stack, and next action within
the first screen or first minute of scanning. Hero content, section ordering,
and CTA placement MUST optimize for fast comprehension before depth.
Rationale: the site succeeds only if time-constrained reviewers understand the
profile immediately.

### II. Proof Over Promotion
All public claims MUST map to real experience, shipped work, or explicitly
labeled future scope. Titles, project summaries, technology lists, and outcome
statements MUST stay grounded in the PRD, resume, or verified portfolio source
content; inflated seniority, fabricated metrics, and generic filler are
forbidden. Rationale: credibility is the product, and trust is easier to lose
than regain.

### III. Engineering-Grade UX
The site MUST deliver a polished engineering portfolio experience across mobile
and desktop with semantic structure, accessible interactions, readable contrast,
and responsive layouts. Motion MUST remain subtle and purposeful, and each
change MUST preserve maintainability through clean structure and low-complexity
implementation choices. Rationale: the portfolio is itself evidence of Mahmoud's
technical taste and execution quality.

### IV. Frictionless Conversion Paths
Resume download, direct contact, LinkedIn, and GitHub pathways MUST remain easy
to discover and use from anywhere they are contextually relevant. Conversion
flows MUST prefer low-maintenance solutions, and any added interaction such as a
contact form MUST justify its maintenance cost over direct communication.
Rationale: the portfolio exists to turn attention into conversations and
opportunities.

### V. Structured MVP Scope
The MVP MUST preserve the single-page structure and the required sections
defined in the PRD: Hero, About, Experience, Selected Projects, Skills, Resume,
and Contact. New sections or interactions MAY be added only when they reinforce
recruiter comprehension, proof depth, or conversion without delaying launch.
Rationale: disciplined scope protects momentum and prevents the portfolio from
turning into an unfocused playground.

## Design System Constraints

The portfolio MUST remain English-first for primary content and maintain a
professional, technical, modern, and trustworthy tone. Visual direction MUST
stay aligned with the PRD: dark-mode-first presentation, deep navy or midnight
blue foundations, strong hierarchy, clean card-based composition, and minimal
decorative noise. Typography, iconography, and imagery MUST support clarity
before novelty; any stylistic experimentation MUST preserve scanability,
credibility, and small-screen readability.

## Delivery Workflow & Quality Gates

Every feature spec and implementation plan MUST include an explicit constitution
check against recruiter clarity, proof-backed content, engineering-grade UX,
conversion visibility, and MVP scope discipline. Before merge or publish, work
MUST verify:

- content accuracy against approved source material
- responsive behavior on mobile and desktop breakpoints
- accessible navigation, readable contrast, and meaningful semantics
- intact resume, email, LinkedIn, and GitHub actions
- no unnecessary dependencies or complexity without written justification

When tradeoffs are required, simpler implementation with clearer content wins
unless a more complex alternative measurably improves credibility or conversion.

## Governance

This constitution overrides conflicting local conventions for product direction,
content quality, and delivery standards in this repository. Amendments MUST be
documented in this file, include a concise rationale, and update any affected
templates before implementation work continues. Versioning follows semantic
rules: MAJOR for incompatible governance changes or principle removals, MINOR
for new principles or materially expanded guidance, and PATCH for clarifications
that do not change expected behavior. Compliance review is mandatory during spec
creation, implementation planning, and final QA before publish or handoff.

**Version**: 1.0.0 | **Ratified**: 2026-05-18 | **Last Amended**: 2026-05-18
