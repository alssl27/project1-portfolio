# Assessment Evidence Map

This document maps the portfolio to Gateway Qualifications Level 5 Diploma in
Web Application Development, Unit 1: User Centric Front End Development. It is
written for assessors so evidence can be located quickly.

## Project Type

The root application is a static frontend portfolio with four HTML pages:

- `index.html`
- `aboutme.html`
- `projects.html`
- `contact.html`

It uses semantic HTML, external CSS, Bootstrap, JavaScript, responsive images,
user-controlled media, manual testing documentation, and a GitHub Pages
deployment workflow.

The `aboutme-react/` folder is a separate React prototype and is not the primary
deployed site.

## Pass and Merit Evidence

| Criteria Area | Evidence in Project |
| --- | --- |
| 1.1 Main navigation and structured layout | Each page has a consistent `header`, `nav`, `main`, and `footer`, with active navigation state. |
| 1.2 Accessibility guidelines | Skip links, visible focus states, labelled form fields, meaningful alt text, decorative image hiding, reduced-motion support, and safe external links are implemented. |
| 1.3 Information hierarchy | Each page has a clear H1. Project cards and case-study dialogs group information by user problem, users, UX decisions, accessibility, testing, and outcome. |
| 1.4 Background does not distract | Content sits on dark high-contrast surfaces; the homepage media poster/video is dimmed and decorative; About, Projects, and Contact panels use stronger opacity for readability. |
| 1.5 Consistent graphics | Optimised project/profile images are consistently framed; icons and neon accents are used consistently. |
| 1.6 User control | Homepage motion starts paused and plays only after button activation; dialogs open only after button activation; no audio autoplays; form confirmation is user-dismissed. |
| 2.1 At least 3 pages | The site has four root pages. |
| 2.2 CSS validation evidence | Official Jigsaw report in `validation-reports/2026-06-05/` shows valid CSS with 0 errors. |
| 2.3 HTML validation evidence | Official W3C reports in `validation-reports/2026-06-05/` show 0 errors for all root pages. |
| 2.4 Image resolution | Project images and profile images are optimised derivatives with explicit dimensions and no stretching in CSS. |
| 2.5 External links | Footer social links open in new tabs and use `rel="noopener noreferrer"`. |
| 2.6 Responsive layout | Bootstrap, CSS Grid, and media queries reflow navigation, project cards, skills, and contact form. |
| 2.7 Semantic markup | `header`, `nav`, `main`, `section`, `article`, `footer`, headings, lists, labels, and buttons are used appropriately. |
| 2.8 Site-specific content | Case studies now match the actual screenshots: finance dashboard, Kanban board, and e-commerce storefront. |
| 2.9 Clear navigation | Four primary nav links are consistently placed and labelled. |
| 3.1 README | `README.md` explains purpose, value, target users, user stories, testing, deployment, credits, and lifecycle. |
| 3.2 Screenshots | Existing screenshot file is present in `assets/images/`; browser-check screenshots are present in `output/playwright/`. |
| 3.3 and 3.4 Attribution/separation | README credits Bootstrap, Font Awesome, Google Fonts, Devicon, React, Vite, Tailwind, Framer Motion, and Lucide React. Custom code is separate in root files and `assets/`. |
| 3.5 Commented sections | `assets/css/style.css` is organised into clear component and responsive sections. |
| 3.6 External CSS | Custom CSS is in `assets/css/style.css` and linked in every HTML head. |
| 3.7 Readability | Rebuilt files use consistent indentation and avoid repeated blank-line blocks. |
| 3.8 File naming | New custom assets use lowercase hyphenated names; old palette file with spaces was replaced by `docs/color-palette.md`. |
| 3.9 Grouped files | Assets are grouped under `assets/css`, `assets/js`, `assets/images`, and `assets/videos`; docs and tools have dedicated folders. |
| 4.1-4.3 Version control | Git history exists. Generated prototype output has been removed from the current Git index and README documents commit guidance. |
| 5.1-5.2 Testing | `TESTING.md` documents manual tests, expected/actual results, fixes, retests, and remaining evidence. |
| 5.3 Deployment | `.github/workflows/deploy-pages.yml` deploys a scoped static artifact; the GitHub Pages URL responds at `https://alssl27.github.io/project1-portfolio/`. |
| 5.4 Commented-out code | Custom inline/commented-out page code was removed; external-source attribution comments remain. |
| 5.5 Internal links | `tools/check-static-site.js` checks local references and internal assets. |

## Distinction Evidence

| Distinction Characteristic | Implemented Evidence |
| --- | --- |
| Clear, justified rationale for a real-world application | README explains the portfolio's audience, user stories, value, and how each page answers user needs. |
| Fully functioning interactive web application | Root pages provide navigation, user-initiated controlled media, case-study dialogs, downloadable resume, social links, and validated contact form feedback. |
| Advanced technique | CSS media queries, CSS Grid, Bootstrap responsive components, reduced-motion CSS/JS, modal focus management, and client-side validation. |
| Publishable professional UI | Consistent dark/neon visual identity, optimised images, readable content panels, clear navigation, focus states, and matching project evidence. |
| Craftsmanship in code | Custom CSS and JS are externalised, source files are reorganised, image assets are optimised, and a local static-site checker is included. |
| Defensive design | Required fields, input lengths, email validation, focus on first invalid field, no misleading backend claims, no private local contact log. |
| Accessibility across pages and interactivity | Skip links, semantic landmarks, form labels, dynamic `aria-invalid`, alt text, decorative image hiding, reduced motion, modal keyboard support, and visible focus indicators. |
| Testing at all stages | TESTING documents manual checks, local checks, official validation, Lighthouse evidence, bugs found, fixes, retests, and pending live/cross-browser checks. |
| Development and testing evident through commits | Git history exists; README provides recommended future commit structure and generated prototype output has been removed from the current Git index. |

## Remaining Evidence to Capture

- Rerun official validators only if more HTML or CSS edits are made before
  submission.
- Complete Edge, Firefox, and Safari checks manually if those browsers are
  available.
- Final deployment-match retest after the latest local changes are pushed to the
  known GitHub Pages URL.
