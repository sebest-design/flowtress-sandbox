# Design Spec: Font Pairing Matrix Grid

## Status: Approved

## Overview
Create a specialized page to visualize all possible font combinations between the three project typefaces: **Roboto (Sans)**, **Roboto Condensed (UI)**, and **Lora (Serif)**. The page will use a 3x3 grid matrix layout to allow for direct side-by-side comparison of heading and body pairings.

## Requirements
- **Layout:** 3x3 Grid Matrix (9 cells total).
- **Axes:** 
  - **Columns:** Heading Typefaces (Roboto, Roboto Condensed, Lora).
  - **Rows:** Body Typefaces (Roboto, Roboto Condensed, Lora).
- **Cell Content:** 
  - Header label (Heading + Body font names).
  - Responsive Heading (using `H1` or `H2` classes).
  - Body text paragraph (using `text-base`).
- **Styling:**
  - **Metadata:** Strictly **Arial** (9px-11px).
  - **Theming:** Deep black background, subtle glassmorphism for cells, zinc borders.
- **Responsiveness:** Grid should collapse to 1 column on mobile while maintaining row/column grouping clarity.

## Architecture
- **Location:** `docs/typography/combinations.tsx`
- **Route:** `/typography/combinations`
- **Component:** `FontCombinationsMatrix`

## Technical Details
- **Data Structure:** 
  ```typescript
  const fonts = [
    { id: "sans", name: "Roboto (Sans)", class: "font-sans" },
    { id: "condensed", name: "Roboto Condensed (UI)", class: "font-condensed" },
    { id: "serif", name: "Lora (Serif)", class: "font-serif" },
  ];
  ```
- **Rendering:** Nested map of `fonts` (Outer loop for columns, Inner loop for rows).
- **Responsive Classes:** Use `text-3xl md:text-4xl lg:text-5xl` for headings within cells to show responsive behavior.

## Success Criteria
- All 9 possible pairings (3x3) are displayed.
- Metadata (labels, headers) is strictly in Arial.
- Headings use the column typeface, body text uses the row typeface.
- Layout remains usable on mobile devices.
