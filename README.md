# Katsu Essays

Minimalist editorial essay archive built with Astro.

## Site identity
- **Name:** Katsu Essays
- **Tagline:** Markets, AI infrastructure, and the psychology of risk.

## Getting started

### 1) Install dependencies
```bash
npm install
```

### 2) Run locally
```bash
npm run dev
```
Then open the local URL shown by Astro (usually `http://localhost:4321/katsu-essays`).

### 3) Build for production
```bash
npm run build
npm run preview
```

## Add a new essay
1. Create a new `.md` or `.mdx` file in `src/content/essays/`.
2. Add frontmatter fields:
   - `title`
   - `subtitle`
   - `description`
   - `pubDate` (YYYY-MM-DD)
   - `category` (`Markets`, `AI & Infrastructure`, `Money Philosophy`)
   - `readingTime` (e.g. `6 min read`)
   - `featured` (`true` or `false`)
   - `coverImage` (e.g. `/katsu-essays/images/your-cover.svg`)
   - `coverAlt`
3. Write body content in Markdown/MDX.
4. Save and reload the site.

## Add images
1. Put image files in `public/images/`.
2. Reference them with root-relative paths, e.g.:
   - Cover image: `/katsu-essays/images/example.jpg`
   - Inline image in article body: `![Alt text](/katsu-essays/images/example.jpg)`

## Deploy to GitHub Pages
This project is configured for GitHub Pages static hosting with:
- `output: 'static'`
- `base: '/katsu-essays'`

### Recommended workflow (GitHub Actions)
1. Push this repo to GitHub.
2. In **Settings → Pages**, set source to **GitHub Actions**.
3. Add workflow `.github/workflows/deploy.yml`:

```yaml
name: Deploy Astro to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

If your repository name is not `katsu-essays`, update `base` in `astro.config.mjs`.
