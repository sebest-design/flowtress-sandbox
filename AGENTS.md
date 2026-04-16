# Agents

## Cursor Cloud specific instructions

### Overview

Flowtress is a **front-end-only React SPA** — a branding/web-design agency portfolio site. There is no backend, database, or Docker infrastructure. All data is hardcoded in the codebase.

**Important:** The `main` branch is nearly empty. All application source code lives on feature branches (most complete: `origin/cursor/wireframe-visualizations-eab2`). When setting up, checkout files from that branch or work from it.

### Tech Stack

- **Runtime:** Node.js 22+ (Bun referenced in `package.json` but npm works fine with `package-lock.json`)
- **Build/Dev:** Vite 8, React 19, Tailwind CSS 4, TypeScript 6
- **Routing:** @tanstack/react-router

### Key Commands

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (Vite on port 5173) |
| Type check | `npm run typecheck` |
| Build | `npm run build` |
| Preview build | `npm run preview` |

### Gotchas

- **No ESLint configured** — `npm run typecheck` (`tsc --noEmit`) is the primary code-quality check.
- **PostHog analytics** are optional; the app runs fine without `VITE_POSTHOG_KEY` / `VITE_POSTHOG_HOST` env vars.
- The `env-setup.sh` script is for Claude Code CLI setup (MCP plugins, hooks, etc.) — **not** for Cursor Cloud dependency installation. Ignore it for dev environment setup.
- `bun.lock` exists alongside `package-lock.json`; use `npm install` since Bun is not pre-installed in the Cloud VM.
