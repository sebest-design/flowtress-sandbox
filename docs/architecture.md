# Architecture Document: Flowtress

---

## 1. System Overview

Flowtress is a high-performance web platform for a branding and design agency targeting highly regulated industries. It is built as a **statically-optimized, high-trust digital portfolio**.

### Tech Stack
- **Frontend:** React, Tailwind CSS, Framer Motion
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
