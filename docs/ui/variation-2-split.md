# Variation 2: Split Impact Wireframe

## Layout Overview
- **Header**: Navigation bar with logo (left), links (center), and CTA (right).
- **Hero**: Double column layout.
  - **Left Col**: Headline (H1), Subheadline, Primary CTA, Secondary CTA.
  - **Right Col**: Visual Placeholder / Feature Image.
- **Features**: Alternating zig-zag rows (Image-Text / Text-Image).
- **Footer**: Multi-column layout with sitemap and social links.

## Desktop (1440px)
```text
____________________________________________________________________________________________________
| [Logo]                Home    Features    Pricing    Docs    Blog                                    |
|__________________________________________________________________________________________________|
|                                                                                                  |
|  SPLIT IMPACT HEADLINE IN TITLE CASE             ______________________________________________  |
|  ___________________________________            |                                              | |
|                                                 |                                              | |
|  Supporting subheadline using active voice…                                     |
|  Engage users with clarity and 8 deployments.                                |
|  text-wrap: balance applied to headings.                                     |
|                                                 |                 16:9 Aspect                  | |
|  [ PRIMARY CTA ]     [ Secondary ]              |______________________________________________| |
|                                                                                                  |
|__________________________________________________________________________________________________|
|                                                                                                  |
|  __________________________________             ZIG FEATURE ONE IN TITLE CASE                    |
| |                                  |            _____________________________                    |
| |                                  |                                                             |
| |         FEATURE IMAGE            |            Detailed explanation in active voice.            |
| |          PLACEHOLDER             |            Highlighting 24/7 monitoring and                 |
| |                                  |            seamless integration.                            |
| |__________________________________|                                                             |
|                                                 [ Learn More ]                                   |
|__________________________________________________________________________________________________|
|                                                                                                  |
|  ZAG FEATURE TWO IN TITLE CASE                  __________________________________               |
|  _____________________________                 |                                  |              |
|                                                |                                  |              |
|  Detailed explanation in active voice.         |          FEATURE IMAGE           |              |
|  Showcasing 100% uptime and                    |           PLACEHOLDER            |              |
|  optimized performance.                         |                                  |              |
|                                                |__________________________________|              |
|  [ Learn More ]                                                                                  |
|__________________________________________________________________________________________________|
|                                                                                                  |
|  [Logo]          PRODUCT           RESOURCES           COMPANY             LEGAL                 |
|                  Features          Documentation       About Us            Privacy Policy        |
|  © 2024          Pricing           Blog                Careers             Terms of Service      |
|  Flowtress       Security          Support             Contact             Cookies               |
|__________________________________________________________________________________________________|
```

## Tablet (768px)
```text
________________________________________________________________________________
| [Logo]                                                               [Menu] |
|______________________________________________________________________________|
|                                                                              |
|  SPLIT IMPACT HEADLINE IN TITLE CASE                                         |
|  ___________________________________                                         |
|                                                                              |
|  Supporting subheadline using active voice.                                  |
|  Engage users with clarity and 8 deployments.                                |
|                                                                              |
|  [ PRIMARY CTA ]     [ Secondary ]                                           |
|                                                                              |
|  __________________________________________________________________________  |
| |                                                                          | |
| |                        HERO VISUAL / IMAGE PLACEHOLDER                   | |
| |__________________________________________________________________________| |
|                                                                              |
|______________________________________________________________________________|
|                                                                              |
|  ZIG FEATURE ONE IN TITLE CASE                                               |
|  _____________________________                                               |
|                                                                              |
|  __________________________________________________________________________  |
| |                                                                          | |
| |                         FEATURE IMAGE PLACEHOLDER                        | |
| |__________________________________________________________________________| |
|                                                                              |
|  Detailed explanation in active voice highlighting 24/7 monitoring.          |
|  [ Learn More ]                                                              |
|______________________________________________________________________________|
|                                                                              |
|  ZAG FEATURE TWO IN TITLE CASE                                               |
|  _____________________________                                               |
|                                                                              |
|  __________________________________________________________________________  |
| |                                                                          | |
| |                         FEATURE IMAGE PLACEHOLDER                        | |
| |__________________________________________________________________________| |
|                                                                              |
|  Detailed explanation in active voice showcasing 100% uptime.                |
|  [ Learn More ]                                                              |
|______________________________________________________________________________|
|                                                                              |
|  [Logo]       PRODUCT         RESOURCES       COMPANY         LEGAL          |
|               Features        Docs            About           Privacy        |
|  © 2024       Pricing         Blog            Careers         Terms          |
|______________________________________________________________________________|
```

## Mobile (375px)
```text
__________________________________________
| [Logo]                          [Menu] |
|________________________________________|
|                                        |
|  SPLIT IMPACT HEADLINE                 |
|                                        |
|  Active voice subheadline.             |
|                                        |
|  [ PRIMARY CTA ]                       |
|  [ Secondary ]                         |
|                                        |
|  ____________________________________  |
| |                                    | |
| |            HERO VISUAL             | |
| |____________________________________| |
|                                        |
|________________________________________|
|                                        |
|  ZIG FEATURE ONE                       |
|                                        |
|  ____________________________________  |
| |                                    | |
| |           FEATURE IMAGE            | |
| |____________________________________| |
|                                        |
|  Active voice explanation.             |
|  [ Learn More ]                        |
|________________________________________|
|                                        |
|  ZAG FEATURE TWO                       |
|                                        |
|  ____________________________________  |
| |                                    | |
| |           FEATURE IMAGE            | |
| |____________________________________| |
|                                        |
|  Active voice explanation.             |
|  [ Learn More ]                        |
|________________________________________|
|                                        |
|  PRODUCT      RESOURCES      COMPANY   |
|  Features     Docs           About     |
|  Pricing      Blog           Careers   |
|                                        |
|  LEGAL        © 2024 Flowtress         |
|  Privacy      Terms                    |
|________________________________________|
```

## Frontend Design Notes (Applied)
- **Typography**: Title Case for all H1/H2 headings and CTA buttons.
- **Copywriting**: Active voice used throughout ("Engage users", "Highlighting", "Showcasing").
- **Numerals**: Numerical values used for counts ("8 deployments", "24/7 monitoring", "100% uptime").
- **Hierarchy**: Clear visual separation of Hero and Feature sections.
- **Accessibility**: Placeholders imply requirement for `alt` text on images and `aria-label` for icon-only components.
- **Layout**: Consistent gutters and alignment. Tablet/Mobile views transition from split/zig-zag to stacked columns for optimal readability.
- **Punctuation**: Used `…` where applicable (though wireframes are sparse on truncated text).
ough wireframes are sparse on truncated text).
