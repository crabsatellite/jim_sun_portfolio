# Jim Sun Portfolio

Responsive Astro portfolio site adapted from `Portfolio_CN_001.pdf`.

## Stack

- Astro 5 static site generator
- PDF-derived WebP page plates in `public/assets/pages`
- GitHub Pages workflow in `.github/workflows/deploy.yml`

## Local Development

```bash
npm install
npm run dev
npm run check
npm run build
```

The GitHub Pages base path is configured as `/jim_sun_portfolio` in `astro.config.mjs`.

## Source Reference

The original InDesign package and archive are kept locally under `reference/`.
That folder is intentionally ignored by Git because it is several gigabytes; the
site uses optimized WebP derivatives in `public/assets/work`.
