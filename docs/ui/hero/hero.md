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
|                                              | · LIVE SYSTEM STATUS                                 |
|                                              |                                                      |
|  Security That Doesn't                       | Active pipelines      8          live                |
|  Slow the Flow                               | ─────────────────────────────────────────           |
|                                              | Threat detections     0          incidents           |
|  Flowtress gives regulated industries        | ─────────────────────────────────────────           |
|  the security posture of a defense           | Uptime                100%        30 days           |
|  contractor with the deployment speed        | ─────────────────────────────────────────           |
|  of a SaaS startup. 8 enterprise             | Avg response          184ms       p99               |
|  deployments live. Zero incidents.           |                                                      |
|                                              |                                                      |
|  [ Request Access ]  [ View Demo ]           |                                                      |
|                                              |                                                      |
|  OKLCH System · AES-256 · SOC 2              |                                                      |
|                                              |                                                      |
+----------------------------------------------+------------------------------------------------------+
  <────────────── 50% ───────────────>          <────────── 50% ──────────>
  bg-pulse-950 (dark)                           bg-white
```

### Tablet (768px) — stacks to single column
```
+-----------------------------------------------------------+
| FLOWTRESS                                        [Menu]   |
+-------------------------------- NAV ----------------------+
|                                                           |
|  Security That Doesn't Slow the Flow                      |
|                                                           |
|  Flowtress gives regulated industries the security        |
|  posture of a defense contractor with the deployment      |
|  speed of a SaaS startup. 8 deployments live.             |
|                                                           |
|  [ Request Access ]    [ View Demo ]                      |
|                                                           |
|  OKLCH System · AES-256 · SOC 2                           |
|                                                           |
+───────────────────────────── border-t ────────────────────+
|                                                           |
|  · LIVE SYSTEM STATUS                                     |
|                                                           |
|  Active pipelines          8 live                         |
|  ────────────────────────────────────                     |
|  Threat detections         0 incidents                    |
|  ────────────────────────────────────                     |
|  Uptime                    100%  30 days                  |
|  ────────────────────────────────────                     |
|  Avg response              184ms  p99                     |
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
|  Security That Doesn't                |
|  Slow the Flow                        |
|                                       |
|  Flowtress gives regulated            |
|  industries the security of a         |
|  defense contractor. 8 deployments.   |
|                                       |
|  [ Request Access ]                   |
|  [ View Demo ]                        |
|                                       |
|  OKLCH System · AES-256 · SOC 2       |
|                                       |
+──────────── border-t ─────────────────+
|                                       |
|  · LIVE SYSTEM STATUS                 |
|                                       |
|  Active pipelines    8 live           |
|  ─────────────────────────────        |
|  Threat detections   0 incidents      |
|  ─────────────────────────────        |
|  Uptime              100%  30 days    |
|  ─────────────────────────────        |
|  Avg response        184ms  p99       |
|                                       |
+---------------------------------------+
  bg-pulse-950 top / bg-white bottom
```

## Design Notes
- **Left col** (`bg-pulse-950`): dark surface, `justify-between` — tagline anchored top, CTA cluster mid, monospace footnote bottom
- **Right col** (`bg-white`): live status panel — label left, value + unit right, `border-b` row dividers, copper pulse dot on status label
- **60/40 split**: `grid-cols-[3fr_2fr]` at `lg`; stacks vertically below `lg` with `border-t` separator instead of `border-l`
- **H1**: `text-4xl` → `sm:text-5xl` → `md:text-6xl` → `lg:text-7xl`, `tracking-tighter`, `max-w-[16ch]`
- **CTAs**: `flex-wrap gap-4` — primary copper fill, secondary ghost with `border-pulse-700`
- **Nav**: full links hidden on mobile (`hidden md:flex`), replaced with `← Back` link
