# Architecture Document: Flowtress

---

## 1. System Overview

Flowtress is a high-performance web platform for a branding and design agency targeting highly regulated industries. It is built as a **statically-optimized, high-trust digital portfolio**.

### Tech Stack

#### Runtime & Build Pipeline
| Layer | Tool | Version | Role |
|-------|------|---------|------|
| Runtime | Bun | 1.3.12 | JS/TS runtime, package manager, test runner |
| Build | Vite | 8.0.8 | ESM-native dev server + Rollup production builds |
| Type System | TypeScript | 6.0.2 | Strict-mode type checking (`noEmit` — Vite handles compilation) |
| React Plugin | @vitejs/plugin-react | 6.0.1 | Babel-based JSX transform + Fast Refresh HMR |

**Pipeline:** `bun` (runtime) → `vite` (dev server / bundler) → `tsc` (type-check only, `--noEmit`)

#### UI & Styling
| Tool | Version | Role |
|------|---------|------|
| React | 19.2.5 | Component library (automatic JSX transform) |
| React DOM | 19.2.5 | DOM renderer |
| Tailwind CSS | 4.2.2 | Utility-first CSS via `@tailwindcss/vite` plugin (v4 — no config file, `@import "tailwindcss"` entry) |
| Framer Motion | TBD | Animation library (planned) |

#### TanStack Suite (Headless UI Infrastructure)
| Library | Version | Purpose |
|---------|---------|---------|
| @tanstack/react-router | 1.168.10 | Type-safe routing with full TypeScript inference on params, search, and loaders |
| @tanstack/react-query | 5.97.0 | Async server-state management with caching, background refetching, stale-while-revalidate |
| @tanstack/react-table | 8.21.3 | Headless table logic (sorting, filtering, pagination) — no UI bundled |
| @tanstack/react-form | 1.28.6 | Type-safe form state management with field-level validation |

#### Infrastructure
- **Hosting:** Vercel (recommended for speed and reliability)
- **Analytics:** PostHog (event tracking)
- **UI Assets:** boring-avatars (placeholders)

---

## 2. Core Components

### `Outcome-Driven Portfolio`
The core feature of the site. It uses hardcoded data objects representing case studies to ensure maximum performance and precise design control.
- **Structure:** `Outcome (Hook) -> Problem -> Solution`
- **Presentation:** Bento grids and modern transitions to convey a "disruptive" but organized vibe.

### `Direct Contact Hub`
A high-conversion landing area for prospective clients.
- **Methods:** Direct SMS (`tel:`) and Email (`mailto:`) links to facilitate personal, manual outreach.
- **Tracking:** Every contact action is tracked via PostHog to measure marketing effectiveness.

---

## 3. Data Strategy (No CMS)

To maintain extreme performance and design fidelity (crucial for FinTech/HealthCare clients), Flowtress avoids a traditional CMS.
- **Projects:** Hardcoded as a typed array of objects in the React application.
- **Lead Capture:** Directed toward external personal communication channels (SMS/Email) rather than an in-app database.

---

## 4. Design & Trust Principles

### Bento Grids
Using structured, stable grid layouts to provide a "foundation of trust" while hosting disruptive, modern branding content.

### Glassmorphism & Motion
Premium UI surfaces and intentional, performance-driven animations (e.g., counting ROI metrics) to signal high-end technical capability.

---

## 5. Security & Privacy

- **Static Security:** No user databases or dynamic server-side execution for the public site, minimizing the attack surface.
- **Regulated Compliance:** Design choices (e.g., high-legibility typography) are made with an eye toward the strict standards of FinTech and Healthcare industries.
