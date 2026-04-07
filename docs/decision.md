# Decision Log: Foundinity

This document records architectural and technical decisions made during project creation. Each entry follows the Context → Options Considered → Decision → Consequences format.

---

## ADR-001: Vite over Next.js

**Context:** We need a build tool and framework for a React-based SPA. The app is fully client-rendered with Convex handling all backend logic — there is no need for SSR or server components.

**Options Considered:**
1. **Next.js** — Full-featured React framework with SSR, API routes, and file-based routing
2. **Vite + React** — Lightweight build tool with fast HMR and minimal opinions
3. **Remix** — Full-stack React framework with nested routing and loaders

**Decision:** Vite + React

**Consequences:**
- (+) Faster dev server startup and HMR
- (+) Simpler mental model — no SSR/SSG complexity to manage
- (+) Convex handles all backend logic, so Next.js API routes are unnecessary
- (+) Smaller bundle and deployment footprint on Vercel
- (-) No SSR means weaker SEO — acceptable for an authenticated app
- (-) Must handle routing separately (solved by TanStack Router)

---

## ADR-002: Convex as Backend-as-a-Service

**Context:** The app needs a database, real-time data sync, server-side logic, and scheduled jobs. We want to minimize infrastructure management.

**Options Considered:**
1. **Convex** — Reactive BaaS with built-in DB, real-time subscriptions, server functions, and crons
2. **Supabase** — Postgres-based BaaS with real-time via WebSocket
3. **Firebase** — Google's BaaS with Firestore and Cloud Functions
4. **Custom backend** — Express/Hono + PostgreSQL

**Decision:** Convex

**Consequences:**
- (+) Zero infrastructure management — fully managed
- (+) Native real-time subscriptions with automatic cache invalidation
- (+) TypeScript-first with end-to-end type safety
- (+) Built-in cron jobs for match expiry
- (+) Deterministic server functions simplify testing
- (-) Vendor lock-in — data and logic tightly coupled to Convex
- (-) Smaller ecosystem and community compared to Firebase/Supabase
- (-) Query language is custom, not SQL

---

## ADR-003: Clerk over Convex Built-in Auth

**Context:** The app needs user authentication with email, Google, and GitHub sign-in. Convex offers a built-in auth solution, but we need flexibility and a polished UX.

**Options Considered:**
1. **Clerk** — Dedicated auth platform with pre-built UI components and OAuth support
2. **Convex Auth** — Built-in Convex authentication
3. **Auth0** — Enterprise auth platform
4. **Custom auth** — Build from scratch with JWT

**Decision:** Clerk

**Consequences:**
- (+) Pre-built sign-in/sign-up components save development time
- (+) Multiple OAuth providers out of the box
- (+) Webhook integration syncs users to Convex automatically
- (+) Handles session management, MFA, and security best practices
- (-) Additional third-party dependency and cost at scale
- (-) Requires webhook setup to sync user data to Convex
- (-) Convex Auth would be simpler to integrate natively

---

## ADR-004: TanStack Router over React Router

**Context:** With Vite (no framework routing), we need a client-side router. The app has nested layouts and type-safe route parameters.

**Options Considered:**
1. **TanStack Router** — Type-safe router with file-based route generation
2. **React Router v7** — Established React routing library
3. **Wouter** — Minimal router for simple apps

**Decision:** TanStack Router

**Consequences:**
- (+) Full TypeScript type safety for route params and search params
- (+) File-based route generation works well with Vite
- (+) Integrates with TanStack Query for data loading
- (+) Built-in support for route-level code splitting
- (-) Newer library with less community content and fewer tutorials
- (-) Learning curve for teams familiar with React Router
- (-) Generated route tree file adds build step

---

## ADR-005: Mobile-First Web over Native Apps

**Context:** The target audience uses phones primarily, but we need to ship quickly with a small team.

**Options Considered:**
1. **Mobile-first responsive web** — Single codebase, accessible on all devices
2. **React Native** — Cross-platform native apps
3. **Native iOS + Android** — Separate native apps
4. **PWA** — Web app with offline capabilities and install prompt

**Decision:** Mobile-first responsive web

**Consequences:**
- (+) Single codebase for all platforms
- (+) No app store approval process — faster iteration
- (+) Lower development and maintenance cost
- (+) Instant updates without user action
- (-) No push notifications without PWA (can add later)
- (-) Slightly less native feel on mobile
- (-) No offline support (acceptable — app requires network)

---

## ADR-006: Boring Avatars over Custom Upload

**Context:** Users need visual identities on the platform. Custom photo uploads add complexity (storage, moderation, privacy) that is unnecessary for MVP.

**Options Considered:**
1. **boring-avatars** — Deterministic SVG avatars from a seed string
2. **DiceBear** — Configurable avatar generation API
3. **Custom photo upload** — User uploads their own photo
4. **AI-generated avatars** — Generate avatars with AI

**Decision:** boring-avatars npm package

**Consequences:**
- (+) Zero storage costs — avatars are generated client-side from a seed
- (+) No moderation needed — all avatars are abstract/geometric
- (+) Privacy-friendly — no real photos
- (+) Tiny bundle size (~2KB)
- (+) Multiple visual variants for user choice
- (-) Less personal than real photos
- (-) Users cannot express individual style as much
- (-) May need to add photo upload later for engagement

---

## ADR-007: Cal.com Links over Video SDK

**Context:** The platform nudges matched users toward video calls. We need a way to facilitate scheduling without building video infrastructure.

**Options Considered:**
1. **Cal.com link** — External link to scheduling page
2. **Daily.co SDK** — Embedded video calling
3. **Whereby SDK** — Embedded video rooms
4. **Calendly link** — External scheduling link

**Decision:** Cal.com external link (no SDK integration)

**Consequences:**
- (+) Zero development effort — just a link
- (+) Cal.com is open source and free for basic usage
- (+) Users manage their own availability
- (+) No video infrastructure to maintain
- (-) Users leave the platform to schedule
- (-) No tracking of whether calls actually happen
- (-) Requires users to have a Cal.com account (or we create a shared booking page)

---

## ADR-008: Resend over SendGrid

**Context:** The app needs transactional emails for welcome messages, match notifications, expiry alerts, and new message alerts.

**Options Considered:**
1. **Resend** — Developer-focused email API with React Email support
2. **SendGrid** — Established email delivery platform
3. **AWS SES** — Low-cost email service
4. **Postmark** — Transactional email specialist

**Decision:** Resend

**Consequences:**
- (+) Simple API with excellent developer experience
- (+) React Email integration for building templates in JSX
- (+) Generous free tier (100 emails/day)
- (+) Fast setup — API key and one function call
- (-) Newer service with smaller track record
- (-) Free tier may be limiting at scale
- (-) Fewer advanced features than SendGrid (analytics, templates library)

---

## ADR-009: PostHog over Mixpanel

**Context:** We need product analytics to track user behavior, funnel completion, and feature adoption.

**Options Considered:**
1. **PostHog** — Open-source product analytics with generous free tier
2. **Mixpanel** — Established product analytics platform
3. **Amplitude** — Enterprise analytics platform
4. **Plausible** — Privacy-focused web analytics

**Decision:** PostHog

**Consequences:**
- (+) Generous free tier (1M events/month)
- (+) Open source — can self-host later if needed
- (+) Feature flags, session replay, and A/B testing included
- (+) Privacy-friendly with EU hosting option
- (-) Self-serve UI can be complex for non-technical users
- (-) Smaller ecosystem of integrations than Mixpanel
- (-) Session replay adds bundle size if enabled

---

## ADR-010: Static City List over Google Places API

**Context:** Users select their city during onboarding. We need location data without requiring precise geolocation.

**Options Considered:**
1. **Static city list (JSON)** — Curated list of major cities bundled with the app
2. **Google Places API** — Autocomplete with full global coverage
3. **OpenStreetMap / Nominatim** — Free geocoding API
4. **Manual text input** — Free-form city text field

**Decision:** Static city list JSON

**Consequences:**
- (+) Zero API costs
- (+) No external dependency or API key management
- (+) Fast — no network request for location selection
- (+) Consistent data format for matching
- (-) Limited to curated cities — may miss smaller towns
- (-) Must manually maintain and expand the list
- (-) No autocomplete beyond simple filtering
- (-) Can upgrade to Google Places API later if needed
