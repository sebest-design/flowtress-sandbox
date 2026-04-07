# Product Requirements Document (PRD): Foundinity

**Cofounder Matchmaking Platform**

---

## 1. Overview

Foundinity is a cofounder matchmaking platform designed to help entrepreneurs form **high-alignment founding teams**.

### Problems Addressed

- Existing cofounder platforms rely on shallow profiles and skill-only matching
- Users struggle to assess compatibility around commitment, values, and ways of working
- Matches often stall in passive text conversations without leading to real collaboration

### Solution

Foundinity uses an **alignment-first matchmaking approach**, matching users based on:

- Skills and expertise
- Commitment and vision
- Working styles
- Values
- Personality

To encourage real interaction and momentum:

- Messaging is limited
- Matches expire after a fixed time window
- Users are nudged toward video calls

The platform prioritizes **clarity, action, and real connection** over browsing and chatting.

---

## 2. Target Users

### Primary User: Entrepreneur / Aspiring Cofounder

Foundinity supports:

- First-time founders
- Technical and non-technical professionals
- Students and recent graduates
- Experienced entrepreneurs

User differentiation happens through onboarding inputs, not predefined personas.

### Core User Need

> Find a cofounder who aligns with how I work, what I value, and what I want to build — not just what skills I have.

---

## 3. Functional Requirements

### Registration & Authentication

- FR-01: Users can sign up and log in via Clerk (email, Google, GitHub OAuth)
- FR-02: Users must be 18+ (date of birth validation during onboarding)
- FR-03: Users can log out and delete their account

### Onboarding Flow

- FR-04: Onboarding is structured, linear, and required before matching
- FR-05: Step 1 — Age & Location: date of birth (18+ validation), city-level location from static city list
- FR-06: Step 2 — Skills & Expertise: select skills from predefined categories, indicate primary strengths
- FR-07: Step 3 — Commitment & Vision: commitment level (part-time, full-time, flexible), startup intent and ambition
- FR-08: Step 4 — Working Styles: remote/hybrid/in-person preference, collaboration and communication style
- FR-09: Step 5 — Values: select core personal and work values
- FR-10: Step 6 — Personality: structured personality traits (scales)
- FR-11: Step 7 — Avatar Creation: avatar selection using boring-avatars library

### Profile

- FR-12: After onboarding, users can enrich their profile with free-form content
- FR-13: Profile fields: short introduction, founder pitch/idea summary (optional), background and experience, additional notes
- FR-14: Users can edit their profile and onboarding responses at any time

### Matching

- FR-15: System generates matches using weighted scoring across all onboarding dimensions
- FR-16: Matches are presented one at a time with alignment summary
- FR-17: Users can accept or pass on a match
- FR-18: Mutual acceptance creates a connection

### Match Expiry

- FR-19: Matches expire after a fixed time window (e.g., 7 days) if not acted upon
- FR-20: Expired matches are removed and users are notified

### Messaging

- FR-21: Connected users can exchange a limited number of messages
- FR-22: Message limit encourages users to move to video calls
- FR-23: Users receive notifications for new messages

### Video Call Nudge

- FR-24: After messaging begins, users are nudged to schedule a video call via Cal.com link
- FR-25: Cal.com link is displayed within the match conversation view

### Email Notifications

- FR-26: Transactional emails sent via Resend (welcome, new match, match expiry, new message)
- FR-27: Users can manage email notification preferences

### Analytics

- FR-28: PostHog integration tracks key user events (signup, onboarding completion, match actions, messages sent)
- FR-29: Analytics dashboard accessible to admins

---

## 4. Non-Functional Requirements

- **NFR-01: Performance** — Pages load in under 2 seconds on 3G connections; real-time updates via Convex subscriptions
- **NFR-02: Mobile-first** — All screens designed mobile-first with responsive breakpoints for tablet and desktop
- **NFR-03: Accessibility** — WCAG 2.1 AA compliance; keyboard navigation; screen reader support
- **NFR-04: Security** — Authentication via Clerk; all data transmitted over HTTPS; Convex handles server-side authorization
- **NFR-05: Scalability** — Convex handles scaling automatically; no self-managed infrastructure
- **NFR-06: Reliability** — 99.9% uptime target leveraging Vercel and Convex managed infrastructure
- **NFR-07: Privacy** — User data stored only in Convex; no third-party data sharing beyond stated integrations

---

## 5. Scope Boundaries

### In Scope (MVP)

- User registration and Clerk authentication
- Full onboarding flow (7 steps)
- Profile creation and editing
- Avatar generation via boring-avatars
- Weighted matching algorithm
- Match display, accept/pass, and expiry
- Limited messaging between matched users
- Cal.com video call nudge (link only, no SDK)
- Email notifications via Resend
- Analytics via PostHog

### Out of Scope (MVP)

- Native mobile apps (iOS/Android)
- In-app video calling
- AI-powered matching (ML models)
- Payment or subscription features
- Admin dashboard UI
- Social media profile imports
- Team matching (3+ cofounders)
- Startup idea marketplace / bulletin board
- Chat features beyond basic messaging (reactions, threads, file sharing)
- Google Places API for location (using static city list instead)

---

## 6. Success Metrics

| Metric | Target |
|---|---|
| Onboarding completion rate | > 70% of signups |
| Match acceptance rate | > 30% of presented matches |
| Message-to-call conversion | > 15% of messaging connections schedule a call |
| Weekly active users (WAU) | Tracked via PostHog |
| User retention (30-day) | > 40% |
| Average onboarding time | < 10 minutes |
| Match quality rating | User satisfaction survey post-match (future) |
