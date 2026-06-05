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
| T03 | Homepage purpose | Load `index.html` without reading documentation. | Sarah's name, role, value statement, project/contact actions, and resume link are immediately visible. | Homepage shows the H1, role, short purpose copy, View Projects, Contact Me, and Download Resume in the first viewport. | Pass locally | Added stronger purpose copy and calls to action. | Pass in Chromium screenshot. | `output/playwright/homepage-desktop.png` |
| T04 | Motion control | Use the Play motion button on the homepage. | Video starts paused, button state is correct, and motion starts only after user action. | Playwright confirmed button text `Play motion`, `aria-pressed="true"`, video paused initially, and video playing after click. | Pass locally | Changed media to user-initiated and synced JS button state to video state. | Pass in Chromium smoke test. | `output/playwright/homepage-desktop.png` |
| T05 | Reduced motion | Enable reduced-motion preference and reload. | Video should stay paused or reduce motion; decorative animations should not be essential to understanding. | CSS and JS include reduced-motion handling; homepage key content is static and visible without video playback. | Pass by code review; OS/browser preference retest recommended. | Kept key content static and reduced non-essential motion. | Manual OS preference retest still recommended. | Add evidence note if assessor requests it. |
| T06 | Project content alignment | Compare project card titles with screenshots. | Case-study text matches visible project media. | Cards now match finance dashboard, Kanban board, and storefront screenshots. | Pass | Rewrote mismatched case-study content. | Pass after source review. | Add Projects screenshot. |
| T07 | Project dialog mouse | Click each View case study button. | Dialog opens with matching case-study details. | Dialog content is generated from each card's data attributes. | Pass locally | Modal rewritten to button-triggered interaction. | Pass in Chromium smoke test. | `output/playwright/project-modal.png` |
| T08 | Project dialog keyboard | Open a dialog, press Escape, then reopen and close with the close button. | Dialog closes with Escape and focus can return to the trigger. | Playwright confirmed Escape closes the active overlay. Focus trap code remains in place for Tab cycling. | Pass locally | Rebuilt modal focus management. | Pass in Chromium smoke test; manual Tab cycle recommended before final submission. | `output/playwright/project-modal.png` |
| T09 | Contact required fields | Submit the empty contact form. | Validation identifies required fields and exposes invalid state. | Playwright confirmed the first required field receives `aria-invalid="true"` after invalid submission. | Pass locally | Added clearer field-specific validation text and dynamic `aria-invalid`. | Pass in Chromium smoke test. | `output/playwright/contact-page.png` |
| T10 | Contact email validation | Enter an invalid email and submit. | Browser asks for a valid email address. | `type="email"`, required validation, and `inputmode="email"` are present. | Pass locally by source review | Added `inputmode="email"`. | Covered by contact form Chromium smoke test; manual invalid-email browser check recommended. | Add validation screenshot if required. |
| T11 | Contact success feedback | Complete all fields with valid data and submit. | Form resets and a visible confirmation appears until dismissed. | Playwright confirmed `#successMessage.show` is visible after valid submission. | Pass locally | Removed timed auto-dismiss behaviour. | Pass in Chromium smoke test. | `output/playwright/contact-success.png` |
| T12 | External links | Inspect footer social links and open them. | Links open in new tabs and use safe `rel` values. | Root pages use `target="_blank"` with `rel="noopener noreferrer"`. | Pass local check | Local checker added. | Pass when checker runs. | Not usually required. |
| T13 | Local assets | Check local CSS, JS, image, video, and PDF references. | Referenced local files exist. | Local checker verifies referenced files, including `assets/videos/`. | Pass | Moved MP4 files to `assets/videos/` and replaced missing gallery references. | `node tools/check-static-site.js` passed on 2026-06-05. | Not required. |
| T14 | Responsive layout | Review each page at desktop, tablet, and mobile widths. | Navigation collapses, cards stack, text remains readable, and controls stay usable. | Chromium screenshots confirm the desktop homepage, mobile Projects page, and Contact page remain usable. | Pass locally | Improved foreground panel contrast and refreshed screenshots. | Pass in Chromium screenshots. | `output/playwright/homepage-desktop.png`, `output/playwright/projects-mobile.png`, `output/playwright/contact-page.png` |
| T15 | HTML validation | Submit all root HTML pages to W3C Nu Validator. | No errors. | 2026-06-05 official W3C reports show 0 errors for all root pages. | Pass | Removed risky ARIA usage and kept semantic markup. | Pass after rerun. | JSON saved in `validation-reports/2026-06-05/`. |
| T16 | CSS validation | Submit `assets/css/style.css` to Jigsaw CSS Validator. | No errors. | 2026-06-05 official Jigsaw report shows valid CSS with 0 errors using the CSS3 SVG profile. | Pass | Added section comments and kept syntax validator-safe. | Pass after rerun. | JSON saved in `validation-reports/2026-06-05/`. |
| T17 | JavaScript syntax | Run `node --check assets/js/script.js`. | No syntax errors. | Command completed with no syntax errors. | Pass | JS rewritten into one external file. | Pass. | Not required. |
| T18 | Browser compatibility | Test deployed site in Chrome, Edge, Firefox, and Safari if available. | Core layout and interactions work consistently. | Chromium local testing passed. Playwright Firefox and WebKit binaries were not installed in this environment. | Partial | No browser-specific code added. | Manually test Edge, Firefox, and Safari after deployment. | Add notes after manual browser checks. |
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

Latest local check results from 2026-06-05:

| Check | Result |
| --- | --- |
| `node tools/check-static-site.js` | Pass |
| `node --check assets/js/script.js` | Pass |
| PostCSS parse of `assets/css/style.css` | Pass |
| Official W3C HTML validation | Pass: 0 errors across all root pages |
| Official Jigsaw CSS validation | Pass: valid CSS, 0 errors using the CSS3 SVG profile |
| Lighthouse homepage | Performance 75, Accessibility 100, Best Practices 100, SEO 100 |
| `npm run build` in `aboutme-react/` | Pass |
| Browser contact form smoke test | Pass: invalid state and valid confirmation were verified in Chromium |
| Browser modal smoke test | Pass: first project modal opened and closed with Escape in Chromium |
| Homepage motion smoke test | Pass: video starts paused and plays after button activation in Chromium |
| Local URL availability | Pass: `http://localhost:8000` returned HTTP 200 |

Optional CSS parse check using the installed PostCSS dependency:

```bash
node -e "const fs=require('fs'); const postcss=require('./aboutme-react/node_modules/postcss'); postcss.parse(fs.readFileSync('assets/css/style.css','utf8')); process.stdout.write('CSS parse passed\n');"
```

## User Story Testing

| User Story | Evidence | Status |
| --- | --- | --- |
| Recruiter can understand Sarah's role quickly. | Homepage H1, role subtitle, value statement, project/contact/resume actions, About profile. | Pass locally with screenshot evidence. |
| Assessor can review UX decisions and testing evidence. | Projects case-study dialog, recorded walkthrough, README, TESTING, ASSESSMENT-EVIDENCE, DISTINCTION-CHECKLIST. | Pass locally with final validator evidence. |
| Keyboard user can navigate without a mouse. | Skip links, focus states, modal focus trap, Escape close, labelled controls. | Pass by source and Chromium checks; manual full Tab-cycle retest recommended. |
| Mobile visitor can use the site comfortably. | Responsive navbar, grid breakpoints, stacked cards, full-width form controls. | Pass locally with mobile screenshot evidence. |
| Motion-sensitive user can control animation. | User-initiated play/pause button and reduced-motion CSS/JS. | Pass locally; OS preference retest recommended. |

## Bug Fix Log

| Bug Found | Impact | Fix Applied | Retest Result |
| --- | --- | --- | --- |
| Project case-study content did not match screenshots. | Reduced credibility and assessor evidence quality. | Rewrote titles, alt text, and case-study descriptions to match the real assets. | Source review passed; visual retest required. |
| Inline CSS and JavaScript made maintainability evidence weaker. | Risk against criteria 3.5 and 3.6. | Moved custom styles and scripts into external files. | Local checker will fail if inline custom blocks return. |
| Images were multi-megabyte PNGs. | Slow load, deployment weight, and optimisation risk. | Added optimised JPEG derivatives and updated references. | Static asset check passed. |
| Footer social-link groups used `aria-label` on plain `div` elements. | W3C validator error and weaker landmark semantics. | Changed wrappers to semantic `nav aria-label="Social links"` elements. | W3C HTML validation now reports 0 errors. |
| Temporary `contacts.log` stored submitted details. | Privacy and professionalism risk. | Removed the local log and ignored future log files. | Pass by file inspection. |
| GitHub Pages workflow deployed the entire repository. | Risk of publishing generated files and non-site material. | Workflow now builds a scoped `_site` artifact. | Deployment retest pending. |
| Contact success message disappeared after a timeout. | Some users could miss confirmation feedback. | Confirmation now remains until dismissed. | Chromium smoke test passed on 2026-06-05. |
| Projects page referenced missing gallery videos. | Broken media weakened functionality and local-link evidence. | Replaced the four missing clips with the existing portfolio walkthrough and moved MP4 files into `assets/videos/`. | Static checker passed on 2026-06-05. |
| About/Projects/Contact panels were too transparent over the background. | Reduced readability and risked the foreground/background criterion. | Increased panel opacity for stronger contrast while keeping the visual identity. | Chromium screenshots passed visual review. |
| Project mobile full-page screenshot showed an offscreen image as blank before scrolling. | Screenshot evidence looked incomplete even though the asset existed. | Eager-loaded the three optimised project preview images and refreshed screenshot after scrolling assets into view. | `output/playwright/projects-mobile.png` and `projects-third-card.png` show all project images. |
| Homepage media autoplayed by default. | Weaker user-control evidence and unnecessary initial motion. | Removed autoplay, set `preload="none"`, and made the motion button start in `Play motion` state. | Chromium motion smoke test passed. |

## Remaining Bugs and Justification

- No backend form delivery exists. This is acceptable for the current static
  portfolio because the UI clearly says the message details passed validation
  and directs users to social links for an immediate reply.
- Official W3C and Jigsaw validation should be rerun only if more HTML or CSS
  edits are made before submission.
- Browser compatibility in Edge, Firefox, and Safari remains pending because
  only Chromium was available in this environment.
- Deployment match tests remain pending until a final redeploy has been pushed
  and checked against the local version.
- Generated dependency and build output has been removed from the current Git
  index and is ignored for future commits. Historical commits may still contain
  those files; do not rewrite history for this assessment submission.
