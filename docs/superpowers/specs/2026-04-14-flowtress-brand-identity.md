# Flowtress Brand Identity: Professional Pulse

## Strategy
The **Professional Pulse** identity balances institutional trust (**Fortress**) with modern velocity (**Flow**). It is designed specifically for regulated industries that require both security and high-performance digital movement.

## Color System (OKLCH)

### 1. Flow Accent (Copper)
High-chroma accent for functional highlights and critical actions.
- **Anchor (600):** `oklch(0.58 0.19 45)` — Pass 4.5:1 on White.
- **Usage:** Primary buttons, status indicators, "Pulse" animation.

### 2. Fortress Anchor (Pulse Indigo)
Deep, heavy neutral for structural weight and typographic authority.
- **Anchor (900):** `oklch(0.25 0.08 275)` — AA/AAA Contrast.
- **Usage:** Text color, header backgrounds, borders.

### 3. Corporate Neutrals (Slate)
Subtle cool grays for background grounding.
- **Base (50):** `oklch(0.98 0.005 235)`
- **Usage:** Page backgrounds, card fills.

## Typography System

- **Primary (99%):** **Roboto (Sans)** — Clean, legible, modern.
- **Secondary (UI):** **Roboto Condensed** — Tactical, precision labels.
- **Accent (Display):** **Lora (Serif)** — Institutional, trustworthy headers.

## Implementation Details
- **Tailwind v4 @theme:** Defined in `src/index.css` using OKLCH variables.
- **Portfolio Routes:**
  - `/` — Brand Hero
  - `/typography` — Typography Matrix
  - `/color-scheme` — Color Matrix
