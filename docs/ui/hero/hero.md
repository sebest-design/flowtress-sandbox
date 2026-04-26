# Hero Section: Split Impact — Lo-Fi Wireframe

## Component Scope
Hero section only — nav bar + 50/50 split panel.
No feature rows, no footer.

## Layout

### Desktop (1440px) — 50/50 split, side by side
```
+--------------------------------------------------+--------------------------------------------------+
| FLOWTRESS       Features   Pricing   Docs   [ Request Access ]                                      |
+----------------------------------------- NAV ----+------ bg-white ----------------------------------+
|                                                  |                                                  |
|                                                  | BY THE NUMBERS                                   |
|                                                  |                                                  |
|  Clients Judge You                               | Clients served      12         projects          |
|  Before You Speak                                | ───────────────────────────────────────   |
|                                                  | Industries          4          verticals          |
|  High-credibility industries need                | ───────────────────────────────────────   |
|  high-credibility websites. We build both.       | Avg. time to launch 3 wks      delivery          |
|                                                  | ───────────────────────────────────────   |
|  [ Book a Call ]  [ See Our Work ]               | Client retention    91%        return rate        |
|                                                  |                                                  |
|                                                  |                                                  |
+--------------------------------------------------+--------------------------------------------------+
  <───────────────────── 50% ─────────────────────>  <───────────────────── 50% ─────────────────────>
  bg-pulse-950 (dark)                              bg-white
```

### Tablet (768px) — stacks to single column
```
+-----------------------------------------------------------+
| FLOWTRESS                                        [Menu]   |
+-------------------------------- NAV ----------------------+
|                                                           |
|  Clients Judge You Before You Speak                       |
|                                                           |
|  High-credibility industries need                         |
|  high-credibility websites. We build both.                |
|                                                           |
|  [ Book a Call ]    [ See Our Work ]                      |
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
|  Clients Judge You                    |
|  Before You Speak                     |
|                                       |
|  High-credibility industries          |
|  need high-credibility websites.      |
|  We build both.                       |
|                                       |
|  [ Book a Call ]                      |
|  [ See Our Work ]                     |
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
- **Left col** (`bg-pulse-950`): dark surface, `justify-center` — H1, subheadline, CTAs
- **Right col** (`bg-white`): "By the Numbers" social proof panel — muted section label, 4 metric rows, label left / value+unit right, `border-b` row dividers
- **50/50 split**: `grid-cols-2` at `lg`; stacks vertically below `lg` with `border-t` separator instead of `border-l`
- **H1**: `font-serif` (Lora) `font-bold`, `text-4xl` → `sm:text-5xl` → `md:text-6xl` → `lg:text-7xl`, `tracking-tighter`, `max-w-[16ch]` — accent display usage per typography system
- **CTAs**: `flex-wrap gap-4` — `Book a Call` copper fill (primary), `See Our Work` ghost with `border-pulse-700` (secondary)
- **Nav**: full links hidden on mobile (`hidden md:flex`), replaced with `← Back` link
- **Stats**: placeholder figures — replace with real data before launch
