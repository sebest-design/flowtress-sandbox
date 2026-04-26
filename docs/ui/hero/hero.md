# Hero Section: Split Impact — Lo-Fi Wireframe

## Component Scope
Hero section only — nav bar + 60/40 asymmetric split panel.
No feature rows, no footer.

## Layout

### Desktop (1440px) — 60/40 split, side by side
```
+------------------------------------------------------------------+----------------------------------+
| FLOWTRESS          Features   Pricing   Docs   [ Request Access ]|                                  |
+-------------------------------------- NAV ---|------ bg-white ---+----------------------------------+
|                                              |                                                      |
|                                              | BY THE NUMBERS                                       |
|                                              |                                                      |
|  Your Website Is                             | Clients served        12         projects            |
|  Losing You Deals                            | ─────────────────────────────────────────           |
|                                              | Industries            4          verticals           |
|  In high-stakes industries, first            | ─────────────────────────────────────────           |
|  impressions close deals. We build           | Avg. time to launch   3 wks      delivery           |
|  websites that make the right one.           | ─────────────────────────────────────────           |
|                                              | Client retention      91%        return rate         |
|  [ Book a Call ]  [ See Our Work ]           |                                                      |
|                                              |                                                      |
|  Web Design · High-Stakes Industries         |                                                      |
|                                              |                                                      |
+----------------------------------------------+------------------------------------------------------+
  <────────────── 60% ───────────────>          <────────── 40% ──────────>
  bg-pulse-950 (dark)                           bg-white
```

### Tablet (768px) — stacks to single column
```
+-----------------------------------------------------------+
| FLOWTRESS                                        [Menu]   |
+-------------------------------- NAV ----------------------+
|                                                           |
|  Your Website Is Losing You Deals                         |
|                                                           |
|  In high-stakes industries, first impressions             |
|  close deals. We build websites that make                 |
|  the right one.                                           |
|                                                           |
|  [ Book a Call ]    [ See Our Work ]                      |
|                                                           |
|  Web Design · High-Stakes Industries                      |
|                                                           |
+───────────────────────────── border-t ────────────────────+
|                                                           |
|  BY THE NUMBERS                                           |
|                                                           |
|  Clients served            12 projects                    |
|  ────────────────────────────────────                     |
|  Industries                4 verticals                    |
|  ────────────────────────────────────                     |
|  Avg. time to launch       3 wks delivery                 |
|  ────────────────────────────────────                     |
|  Client retention          91% return rate                |
|                                                           |
+-----------------------------------------------------------+
  bg-pulse-950 top / bg-white bottom
```

### Mobile (375px)
```
+---------------------------------------+
| FLOWTRESS                    [← Back] |
+--------------- NAV -------------------+
|                                       |
|  Your Website Is                      |
|  Losing You Deals                     |
|                                       |
|  In high-stakes industries,           |
|  first impressions close deals.       |
|  We build websites that make          |
|  the right one.                       |
|                                       |
|  [ Book a Call ]                      |
|  [ See Our Work ]                     |
|                                       |
|  Web Design · High-Stakes Industries  |
|                                       |
+──────────── border-t ─────────────────+
|                                       |
|  BY THE NUMBERS                       |
|                                       |
|  Clients served    12 projects        |
|  ─────────────────────────────        |
|  Industries        4 verticals        |
|  ─────────────────────────────        |
|  Avg. to launch    3 wks delivery     |
|  ─────────────────────────────        |
|  Client retention  91% return rate    |
|                                       |
+---------------------------------------+
  bg-pulse-950 top / bg-white bottom
```

## Design Notes
- **Left col** (`bg-pulse-950`): dark surface, `justify-between` — empty spacer top, copy+CTAs mid, monospace footnote bottom
- **Right col** (`bg-white`): "By the Numbers" social proof panel — muted section label, 4 metric rows, label left / value+unit right, `border-b` row dividers
- **60/40 split**: `grid-cols-[3fr_2fr]` at `lg`; stacks vertically below `lg` with `border-t` separator instead of `border-l`
- **H1**: `text-4xl` → `sm:text-5xl` → `md:text-6xl` → `lg:text-7xl`, `tracking-tighter`, `max-w-[16ch]`
- **CTAs**: `flex-wrap gap-4` — `Book a Call` copper fill (primary), `See Our Work` ghost with `border-pulse-700` (secondary)
- **Nav**: full links hidden on mobile (`hidden md:flex`), replaced with `← Back` link
- **Stats**: placeholder figures — replace with real data before launch
