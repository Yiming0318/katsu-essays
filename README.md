# Katsu Essays

Premium, minimalist editorial essay archive built with Astro.

## Site identity
- **Name:** Katsu Essays
- **Tagline:** Essays on Markets, AI, and the Psychology of Risk

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
   - `category` (`Markets & Investing`, `AI & Technology Cycles`, `Money & Human Nature`)
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
Expected production URL: `https://yiming0318.github.io/katsu-essays/`

This repository is configured for GitHub Pages static hosting with:
- `site: "https://yiming0318.github.io"`
- `base: "/katsu-essays/"`
- `output: "static"`

### One-time setup in GitHub
1. Push the repository to `Yiming0318/katsu-essays`.
2. Go to **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.

### Automated deployment
A workflow is included at `.github/workflows/deploy.yml`.
- On every push to `main`, it runs `npm ci` and `npm run build`.
- It uploads the generated `dist/` folder as the Pages artifact.
- It deploys via `actions/deploy-pages`.

### Local verification before pushing
```bash
npm ci
npm run build
```

If your repository name changes, update `base` in `astro.config.mjs` to match the new repo path.
