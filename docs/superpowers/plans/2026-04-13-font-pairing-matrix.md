# Font Pairing Matrix Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a 3x3 grid matrix to visualize all font pairings between Roboto, Roboto Condensed, and Lora.

**Architecture:** Use a nested mapping strategy to generate the grid. UI strictly uses Arial for metadata. Grid cells use glassmorphism styling.

**Tech Stack:** React, Tailwind CSS v4, TanStack Router.

---

### Task 1: Scaffolding the Matrix Page

**Files:**
- Create: `docs/typography/combinations.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Write the initial component structure**

```tsx
import { createRoute } from "@tanstack/react-router";

export const Route = createRoute({
  path: "/typography/combinations",
  component: FontCombinationsMatrix,
});

const fonts = [
  { id: "sans", name: "Roboto (Sans)", class: "font-sans" },
  { id: "condensed", name: "Roboto Condensed (UI)", class: "font-condensed" },
  { id: "serif", name: "Lora (Serif)", class: "font-serif" },
] as const;

export function FontCombinationsMatrix() {
  return (
    <div className="min-h-screen bg-black text-white p-8" style={{ fontFamily: 'Arial, sans-serif' }}>
      <header className="mb-12 border-b border-zinc-800 pb-6">
        <h1 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">Font Pairing Matrix</h1>
        <p className="text-[10px] text-zinc-600">Strictly Arial Metadata • Columns: Heading | Rows: Body</p>
      </header>
      <main id="matrix-container"></main>
    </div>
  );
}
```

- [ ] **Step 2: Register the route in App.tsx**

```tsx
// src/App.tsx
import { FontCombinationsMatrix } from '../docs/typography/combinations';
// ...
const combinationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/typography/combinations',
  component: FontCombinationsMatrix,
});
const routeTree = rootRoute.addChildren([indexRoute, typographyRoute, combinationsRoute]);
```

- [ ] **Step 3: Commit**

```bash
git add docs/typography/combinations.tsx src/App.tsx
git commit -m "feat: scaffold font combinations matrix page"
```

---

### Task 2: Implementing the Grid Logic

**Files:**
- Modify: `docs/typography/combinations.tsx`

- [ ] **Step 1: Implement the nested map for the 3x3 grid**

```tsx
// inside FontCombinationsMatrix <main>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  {fonts.map((hFont) => (
    fonts.map((bFont) => (
      <div 
        key={`${hFont.id}-${bFont.id}`} 
        className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl flex flex-col gap-6"
      >
        <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 border-b border-zinc-800 pb-2">
          H: {hFont.name} + B: {bFont.name}
        </div>
        <div className="space-y-4">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${hFont.class}`}>
            Design for clarity
          </h2>
          <p className={`text-base font-normal leading-relaxed text-zinc-400 ${bFont.class}`}>
            Foundinity uses an alignment-first matchmaking approach, connecting entrepreneurs based on skills and values.
          </p>
        </div>
      </div>
    ))
  ))}
</div>
```

- [ ] **Step 2: Commit**

```bash
git add docs/typography/combinations.tsx
git commit -m "feat: implement 3x3 font pairing grid logic"
```

---

### Task 3: Visual Polish & Metadata Alignment

**Files:**
- Modify: `docs/typography/combinations.tsx`

- [ ] **Step 1: Add axis labels and refine spacing**

```tsx
// docs/typography/combinations.tsx
// Add column headers for the grid on large screens
<div className="hidden lg:grid grid-cols-3 gap-8 mb-4">
  {fonts.map(f => (
    <div key={f.id} className="text-[10px] font-black uppercase text-center text-zinc-700">
      Heading Axis: {f.name}
    </div>
  ))}
</div>
```

- [ ] **Step 2: Verify responsive behavior**
Ensure the grid switches from `grid-cols-3` to `grid-cols-1` on small screens.

- [ ] **Step 3: Final Commit**

```bash
git add docs/typography/combinations.tsx
git commit -m "style: final polish for font pairing matrix"
```
