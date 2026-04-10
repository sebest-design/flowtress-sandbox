# Product Requirements Document (PRD): Flowtress

**Disruptive Branding & Web Design for Regulated Industries**

---

## 1. Overview

Flowtress is a high-end branding and web design agency platform that specializes in conveying value propositions for companies operating in **highly regulated industries**.

### Problems Addressed

- **The "Stale" Factor:** Companies in FinTech, Healthcare, and M&A often have outdated, "safe" designs that fail to excite or communicate modern capability.
- **Trust Deficit:** A lack of modern trust signals (performance metrics, clear outcomes, high-quality UI) makes them look untrustworthy to modern stakeholders.
- **Complexity Obfuscation:** Value propositions are often buried in jargon instead of being visualized clearly.

### Solution

Flowtress provides a **modern and disruptive** digital presence that uses:

- **Outcome-Driven Storytelling:** Lead with the win. Show exactly what was achieved before explaining how.
- **High-Performance UI:** Using cutting-edge tech (React, Framer Motion) to signal competence and modernity.
- **Direct Communication:** Reducing friction between the agency and prospective high-ticket clients.

---

## 2. Target Industries

Flowtress specifically targets:

- **FinTech & Healthcare:** Where trust and modernity are paramount.
- **M&A & Accounting Services:** Where professional clarity meets high-stakes outcomes.
- **AI Startups:** Where looking "ahead of the curve" is a requirement.

---

## 3. Functional Requirements

### Outcome-Driven Portfolio (Public)

- **FR-01: Outcome Hooks:** Every case study MUST lead with a bold outcome metric (e.g., "150% Increase in User Trust").
- **FR-02: Visual Storytelling:** Case studies follow a strict "Outcome -> Problem -> Solution" (Achieved X using Z leading to Y) visual flow.
- **FR-03: Hardcoded Performance:** Projects are hardcoded into the codebase to ensure pixel-perfect design control and sub-second load times.

### Direct Contact Hub

- **FR-04: Multi-Channel Outreach:** A dedicated contact page providing direct means for prospects to reach out via SMS and Email.
- **FR-05: Manual High-Touch:** The system facilitates direct 1-to-1 communication, avoiding automated chatbot "slop."

---

## 4. Non-Functional Requirements

- **NFR-01: Modern Aesthetic:** Dark mode by default, glassmorphism, and intentional motion to signal a "disruptive" identity.
- **NFR-02: Performance:** Sub-1s page loads to demonstrate technical excellence to AI and FinTech clients.
- **NFR-03: Trust Signals:** High-density, well-organized bento grids to imply stability despite the disruptive vibe.

---

## 5. Scope Boundaries

### In Scope (MVP)

- Outcome-driven project showcase (Public).
- Direct contact page (SMS/Email details).
- Modern/Disruptive UI framework (Tailwind + Framer Motion).
- Basic analytics (PostHog).

### Out of Scope (MVP)

- **Client Portals:** No private login areas for clients.
- **CMS:** No administrative interface for adding projects; all content is code-driven.
- **Automated CRM:** No complex lead-scoring or automated sequences; focus on manual, high-quality interaction.

---

## 6. Technical Stack (Installed)

The following stack has been installed, configured, and verified:

| Category | Package | Version | Purpose |
|----------|---------|---------|---------|
| Runtime | Bun | 1.3.12 | JS/TS runtime + package manager |
| Build | Vite | 8.0.8 | ESM dev server + Rollup production builds |
| Types | TypeScript | 6.0.2 | Strict-mode type system (`noEmit`) |
| UI | React | 19.2.5 | Component library (automatic JSX transform) |
| UI | React DOM | 19.2.5 | DOM rendering |
| Styling | Tailwind CSS | 4.2.2 | Utility-first CSS via Vite plugin |
| Routing | @tanstack/react-router | 1.168.10 | Type-safe routing with param inference |
| State | @tanstack/react-query | 5.97.0 | Async state with caching + stale-while-revalidate |
| Tables | @tanstack/react-table | 8.21.3 | Headless table logic (sorting, filtering, pagination) |
| Forms | @tanstack/react-form | 1.28.6 | Type-safe form state + field validation |

### Build Pipeline
`bun` → `vite dev` (development) / `vite build` (production) → `tsc --noEmit` (type verification)

### Key Capabilities
- **Sub-second builds**: Vite + esbuild transpilation, Bun package resolution
- **Zero-config Tailwind**: v4 Vite plugin with automatic content detection and CSS-native `@theme` tokens
- **End-to-end type safety**: Strict TypeScript across routing, data fetching, tables, and forms
- **Headless UI**: TanStack suite provides logic without opinionated styles — full design control for the premium Flowtress aesthetic

---

## 7. Guiding Philosophies

- **No-Slop Design:** Adhering to high-quality, high-standards code and design principles (Referencing the "stop-slop" philosophy for future documentation refinements).
- **Clarity Over Jargon:** Every piece of copy must serve the "Problem -> Solution -> Outcome" narrative.
