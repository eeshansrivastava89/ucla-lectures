# Changing Content

Everything you see on the site is defined in MDX files. No need to touch code.

## Files

| File | Controls |
|------|----------|
| `src/content/pages/overview.mdx` | Homepage: info table, schedule, assessment, domains, safety, logistics, references, instructor |
| `src/content/pages/lecture-1.mdx` – `lecture-5.mdx` | Lecture pages: concept, topics, tools, deliverable, big tech callout |
| `src/content/pages/scale.mdx` | Closer page: principles, stack map, scale changes, walk-away |
| `src/data/site.json` | Sidebar nav labels, brand text |

## Frontmatter = structured data, Body = prose

```mdx
---
title: "New Title"          # ← frontmatter: tables, lists, labels
topics:                      # ← arrays become bullet lists
  - Added a new topic
sectionHeadings:
  concept: Concept           # ← section heading text
---
This is the concept section. You can write **markdown** here.  ← body: paragraphs
```

## Common edits

| To change… | Edit… |
|------------|-------|
| Lecture title or tagline | `lecture-*.mdx` → `title` / `tagline` |
| A topic or tool | `lecture-*.mdx` → `topics` / `tools` array |
| Section heading ("Concept", "Topics", etc.) | `lecture-*.mdx` → `sectionHeadings` |
| Assessment weights | `overview.mdx` → `assessment` array |
| Domain options | `overview.mdx` → `domains` array |
| Safety cards | `overview.mdx` → `safety` array |
| Logistic details | `overview.mdx` → `logistics` array |
| References | `overview.mdx` → `references` array |
| FOSS→Enterprise mapping | `scale.mdx` → `stackMap` array |
| Sidebar nav labels | `site.json` → `nav` array |
| Brand/instructor name | `site.json` → `brand` |

## Diagrams

Write mermaid diagrams directly in the MDX body as fenced code blocks:

````
```mermaid
flowchart LR
    A[Notebook] -->|deploy| B[FastAPI]
    B -->|serve| C[/:8000]
```
````

All diagram types work: flowcharts, sequence, class, state, ER, gantt, etc.
See [mermaid syntax reference](https://mermaid.js.org/intro/syntax-reference.html).

Diagrams render client-side — they appear as SVGs in the browser.

## Adding a lecture

1. Create `src/content/pages/lecture-6.mdx` following the same frontmatter structure
2. Add a nav entry in `src/data/site.json`