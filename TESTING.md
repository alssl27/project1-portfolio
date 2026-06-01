# Testing

This file documents the manual testing plan for the portfolio. It supports the distinction requirement for comprehensive testing evidence, including expected results and known gaps.

## Test Environment

- Local static files opened from the project root or served with a simple HTTP server.
- Desktop viewport: approximately 1366px wide.
- Tablet viewport: approximately 768px wide.
- Mobile viewport: approximately 390px wide.

## Manual Test Cases

| ID | Area | Steps | Expected result | Status |
| --- | --- | --- | --- | --- |
| T01 | Navigation | Open each navbar item from every page. | Home, About Me, Projects, and Contact pages load and active navigation is clear. | Pass |
| T02 | Skip link | Press Tab after page load. | Skip link appears and moves focus to the main content when activated. | Pass |
| T03 | Homepage purpose | Load `index.html`. | Sarah's name, role, and resume action are immediately visible. | Pass |
| T04 | Motion control | Use the Pause motion button on the homepage. | Background video pauses, button text changes, and motion can be resumed. | Pass |
| T05 | Reduced motion | Enable reduced motion in the browser/OS where available. | Animations are reduced and the video starts paused through JavaScript support. | Pass |
| T06 | Projects content | Open `projects.html`. | Project cards show site-specific case studies rather than placeholder text. | Pass |
| T07 | Project dialog mouse | Click a project card's View case study button. | Dialog opens with problem, users, UX decisions, accessibility, testing, and outcome. | Pass |
| T08 | Project dialog keyboard | Open a dialog, press Escape, then reopen and close with the close button. | Dialog closes and focus returns to the triggering control. | Pass |
| T09 | Contact required fields | Submit an empty contact form. | Browser validation prevents submission and identifies required fields. | Pass |
| T10 | Contact email validation | Enter an invalid email and submit. | Browser validation asks for a valid email address. | Pass |
| T11 | Contact success feedback | Complete all fields with valid data and submit. | Form resets and a visible confirmation explains that details passed validation. | Pass |
| T12 | External links | Open footer social links. | Links open in a new tab and use safe `rel` attributes. | Pass |
| T13 | Local assets | Check all local image, video, CSS, JS, and resume references. | Referenced local files exist; no missing project image references remain. | Pass |
| T14 | Responsive layout | Review Home, About, Projects, and Contact at desktop, tablet, and mobile widths. | Text remains readable, cards stack correctly, nav collapses, and controls remain usable. | Pass |

## Automated/Local Checks

| Check | Result |
| --- | --- |
| Local HTML reference and duplicate ID check | Pass |
| CSS parse check with PostCSS | Pass |
| JavaScript syntax check with Node | Pass |
| React prototype production build in `aboutme-react` | Pass |

## Bug Fix Log

| Issue found | Impact | Fix |
| --- | --- | --- |
| Projects page referenced images that were not present. | Broken visuals and reduced professionalism. | Reduced projects to three complete case studies using available images. |
| Contact form attempted to post to `/contact` on a static site. | Users would see a failed network request. | Replaced backend claim with static validation and honest confirmation feedback. |
| CSS included malformed blocks. | Later styles could parse unpredictably. | Corrected malformed `hero-overlay`, terminal button, and panel declarations. |
| About page had a style block before the doctype. | HTML validation and document structure risk. | Removed the stray pre-doctype style block. |
| Motion-heavy homepage had no visible user control. | Accessibility risk for motion-sensitive users. | Added a pause/play motion button and reduced-motion support. |

## Known Gaps Before Final Submission

- Capture official W3C HTML validation evidence.
- Capture official Jigsaw CSS validation evidence.
- Capture final screenshots and add them to the README or assessment submission.
- Test the deployed GitHub Pages/Netlify/Vercel URL after publishing.
- Rename asset files that contain spaces or capital letters where possible, then update references.
