# Architecture Document: Foundinity

---

## 1. System Overview

Foundinity is a mobile-first responsive web application built as a single-page app (SPA). The front-end is served via Vercel, and the backend is fully managed by Convex (database, real-time subscriptions, and server functions). Authentication is handled by Clerk.

### Component Diagram

```
┌─────────────────────────────────────────────────────┐
│                     Client (Browser)                │
│                                                     │
│  ┌───────────┐  ┌──────────┐  ┌──────────────────┐  │
│  │ React +   │  │ TanStack │  │ TanStack Query   │  │
│  │ Tailwind  │  │ Router   │  │ (Convex adapter) │  │
│  │ + shadcn  │  │          │  │                  │  │
│  └─────┬─────┘  └────┬─────┘  └────────┬─────────┘  │
│        │              │                 │            │
│        └──────────────┼─────────────────┘            │
│                       │                              │
└───────────────────────┼──────────────────────────────┘
                        │ HTTPS / WebSocket
          ┌─────────────┼─────────────────┐
          │             │                 │
    ┌─────▼─────┐ ┌─────▼─────┐ ┌────────▼────────┐
    │   Clerk   │ │  Convex   │ │   Third-Party   │
    │  (Auth)   │ │ (Backend) │ │   Services      │
    │           │ │           │ │                  │
    │ - Sign up │ │ - DB      │ │ - Resend (email)│
    │ - Login   │ │ - Queries │ │ - PostHog       │
    │ - Session │ │ - Mutations│ │ - Cal.com (link)│
    │ - OAuth   │ │ - Actions │ │ - boring-avatars│
    └───────────┘ │ - Cron    │ └─────────────────┘
                  │ - Real-   │
                  │   time    │
                  └───────────┘
```

---

## 2. Data Models

### users

| Field | Type | Description |
|---|---|---|
| _id | Id<"users"> | Convex document ID |
| clerkId | string | Clerk user ID |
| email | string | User email |
| name | string | Display name |
| avatarSeed | string | Seed for boring-avatars |
| avatarVariant | string | boring-avatars variant |
| onboardingComplete | boolean | Whether onboarding is finished |
| createdAt | number | Timestamp |
| updatedAt | number | Timestamp |

### onboarding_responses

| Field | Type | Description |
|---|---|---|
| _id | Id<"onboarding_responses"> | Convex document ID |
| userId | Id<"users"> | Reference to user |
| step | number | Onboarding step (1–7) |
| data | object | Step-specific response data |
| createdAt | number | Timestamp |

### profiles

| Field | Type | Description |
|---|---|---|
| _id | Id<"profiles"> | Convex document ID |
| userId | Id<"users"> | Reference to user |
| introduction | string | Short intro |
| founderPitch | string? | Optional idea summary |
| background | string | Experience and background |
| additionalNotes | string? | Open text |
| location | string | City from static list |
| skills | string[] | Selected skills |
| commitmentLevel | string | part-time / full-time / flexible |
| workStyle | string | remote / hybrid / in-person |
| values | string[] | Selected values |
| personality | object | Trait scales |
| updatedAt | number | Timestamp |

### matches

| Field | Type | Description |
|---|---|---|
| _id | Id<"matches"> | Convex document ID |
| userA | Id<"users"> | First user |
| userB | Id<"users"> | Second user |
| scoreBreakdown | object | Per-dimension scores |
| totalScore | number | Weighted total |
| statusA | string | pending / accepted / passed |
| statusB | string | pending / accepted / passed |
| connected | boolean | Both accepted |
| expiresAt | number | Expiry timestamp |
| createdAt | number | Timestamp |

### messages

| Field | Type | Description |
|---|---|---|
| _id | Id<"messages"> | Convex document ID |
| matchId | Id<"matches"> | Reference to match |
| senderId | Id<"users"> | Message author |
| body | string | Message text |
| createdAt | number | Timestamp |

---

## 3. File / Folder Structure

```
foundinity/
├── docs/
│   ├── PRD.md
│   ├── architecture.md
│   ├── decision.md
│   └── features.json
├── convex/
│   ├── schema.ts            # Convex schema definitions
│   ├── auth.ts              # Clerk webhook & user sync
│   ├── users.ts             # User queries/mutations
│   ├── onboarding.ts        # Onboarding mutations
│   ├── profiles.ts          # Profile queries/mutations
│   ├── matching.ts          # Matching algorithm & scoring
│   ├── matches.ts           # Match queries/mutations
│   ├── messages.ts          # Message queries/mutations
│   ├── crons.ts             # Scheduled jobs (match expiry)
│   └── _generated/          # Convex generated files
├── src/
│   ├── main.tsx             # App entry point
│   ├── routeTree.gen.ts     # TanStack Router generated
│   ├── routes/
│   │   ├── __root.tsx       # Root layout
│   │   ├── index.tsx        # Landing page
│   │   ├── sign-in.tsx      # Clerk sign-in
│   │   ├── sign-up.tsx      # Clerk sign-up
│   │   ├── onboarding/
│   │   │   ├── index.tsx    # Onboarding entry
│   │   │   └── $step.tsx    # Dynamic step route
│   │   ├── dashboard.tsx    # Main dashboard
│   │   ├── matches/
│   │   │   ├── index.tsx    # Match list
│   │   │   └── $matchId.tsx # Match detail + messaging
│   │   └── profile/
│   │       ├── index.tsx    # View profile
│   │       └── edit.tsx     # Edit profile
│   ├── features/
│   │   ├── auth/            # Auth components & hooks
│   │   ├── onboarding/      # Step components & forms
│   │   ├── profile/         # Profile components
│   │   ├── matching/        # Match display components
│   │   ├── messaging/       # Chat UI components
│   │   └── analytics/       # PostHog wrapper
│   ├── components/
│   │   └── ui/              # shadcn/ui components
│   ├── lib/
│   │   ├── convex.ts        # Convex client setup
│   │   ├── clerk.ts         # Clerk provider config
│   │   ├── cities.json      # Static city list
│   │   └── utils.ts         # Shared utilities
│   └── styles/
│       └── globals.css      # Tailwind base styles
├── public/
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
├── bun.lockb
└── convex.json
```

---

## 4. Third-Party Integrations

| Service | Purpose | Integration Point |
|---|---|---|
| **Clerk** | Authentication (email, Google, GitHub OAuth) | ClerkProvider wraps app; webhook syncs users to Convex |
| **Convex** | Database, real-time subscriptions, server functions, cron jobs | Convex client in React; schema + functions in `convex/` |
| **boring-avatars** | Deterministic avatar generation | React component in onboarding & profile |
| **Cal.com** | Video call scheduling | External link in match conversation view |
| **PostHog** | Product analytics and event tracking | PostHog JS SDK initialized in app entry |
| **Resend** | Transactional email (welcome, match, expiry, message) | Called from Convex actions via HTTP |

---

## 5. Deployment

### Front-End: Vercel

- Vite SPA build deployed to Vercel
- Environment variables: `VITE_CLERK_PUBLISHABLE_KEY`, `VITE_CONVEX_URL`, `VITE_POSTHOG_KEY`
- Automatic deployments from `main` branch

### Back-End: Convex

- `npx convex deploy` pushes functions and schema
- Environment variables set in Convex dashboard: `CLERK_WEBHOOK_SECRET`, `RESEND_API_KEY`
- Convex handles scaling, real-time sync, and cron execution

### CI/CD

- Push to `main` triggers Vercel build
- Convex deployment via `npx convex deploy` (manual or CI script)
