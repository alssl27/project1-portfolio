# Sarah Collins Portfolio

Sarah Collins Portfolio is a static, multi-page frontend portfolio for
recruiters, assessors, and collaborators who need to understand Sarah's skills,
project evidence, and contact route quickly. The site is built with semantic
HTML, external custom CSS, Bootstrap, and JavaScript.

## Purpose and Value

The project responds to a real-world portfolio need: a visitor should be able to
identify who Sarah is, understand what she builds, review project evidence,
download a resume, and make contact without reading supporting documentation.

Target users:

- Recruiters checking technical fit, project style, and contact routes.
- Course assessors reviewing frontend implementation, UX, accessibility,
  documentation, testing, and deployment evidence.
- Collaborators looking for development strengths and social links.

## User Stories

| User story | How the application answers it |
| --- | --- |
| As a recruiter, I want the homepage to show Sarah's name, role, and resume link immediately so I can decide whether to continue. | `index.html` presents Sarah Collins, Full-Stack Web Developer, and a resume download action in the first viewport. |
| As an assessor, I want project case studies to explain users, UX choices, accessibility, and testing so I can judge user-centred design evidence. | `projects.html` provides three case-study cards and a keyboard-operable dialog containing problem, users, UX decisions, accessibility, testing, and outcome. |
| As a keyboard user, I want clear focus states, skip links, and keyboard-operable interactions so I can use the site without a mouse. | All pages include skip links, visible focus outlines, button-based dialog triggers, Escape close, and focus return. |
| As a mobile visitor, I want the layout to reflow cleanly so I can browse projects and submit the contact form on a small screen. | CSS Grid, Bootstrap, and media queries stack cards, resize text, and keep the form and navigation usable. |
| As a motion-sensitive user, I want control over animated media so I can pause movement. | The homepage video is muted, decorative, and controlled by a pause/play button; reduced-motion preferences pause or reduce animation. |

## UX Design Rationale

The information hierarchy follows a simple user journey: identity and resume on
the homepage, profile and skills on About, project evidence on Projects, and a
contact route on Contact. The global navigation is consistent across pages, and
each page uses one clear main heading.

Interaction decisions:

- The project dialog opens only after a user activates a button, supports Escape
  and overlay close, traps focus while open, and returns focus to the trigger.
- The contact form validates required fields, email format, minimum lengths, and
  displays a clear confirmation only after valid input.
- The background video is muted and decorative, with visible user control.
- Neon accents are used consistently for links, buttons, focus states, and
  feedback, while content remains on dark high-contrast surfaces.

Accessibility decisions:

- Semantic landmarks: `header`, `nav`, `main`, `section`, `article`, and
  `footer`.
- Skip links and visible focus indicators across pages.
- Meaningful alternative text for informative images and empty `alt` with
  `aria-hidden="true"` for decorative avatars.
- Form labels and field-specific validation messages.
- External links open in new tabs with `rel="noopener noreferrer"`.
- Reduced-motion support in CSS and JavaScript.

## Features

- Four-page static portfolio: Home, About Me, Projects, Contact.
- Responsive Bootstrap navigation and CSS Grid layouts.
- Optimised project/profile image assets.
- Project case-study dialog with keyboard and mouse support.
- Client-side contact validation with non-misleading static-site confirmation.
- Downloadable resume link.
- Social links in the footer.
- Reduced-motion-aware homepage video control.

## Screenshots

Current visual evidence file:

- `assets/images/portfolio-screenshot-2026-05-12.png`

Generated browser-check screenshots:

- `output/playwright/homepage-desktop.png`
- `output/playwright/projects-mobile.png`
- `output/playwright/project-modal.png`
- `output/playwright/contact-success.png`

Screenshots still to capture before final submission:

- Final screenshots after any last validation edits.
- Official W3C HTML and Jigsaw CSS validator screenshots or JSON exports after
  final deployment.

## Technologies Used

- HTML5 for semantic page structure.
- CSS3 for custom layout, responsive rules, focus states, and visual identity.
- JavaScript for modal behaviour, motion control, and form
  validation feedback.
- Bootstrap 5 from CDN for responsive navigation and utility classes.
- Font Awesome from CDN for social and section icons.
- Devicon SVG CDN for technology logos on the About page.
- Vite, React, Tailwind, Framer Motion, and Lucide React in the separate
  `aboutme-react/` prototype.

Custom code is in the root HTML files, `assets/css/style.css`,
`assets/js/script.js`, and the React source files. CDN libraries and package
dependencies are external code and are credited here and by comments above the
CDN links.

## Project Structure

```text
.
├── index.html
├── aboutme.html
├── projects.html
├── contact.html
├── README.md
├── TESTING.md
├── ASSESSMENT-EVIDENCE.md
├── docs/
│   └── color-palette.md
├── tools/
│   └── check-static-site.js
├── assets/
│   ├── css/style.css
│   ├── js/script.js
│   ├── images/
│   └── resume.pdf
├── validation-reports/
│   ├── 2026-06-01/
│   └── 2026-06-03/
├── output/
│   └── playwright/
├── aboutme-react/
└── .github/workflows/deploy-pages.yml
```

## Testing

Full manual testing evidence is in `TESTING.md`.

Local checks added for repeatability:

```bash
node tools/check-static-site.js
node --check assets/js/script.js
```

The previous official validation reports in `validation-reports/2026-06-01/`
showed 0 W3C HTML errors and valid Jigsaw CSS at that time. Fresh reports in
`validation-reports/2026-06-03/` show:

- W3C HTML: 0 errors for `index.html`, `aboutme.html`, `projects.html`, and
  `contact.html`.
- Jigsaw CSS: valid CSS with 0 errors.

## Bugs Found and Fixed

| Issue | Fix |
| --- | --- |
| Project case-study text did not match the available project screenshots. | Rewrote case studies to match the finance dashboard, Kanban board, and e-commerce storefront images. |
| Custom CSS and JavaScript were split between external files and inline page blocks. | Moved custom behaviour into `assets/js/script.js` and custom styling into `assets/css/style.css`. |
| Large image assets were used directly. | Created optimised, lowercase JPEG derivatives and updated page references. |
| Contact form used temporary local logging during development. | Removed `contacts.log` and kept static-site validation feedback honest. |
| GitHub Pages workflow uploaded the whole repository. | Updated workflow to deploy a scoped `_site` artifact. |

## Remaining Bugs and Risks

- Official W3C and Jigsaw validation now pass with 0 errors; rerun them only if
  further HTML or CSS edits are made before submission.
- The live GitHub Pages URL responds, but it must be retested after these latest
  local changes are committed and pushed.
- Generated prototype dependency/build output has been removed from the current
  Git index with `git rm --cached`; `.gitignore` prevents future `node_modules`,
  `dist`, and `_site` output being re-added.
- The contact form validates locally but does not send messages to a backend or
  form service.

## Deployment

This is a static site and can be deployed to GitHub Pages, Netlify, Vercel, or
any static host. A GitHub Pages workflow is included in
`.github/workflows/deploy-pages.yml`.

GitHub Pages procedure:

1. Push the repository to GitHub.
2. Open repository settings and enable Pages through GitHub Actions.
3. Run the `Deploy static site to Pages` workflow.
4. Visit the published URL.
5. Re-test navigation, media, form validation, dialogs, internal links, and
   responsive layouts against the deployed site.

Live deployment link: `https://alssl27.github.io/project1-portfolio/`

GitHub repository link: `https://github.com/alssl27/project1-portfolio`

Local preview:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Development Lifecycle

1. Planning: define target users, user stories, and required portfolio evidence.
2. Design: choose a dark portfolio identity, clear page hierarchy, global
   navigation, accessible forms, controlled media, and responsive card layouts.
3. Implementation: build semantic HTML pages, external CSS, JavaScript
   interactions, and supporting assets.
4. Testing: perform manual checks for functionality, accessibility,
   responsiveness, validation, links, and deployment readiness.
5. Deployment: publish the static site using the GitHub Pages workflow and retest
   the deployed version.
6. Review: document bugs fixed, remaining risks, validation evidence, and
   version-control guidance.

## Version Control and Development Process

Recent commits show iterative work, but the assessment standard expects small,
well-defined commits for each feature or fix. Recommended commit structure:

- `fix: improve semantic HTML structure`
- `fix: add accessible alt text and labels`
- `style: organise external CSS and responsive rules`
- `docs: expand README with user stories and lifecycle evidence`
- `test: add manual testing documentation and static checks`
- `chore: remove generated prototype output from git tracking`

Do not rewrite Git history. Future cleanup should use a dedicated commit that
keeps generated files ignored while retaining `package.json` and
`package-lock.json` as the source of dependency truth.

## Credits and Attribution

- Bootstrap: layout, navbar, forms, and responsive utilities.
- Font Awesome: footer and section icons.
- Google Fonts: Inter and Orbitron typography.
- Devicon: technology logos on the About page.
- React, Vite, Tailwind CSS, Framer Motion, and Lucide React: used only in the
  separate `aboutme-react/` prototype.

All portfolio page content, custom styling, and custom JavaScript behaviour are
project-specific unless explicitly credited above.
