# Hongtao Zheng — Academic Homepage

A single-page academic homepage styled after the clean two-column layout used by the reference site.

## Portrait

Put your portrait at:

`public/images/profile.jpg`

Recommended: square or nearly square image, at least 600 × 600 px. The page crops it to a circle automatically.

## Main content

- `app/page.tsx` — profile text, education/research experience, awards, academic service, publications
- `app/globals.css` — layout and visual style
- `app/layout.tsx` — page title and metadata

## Local preview

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Publish to GitHub Pages

The existing GitHub Actions workflow is retained. Push the repository to the `main` branch and use **GitHub Actions** as the Pages source in repository settings.
