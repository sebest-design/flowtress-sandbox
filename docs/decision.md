# Decisions Log: Flowtress

---

## 1. Static/Hardcoded Approach (No CMS)

**Decision:** We have decided not to implement a CMS for Flowtress.
**Rationale:** To achieve the "modern and disruptive" vibe while maintaining high trust in regulated industries (FinTech, Healthcare), we require absolute control over the design, performance, and typography of every case study. A hardcoded, code-driven approach ensures sub-second load times and avoids the design constraints of a typical CMS.

---

## 2. Direct-to-Person Communication Hub (No In-App CRM)

**Decision:** We are using direct SMS and Email links for the contact hub rather than an in-app messaging system or contact database.
**Rationale:** The agency model for highly regulated industries relies on high-touch, personal relationships. Direct 1-to-1 communication via personal channels (SMS/Email) reduces friction and avoids the "impersonal" feel of automated sequences or chatbot "slop."

---

## 3. Outcome-First Showcase Structure

**Decision:** Every case study will lead with a bold "Outcome" metric as the hook.
**Rationale:** This signals immediate value to prospective clients (e.g., FinTech founders looking for ROI) before diving into the technical problem-solving. This "Result-First" approach is a key differentiator from competitors.

---

## 4. Design Philosophy: "No-Slop"

**Decision:** We are adopting a "No-Slop" philosophy as our core design and development principle.
**Rationale:** This ensures high-performance, high-quality code and design that signals technical competence to our targeted industries (FinTech, AI). We will incorporate the "stop-slop" reference into our documentation for future refinements.

---

## 5. Bun as Runtime & Package Manager (over Node.js + npm/pnpm)

**Decision:** We are using Bun (v1.3.12) as the JavaScript runtime and package manager.
**Rationale:** Bun provides a single-binary runtime with built-in TypeScript execution, a significantly faster package manager than npm/yarn/pnpm, and native bundler/test runner capabilities. For a static-first portfolio targeting sub-second load times, Bun's speed advantage in both development and CI pipelines directly supports our performance goals. Bun is npm-compatible, so no ecosystem lock-in.
**Source:** Context7 MCP — `/oven-sh/bun` documentation (benchmark score: 85.83).

---

## 6. Vite as Build Tool (over Webpack/Turbopack)

**Decision:** We are using Vite (v8.0.8) as the build tool and dev server.
**Rationale:** Vite's ESM-native dev server provides instant cold starts regardless of application size, and its Rollup-based production builds produce optimized, tree-shaken bundles. The ecosystem has first-class plugins for React (`@vitejs/plugin-react`) and Tailwind CSS v4 (`@tailwindcss/vite`). Webpack requires significantly more configuration for comparable performance, and Turbopack is still in early stages for production builds.
**Source:** Context7 MCP — `/websites/vite_dev` documentation (benchmark score: 86.09).

---

## 7. Tailwind CSS v4 (over CSS Modules / Styled Components)

**Decision:** We are using Tailwind CSS v4 (v4.2.2) with the dedicated Vite plugin.
**Rationale:** Tailwind v4 eliminates the separate config file (`tailwind.config.js`) in favor of CSS-native `@theme` directives, provides automatic content detection (no manual `content` array), and integrates as a first-class Vite plugin rather than a PostCSS plugin. For a design-heavy agency portfolio, utility-first CSS enables rapid iteration on premium UI (glassmorphism, bento grids) without the naming overhead of CSS Modules or the runtime cost of CSS-in-JS.
**Source:** Context7 MCP — `/tailwindlabs/tailwindcss.com` documentation (benchmark score: 81.45).

---

## 8. TanStack Suite (over individual routing/state/form/table libraries)

**Decision:** We are using the TanStack suite (@tanstack/react-router, react-query, react-table, react-form) as our headless UI infrastructure.
**Rationale:** The TanStack libraries share a consistent API philosophy (headless, type-safe, framework-agnostic core) and are designed to compose together. Choosing a unified suite over mixing React Router + SWR + react-hook-form + AG Grid reduces integration friction and ensures consistent TypeScript inference across the entire application. Key advantages:
- **react-router** (v1.168.10): Full type inference on route params, search params, and loader data — eliminates runtime type errors in navigation.
- **react-query** (v5.97.0): Server-state caching with stale-while-revalidate for the portfolio's hardcoded data and future API integrations.
- **react-table** (v8.21.3): Headless table logic enables custom-designed data displays that match our premium bento-grid aesthetic without fighting a component library's styles.
- **react-form** (v1.28.6): Type-safe form management with `strict: true` requirement aligning with our TypeScript Strict Mode policy.
**Source:** Context7 MCP — `/tanstack/router`, `/tanstack/query`, `/tanstack/table`, `/tanstack/form` documentation.
