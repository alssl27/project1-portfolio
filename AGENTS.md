# AGENTS.md

## Project Overview

This workspace contains two main parts:
- **Static HTML/CSS/JS portfolio** (root folder): Classic multi-page site using Bootstrap, custom CSS, and vanilla JS.
- **React + Vite app** (`my-portfolio/`): Modern React app scaffolded with Vite, using Tailwind CSS and ESLint.

## Build & Development

### Static Site (root)
- No build step required. Edit HTML/CSS/JS directly.
- Open `index.html` in a browser to preview.

### React App (`my-portfolio/`)
- **Install dependencies:**
  ```sh
  cd my-portfolio
  npm install
  ```
- **Start dev server:**
  ```sh
  npm run dev
  ```
- **Build for production:**
  ```sh
  npm run build
  ```
- **Preview production build:**
  ```sh
  npm run preview
  ```

## Linting
- Run `npm run lint` in `my-portfolio/` to check code style.

## Deployment
- GitHub Actions workflow in `.github/workflows/deploy-pages.yml` deploys the site to GitHub Pages on push to `main`.

## Conventions & Tips
- **Static site:** Uses Bootstrap 5, Font Awesome, and custom CSS variables for theming.
- **React app:** Uses Tailwind CSS (see `tailwind.config.js`), Vite plugins, and React 19.
- **Pitfalls:**
  - For the static site, ensure asset paths are correct (relative to HTML files).
  - For the React app, always run `npm install` after pulling new dependencies.
- **Docs:** See [`my-portfolio/README.md`](my-portfolio/README.md) for React app details.

---

This file helps AI coding agents understand the workspace structure, build/test commands, and conventions. Update as the project evolves.