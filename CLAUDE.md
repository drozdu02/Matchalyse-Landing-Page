# CLAUDE.md — ticket-landing

## Project Overview

Landing page for **TicketDashboard** — a dashboard app providing sports betting ticket predictions, primarily targeting the **Polish market**. The goal is to convert visitors into subscribers/users of the prediction dashboard.

**Stack:** Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui (Radix Mira style) · HugeIcons

---

## Skills

Two skills are available under `.claude/skills/`. Always apply both when building UI:

### `@frontend-design`
Use when creating any visual component, page, or layout. Key rules:
- Choose a **distinct conceptual direction** and execute it precisely — no generic AI aesthetics
- Avoid overused fonts (Inter, Roboto, Arial). Use distinctive display + body font pairings
- No purple gradients on white. Commit to a strong, cohesive color story with CSS variables
- Use asymmetry, overlap, and unexpected spatial composition — break the grid intentionally
- Animations: prefer CSS-only; use **Motion library** for React when available. One well-orchestrated page load beats scattered micro-interactions
- Add texture, depth, and atmosphere — gradient meshes, noise overlays, shadows — not flat solid fills

### `@vercel-react-best-practices`
Use when writing any React/Next.js code. Priority order:
1. **Eliminate waterfalls** — `Promise.all()` for parallel fetches, move `await` into branches
2. **Reduce bundle size** — direct imports (no barrel files), `next/dynamic` for heavy components
3. **Server performance** — `React.cache()`, hoist static I/O to module level, `after()` for non-blocking ops
4. **Re-renders** — derive state during render, functional `setState`, avoid inline component definitions
5. **Rendering** — `content-visibility` for long lists, `useTransition` for loading states

---

## Project Conventions

### File Structure
```
app/             # Next.js App Router pages and layouts
components/
  ui/            # shadcn/ui primitives (don't modify manually — use shadcn CLI)
  (feature)/     # Feature-specific components
hooks/           # Custom React hooks
lib/             # Utilities (cn(), etc.)
public/          # Static assets
```

### Imports
- Use `@/` alias for all project imports (configured in tsconfig.json)
- Import shadcn components from `@/components/ui/...` directly, never from barrel files
- Import icons from `@hugeicons/react`

### Styling
- Tailwind CSS v4 — configuration lives in `app/globals.css` via `@theme inline`
- Use CSS variables from globals.css for all colors and design tokens — never hardcode hex values
- `cn()` from `@/lib/utils` for conditional class merging
- Dark mode is supported (next-themes, toggle via `d` key in dev)

### Components
- shadcn/ui style: `radix-mira`, base color: `neutral`
- Add new shadcn components via: `pnpm dlx shadcn add <component>`
- Button already installed with variants: `default | outline | secondary | ghost | destructive | link` and sizes: `xs | sm | default | lg | icon | icon-xs | icon-sm | icon-lg`

### Code Style
- TypeScript strict mode — no `any`, no type assertions unless unavoidable
- Format with Prettier: `pnpm format`
- Lint with ESLint: `pnpm lint`
- Typecheck: `pnpm typecheck`

---

## Domain Context

- **Target audience:** Polish sports bettors looking for data-driven ticket predictions
- **Key conversion goal:** Sign up / start free trial for the prediction dashboard
- **Tone:** Analytical, trustworthy, data-forward — not casino-flashy
- **Language note:** UI copy may include Polish text; ensure proper UTF-8 and `lang="pl"` on relevant elements if needed

---

## Dev Commands

```bash
pnpm dev        # Start dev server with Turbopack
pnpm build      # Production build
pnpm lint       # ESLint
pnpm format     # Prettier
pnpm typecheck  # TypeScript check
```
