# UCLA MLOps Course Website — Project Context

## Overview
Interactive course website for a UCLA Anderson MSBA MLOps course (5 lectures, Fall 2026). Build by Eeshan Srivastava as proof-of-concept to share with a UCLA professor. Also serves as O1 visa evidence.

## Tech Stack
- **Framework**: Astro 6.3.7 + @astrojs/mdx
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` plugin
- **Diagrams**: astro-mermaid (client-side rendering)
- **Package manager**: pnpm 10.27.0, Node v26.0.0
- **Build**: `pnpm dev` / `npx astro build`

## Architecture: Content/Presentation Separation

### Content Layer (edit in any text editor, no code needed)
| File | Controls |
|------|----------|
| `src/content/pages/overview.mdx` | Homepage: info table, about prose, assessment, domains, safety, logistics, references, instructor |
| `src/content/pages/lecture-{1-5}.mdx` | Individual lectures: mermaid diagram, concept prose, topics, tools, deliverable, big tech callout, nav labels |
| `src/content/pages/scale.mdx` | Closer page: mermaid diagram, principles, stack map, scale changes, walk-away |
| `src/data/site.json` | Sidebar nav labels, brand text, instructor name/URL |

**Content rules**: 
- Frontmatter = structured data (section headings, table headers with `{ label, width }`, arrays, copy)
- MDX body = prose (markdown formatting) + mermaid diagrams (fenced ````mermaid` code blocks)
- Info table values use HTML `<a>` tags for links (not markdown syntax, since rendered via `set:html`)
- Table headers are `{ label, width }` objects — `width` is a Tailwind class string, optional

### Presentation Layer (touch only for layout/style)
| File | Purpose |
|------|---------|
| `src/components/Sidebar.astro` | Fixed sidebar nav — reads labels from `site.json` |
| `src/components/Tag.astro` | Small tag/badge component |
| `src/layouts/Base.astro` | HTML shell (head, meta, scripts) |
| `src/layouts/Course.astro` | Page wrapper (sidebar + main content area) |
| `src/pages/index.astro` | Overview page template — reads from `overview.mdx` |
| `src/pages/lectures/[id].astro` | Dynamic lecture pages — reads from `lecture-*.mdx` |
| `src/pages/scale.astro` | Scale page template — reads from `scale.mdx` |
| `src/styles/global.css` | Tailwind v4 + custom `.section-heading`, `.info-table`, `.data-table`, `.prose-course` classes |
| `src/content.config.ts` | Astro v6 content collection config (glob loader, pages collection) |

**Zero hardcoded content in presentation files** — all visible text, headings, table headers/columns, labels come from MDX frontmatter or MDX body.

## Design
- **Theme**: Light background, black type, heavy borders, no muted colors
- **Sidebar**: Fixed left, white bg, `border-r-2 border-black`, `bg-black text-white` active state
- **Typography**: Headings `text-black font-bold`, body `text-neutral-700/800`, labels `text-[11px] uppercase tracking-[0.2em]`
- **Tables**: `border-2 border-black rounded`, `.data-table` and `.info-table` utility classes
- **Deliverable boxes**: `bg-black text-white` inverted cards
- **Mermaid diagrams**: Client-side rendered via `astro-mermaid`, styled with `style` directives in mermaid syntax (black strokes, white fills, matching the bold theme)

## Course Content Structure
- **5 lectures**, 3-hour block format: concept (50 min) → break (10 min) → build (120 min)
- **Default domain**: Customer Churn (swappable to Fraud, Demand Forecasting, Recommendation)
- **Project arc**: train → deploy → track → containerize → monitor → wrap with LLM
- **FOSS-first**: per-lecture "How Big Tech Does This" callout + dedicated FOSS→Enterprise mapping page
- **API-first for L5**: Claude/OpenAI as primary, Ollama as local/free alternative
- **Safety**: Hallucination risk, prompt injection, model bias integrated into L4 and L5
- **Structural model**: CMU 17-445 (milestone-based, production under real load)

## Git
- Initialized on `main` branch, commit `d5e6f21`
- `.gitignore`: node_modules, dist, .astro, logs, .DS_Store

## Key Commands
- `pnpm dev` — dev server
- `npx astro build` — static build (7 pages)
- `pnpm add <pkg>` — add dependency

## File Count
- 25 tracked files
- 7 MDX content files + 1 JSON
- 7 presentation files (3 pages, 2 layouts, 2 components, 1 CSS)
- 5 config files (astro, tsconfig, content.config, package.json, pnpm-workspace)

## Deployment
- User has existing fly.dev deployment: `ucla-starbucks-challenge.fly.dev`
- Not yet deployed — pending user review

## Known Issues / Next Steps
- [ ] Visual review by user — verify mermaid diagrams render correctly in browser
- [ ] Possible deployment to fly.dev
- [ ] Share with UCLA professor
- [ ] Vault notes at `/Users/eeshans/PersonalVault/ucla-ml-ops/ucla mlops course.md`