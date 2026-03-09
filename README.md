# QXO Dark Nebula — Ecom 2.0 Hub

Astro-powered ecosystem map and document hub for QXO Ecom 2.0 workstreams.

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start local dev server at `localhost:4321`   |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview build locally before deploying      |

## Adding PR/FAQ Documents

Documents on the ecosystem map are managed through the `src/content/prfaq/` content collection. To add a new document:

1. Create a `.md` file in `src/content/prfaq/` (e.g. `atb-blue-proposal-builder.md`)
2. Add frontmatter with the required fields:

```yaml
---
title: "Your Document Title"
status: draft          # draft | review | approved | shipped
owner: "Author Name"
date: "2026-03-08"
workstream: atb-blue   # ecom2-core | atb-blue | builds | template-library | jobs | delivery-tracking | crm | payments | other
version: "1.0"
tags: ["tag1", "tag2"]
---
```

3. Write the document body in Markdown below the frontmatter
4. The document will appear on the **Documents** page automatically on the next build or dev server reload

### Document Lifecycle

- **Draft** — Work in progress, visible in the hub for internal review
- **Review** — Circulated for stakeholder feedback
- **Approved** — Signed off, ready for implementation
- **Shipped** — Feature has been delivered

Documents progress through these stages on the ecosystem map. Once a document moves past draft, it becomes visible to the broader team on the Documents page.

## Key Directories

```
src/
├── content/prfaq/         # PR/FAQ markdown documents
├── data/ecosystem-nodes.ts # Ecosystem map node definitions
├── pages/
│   ├── ecosystem-map.astro # Main ecosystem visualization
│   └── docs/               # Document viewer pages
├── components/             # Reusable Astro components
└── layouts/                # Page layouts
```
