# Foundinity Typography System

## Overview

Foundinity uses **Roboto** as the primary typeface for **99% of all usage**, including body text, headings, and UI elements. The system includes **Lora** (Display/Serif) and **Roboto Condensed** (Secondary/UI) for extremely rare accent or high-contrast use cases.

The system uses **standard Tailwind CSS static sizes** and weights, with **responsive heading overrides** to ensure optimal readability across devices.

---

## Font Families

| Token | Value | Tailwind Class | Usage |
|-------|-------|----------------|-------|
| `--font-sans` | `'Roboto', sans-serif` | `font-sans` | **Primary:** All body text, headings, and UI |
| `--font-condensed` | `'Roboto Condensed', sans-serif` | `font-condensed` | **Accent:** Secondary UI, navigation (rare) |
| `--font-serif` | `'Lora', serif` | `font-serif` | **Accent:** Display text, hero accents (rare) |

---

## Weight Scale (Standard Tailwind)

| Name | Value | Tailwind Class | Usage |
|------|-------|----------------|-------|
| Regular | 400 | `font-normal` | Body text, default prose |
| Medium | 500 | `font-medium` | Emphasis, labels, navigation, subheadings |
| Semi-Bold | 600 | `font-semibold` | Prominent UI elements, card titles, section headers |
| Bold | 700 | `font-bold` | Headings, CTAs, strong emphasis |
| Italic | 400i | `italic` | Quotes, hints, secondary emphasis |

---

## Size Scale (Responsive Headings)

Headings scale down on smaller viewports to maintain visual hierarchy.

| Token | Mobile | Tablet | Desktop | Tailwind Class |
|-------|--------|--------|---------|----------------|
| H1 | text-3xl | text-4xl | text-5xl | `text-3xl md:text-4xl lg:text-5xl` |
| H2 | text-2xl | text-3xl | text-4xl | `text-2xl md:text-3xl lg:text-4xl` |
| H3 | text-xl | text-2xl | text-3xl | `text-xl md:text-2xl lg:text-3xl` |
| H4 | text-lg | text-xl | text-2xl | `text-lg md:text-xl lg:text-2xl` |
| H5 | text-base | text-lg | text-xl | `text-base md:text-lg lg:text-xl` |
| H6 | text-sm | text-base | text-lg | `text-sm md:text-base lg:text-lg` |

---

## Standard Static Sizes

For all other elements, standard Tailwind CSS values are used.

| Token | Value (rem) | Value (px) | Tailwind Class |
|-------|-------------|------------|----------------|
| `--text-xs` | 0.75rem | 12 | `text-xs` |
| `--text-sm` | 0.875rem | 14 | `text-sm` |
| `--text-base` | 1rem | 16 | `text-base` |
| `--text-lg` | 1.125rem | 18 | `text-lg` |
| `--text-xl` | 1.25rem | 20 | `text-xl` |

---

## Semantic Heading Defaults

### Default Mappings

| Element | Default Font | Default Weight | Tailwind Classes |
|---------|--------------|----------------|-----------------|
| H1 | font-sans | font-bold | `text-3xl md:text-4xl lg:text-5xl font-bold font-sans` |
| H2 | font-sans | font-bold | `text-2xl md:text-3xl lg:text-4xl font-bold font-sans` |
| H3 | font-sans | font-medium | `text-xl md:text-2xl lg:text-3xl font-medium font-sans` |
| H4 | font-sans | font-medium | `text-lg md:text-xl lg:text-2xl font-medium font-sans` |
| H5 | font-sans | font-medium | `text-base md:text-lg lg:text-xl font-medium font-sans` |
| H6 | font-sans | font-medium | `text-sm md:text-base lg:text-lg font-medium font-sans` |

> **Accent Fonts:** Use `font-serif` (Lora) or `font-condensed` (Roboto Condensed) only when explicitly required for specific branding moments.

---

## Usage Examples

### Primary Hero (Roboto)
```tsx
<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans">A Disruptive Approach</h1>
```

### Accent Display (Lora)
```tsx
<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif">Branding Reimagined</h1>
```

### Body text (Roboto)
```tsx
<p className="text-base font-normal font-sans">Focus on the core of your mission.</p>
```

### UI Label (Roboto Condensed)
```tsx
<span className="text-xs font-semibold font-condensed uppercase tracking-wider text-zinc-500">SYSTEM STATUS</span>
```
