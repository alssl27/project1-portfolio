# Testing

This document records manual and local testing evidence for the Sarah Collins
Portfolio. It supports the Level 5 distinction requirement for comprehensive
testing, bug evaluation, and end-testing evidence.

## Test Environment

- Local preview: project root served with `python -m http.server 8000`.
- Desktop viewport: approximately 1366px wide.
- Tablet viewport: approximately 768px wide.
- Mobile viewport: approximately 390px wide.
- Browsers to test before final submission: Chrome, Edge, Firefox, and Safari if
  available.

## Manual Test Cases

| ID | Scenario | Steps Taken | Expected Result | Actual Result | Pass/Fail | Fix Applied | Retest Result | Screenshot Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| T01 | Global navigation | Open Home, About Me, Projects, and Contact from the navbar on every page. | Each internal page loads and the active page is clear. | Local source now uses consistent links and active states. | Pass locally | Rebuilt shared nav markup across pages. | Retest after deployment. | Add final nav screenshots. |
| T02 | Skip link | Load each page and press Tab once. Activate the skip link. | Focus moves to main content. | Skip link exists on every root page. | Pass locally | Skip links retained during HTML cleanup. | Retest after deployment. | Add keyboard test screenshot if required. |
| T03 | Homepage purpose | Load `index.html` without reading documentation. | Sarah's name, role, and resume link are immediately visible. | Homepage uses stable H1/subtitle text instead of partial animated text. | Pass locally | Added stable H1/subtitle fallback. | Retest after deployment. | Add homepage screenshot. |
| T04 | Motion control | Use the Pause motion button on the homepage. | Video pauses, button text changes, and motion can resume. | JavaScript updates text and `aria-pressed`. | Pass locally by code review; browser retest required. | Motion control retained and made defensive. | Retest in browser. | Add screenshot or note. |
| T05 | Reduced motion | Enable reduced-motion preference and reload. | Video should pause or reduce motion; decorative animations should not be essential to understanding. | CSS and JS include reduced-motion handling. | Pass by code review; OS/browser retest required. | Kept key content static and reduced non-essential motion. | Retest in browser. | Add evidence note. |
| T06 | Project content alignment | Compare project card titles with screenshots. | Case-study text matches visible project media. | Cards now match finance dashboard, Kanban board, and storefront screenshots. | Pass | Rewrote mismatched case-study content. | Pass after source review. | Add Projects screenshot. |
| T07 | Project dialog mouse | Click each View case study button. | Dialog opens with matching case-study details. | Dialog content is generated from each card's data attributes. | Pass locally by code review; browser retest required. | Modal rewritten to button-triggered interaction. | Retest in browser. | Add dialog screenshot. |
| T08 | Project dialog keyboard | Open a dialog, Tab through controls, press Escape, then reopen and close with the close button. | Focus stays inside dialog, Escape closes, and focus returns to trigger. | Focus trap and return logic are implemented. | Pass by code review; browser retest required. | Rebuilt modal focus management. | Retest in browser. | Add keyboard test note. |
| T09 | Contact required fields | Submit the empty contact form. | Browser validation prevents submission and identifies required fields. | Required, minlength, maxlength, and email attributes are present. | Pass locally by source review. | Added clearer field-specific validation text. | Retest in browser. | Add validation screenshot. |
| T10 | Contact email validation | Enter an invalid email and submit. | Browser asks for a valid email address. | `type="email"` and validation are present. | Pass locally by source review. | Added `inputmode="email"`. | Retest in browser. | Add validation screenshot. |
| T11 | Contact success feedback | Complete all fields with valid data and submit. | Form resets and a visible confirmation appears until dismissed. | JS shows the success message and does not auto-hide it. | Pass by source review; browser retest required. | Removed timed auto-dismiss behaviour. | Retest in browser. | Add success screenshot. |
| T12 | External links | Inspect footer social links and open them. | Links open in new tabs and use safe `rel` values. | Root pages use `target="_blank"` with `rel="noopener noreferrer"`. | Pass local check | Local checker added. | Pass when checker runs. | Not usually required. |
| T13 | Local assets | Check local CSS, JS, image, video, and PDF references. | Referenced local files exist. | Local checker verifies referenced files. | Pass | Updated image and JS paths. | `node tools/check-static-site.js` passed. | Not required. |
| T14 | Responsive layout | Review each page at desktop, tablet, and mobile widths. | Navigation collapses, cards stack, text remains readable, and controls stay usable. | CSS Grid, Bootstrap, and media queries are implemented. | Pass by source review; browser retest required. | Rebuilt CSS responsive sections. | Retest in browser. | Add desktop/mobile screenshots. |
| T15 | HTML validation | Submit all root HTML pages to W3C Nu Validator. | No errors. | 2026-06-03 official W3C reports show 0 errors for all root pages. | Pass | Replaced invalid `aria-label` wrapper with semantic social-link `nav` elements. | Pass after rerun. | JSON saved in `validation-reports/2026-06-03/`. |
| T16 | CSS validation | Submit `assets/css/style.css` to Jigsaw CSS Validator. | No errors. | 2026-06-03 official Jigsaw report shows valid CSS with 0 errors. | Pass | Added section comments and kept syntax validator-safe. | Pass after rerun. | JSON saved in `validation-reports/2026-06-03/`. |
| T17 | JavaScript syntax | Run `node --check assets/js/script.js`. | No syntax errors. | Command completed with no syntax errors. | Pass | JS rewritten into one external file. | Pass. | Not required. |
| T18 | Browser compatibility | Test deployed site in Chrome, Edge, Firefox, and Safari if available. | Core layout and interactions work consistently. | Pending final deployment/browser testing. | Pending | No browser-specific code added. | Add results after deployment. | Add notes if needed. |
| T19 | Deployment match | Compare local site to live GitHub Pages version after workflow deploy. | Live site matches local source and has no broken internal links. | Current live URL responds at `https://alssl27.github.io/project1-portfolio/`, but latest local edits must be pushed before a final match test. | Pending final redeploy | GitHub Pages workflow now deploys a scoped `_site` artifact. | Retest live URL after pushing. | Add live URL screenshot. |

## Automated and Local Checks

Run from the project root:

```bash
node tools/check-static-site.js
node --check assets/js/script.js
```

Run the React prototype build:

```bash
cd aboutme-react
npm run build
```

Latest local check results from 2026-06-03:

| Check | Result |
| --- | --- |
| `node tools/check-static-site.js` | Pass |
| `node --check assets/js/script.js` | Pass |
| PostCSS parse of `assets/css/style.css` | Pass |
| Official W3C HTML validation | Pass: 0 errors across all root pages |
| Official Jigsaw CSS validation | Pass: valid CSS, 0 errors |
| `npm run build` in `aboutme-react/` | Pass |
| Browser contact form smoke test | Pass: confirmation was visible, focused, and inside the viewport |
| Live URL availability | Pass: GitHub Pages URL returned HTTP 200 |

Optional CSS parse check using the installed PostCSS dependency:

```bash
node -e "const fs=require('fs'); const postcss=require('./aboutme-react/node_modules/postcss'); postcss.parse(fs.readFileSync('assets/css/style.css','utf8')); process.stdout.write('CSS parse passed\n');"
```

## User Story Testing

| User Story | Evidence | Status |
| --- | --- | --- |
| Recruiter can understand Sarah's role quickly. | Homepage H1, role subtitle, resume download, About profile. | Pass locally; screenshot needed. |
| Assessor can review UX decisions and testing evidence. | Projects case-study dialog, README, TESTING, ASSESSMENT-EVIDENCE. | Pass locally; final validator evidence needed. |
| Keyboard user can navigate without a mouse. | Skip links, focus states, modal focus trap, Escape close, labelled controls. | Pass by code review; manual keyboard retest needed. |
| Mobile visitor can use the site comfortably. | Responsive navbar, grid breakpoints, stacked cards, full-width form controls. | Pass by code review; viewport screenshots needed. |
| Motion-sensitive user can control animation. | Pause/play button and reduced-motion CSS/JS. | Pass by code review; OS preference retest needed. |

## Bug Fix Log

| Bug Found | Impact | Fix Applied | Retest Result |
| --- | --- | --- | --- |
| Project case-study content did not match screenshots. | Reduced credibility and assessor evidence quality. | Rewrote titles, alt text, and case-study descriptions to match the real assets. | Source review passed; visual retest required. |
| Inline CSS and JavaScript made maintainability evidence weaker. | Risk against criteria 3.5 and 3.6. | Moved custom styles and scripts into external files. | Local checker will fail if inline custom blocks return. |
| Images were multi-megabyte PNGs. | Slow load, deployment weight, and optimisation risk. | Added optimised JPEG derivatives and updated references. | Static asset check passed. |
| Footer social-link groups used `aria-label` on plain `div` elements. | W3C validator error and weaker landmark semantics. | Changed wrappers to semantic `nav aria-label="Social links"` elements. | W3C HTML validation now reports 0 errors. |
| Temporary `contacts.log` stored submitted details. | Privacy and professionalism risk. | Removed the local log and ignored future log files. | Pass by file inspection. |
| GitHub Pages workflow deployed the entire repository. | Risk of publishing generated files and non-site material. | Workflow now builds a scoped `_site` artifact. | Deployment retest pending. |
| Contact success message disappeared after a timeout. | Some users could miss confirmation feedback. | Confirmation now remains until dismissed. | Browser retest pending. |

## Remaining Bugs and Justification

- No backend form delivery exists. This is acceptable for the current static
  portfolio because the UI clearly says the message details passed validation
  and directs users to social links for an immediate reply.
- Official W3C and Jigsaw validation should be rerun only if more HTML or CSS
  edits are made before submission.
- Browser compatibility and deployment match tests remain pending until a final
  redeploy has been pushed and checked against the local version.
- Generated dependency and build output has been removed from the current Git
  index and is ignored for future commits. Historical commits may still contain
  those files; do not rewrite history for this assessment submission.
