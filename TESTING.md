# Testing

This document records testing for the final HTML/CSS version of the Sarah
Collins Web Developer Portfolio.

## Test Environment

- Local server: `python -m http.server 8765 --bind 127.0.0.1`
- Primary automated browser: Chromium through Playwright CLI
- Operating system: Windows
- Test date: 12 June 2026
- Target viewports: 320px, 375px, 768px, 1024px, and 1440px

## Manual Testing

| Test | Expected Result | Actual Result | Pass/Fail |
| --- | --- | --- | --- |
| Open Home from every page | `index.html` opens and Home is identified as current | Home opens from all navigation menus and uses `aria-current="page"` on the homepage | Pass |
| Open About from every page | `aboutme.html` opens and About is identified as current | About opens from all navigation menus and uses `aria-current="page"` on the About page | Pass |
| Open Projects from every page | `projects.html` opens and Projects is identified as current | Projects opens from all navigation menus and uses `aria-current="page"` on the Projects page | Pass |
| Open Contact from every page | `contact.html` opens and Contact is identified as current | Contact opens from all navigation menus and uses `aria-current="page"` on the Contact page | Pass |
| Use skip link | First Tab press reveals the link and activation moves focus to main content | Skip link appears visibly and points to the unique `main-content` landmark | Pass |
| Follow internal links | Project, About, Contact, resume, and anchor links open the intended resource | Local checker confirms every referenced internal file exists | Pass |
| Open external project links | External sites open in a new tab with safe relationship attributes | All HTTP links use `target="_blank"` and `rel="noopener noreferrer"` | Pass |
| Open email link | The user's email application is offered with Sarah's address | `mailto:` link contains the verified public portfolio email address | Pass |
| View project images | Images load without stretching or broken paths | Images load with intrinsic dimensions and responsive sizing | Pass |
| Use project video | Native controls are available and video does not autoplay with sound | Video uses native controls, is muted, and loads metadata only | Pass |
| Use calls to action | Buttons lead to the described page or resource | Home, project, resume, email, and profile calls to action use descriptive destinations | Pass |
| Use footer links | GitHub, LinkedIn, and Email are available on every page | Consistent visible text links appear in each footer | Pass |
| Navigate by keyboard | All links and native controls receive a visible focus indicator | Global `:focus-visible` styling provides a yellow outline | Pass |
| Read without colour | Current location and actions remain understandable without colour | Labels, borders, underlines, button text, and `aria-current` support colour cues | Pass |
| Disable JavaScript | All content and navigation remain usable | The submitted website contains no custom JavaScript | Pass |
| Check for horizontal scrolling | No page creates unwanted horizontal overflow at target widths | Browser viewport checks show no horizontal document overflow | Pass |
| Check 320px layout | Navigation, text, images, and buttons fit a narrow mobile screen | Content stacks, button groups become full width, and navigation remains readable | Pass |
| Check 375px layout | Page hierarchy remains clear on a common mobile width | Content stacks cleanly with readable type and controls | Pass |
| Check 768px layout | Tablet layout has balanced spacing and no clipped content | Grid sections and cards reflow without overlap | Pass |
| Check 1024px layout | Desktop/tablet transition remains balanced | Project cards and general grids use available space without overflow | Pass |
| Check 1440px layout | Content remains contained and does not become difficult to scan | Maximum content width keeps lines and media controlled | Pass |
| Check contact route | The page does not claim to submit data without delivery | Non-functional form was removed and direct email/profile links are provided | Pass |
| Run local static checker | At least three HTML5 pages, labelled main navigation, the custom stylesheet, required README sections, and AI attribution comments are present; no missing files, duplicate IDs, unsafe external links, inline styles/scripts, frameworks, or unexpected JavaScript files are found | `node tools/check-static-site.js` completes successfully | Pass |

## Browser Compatibility

| Browser | Expected Result | Actual Result | Pass/Fail |
| --- | --- | --- | --- |
| Chromium | Layout, navigation, media, links, and focus states work | Final local responsive checks completed | Pass |
| Microsoft Edge | Site matches Chromium because both use a Chromium engine | Manual final deployed check still required | Pending |
| Firefox | Core HTML and CSS work without browser-specific dependencies | Browser not available in the current environment | Pending |
| Safari | Core HTML and CSS work without browser-specific dependencies | Browser not available on this Windows environment | Pending |

## Responsiveness Evidence

The following final screenshots are stored with the project:

- `assets/images/readme/desktop-home.png`
- `assets/images/readme/mobile-home.png`
- `assets/images/readme/features.png`

Checks include:

- No horizontal document overflow.
- Navigation remains visible without JavaScript.
- Text does not overlap media.
- Buttons remain at least approximately 48px high.
- Project content stacks before it becomes cramped.
- Images and video preserve their aspect ratio.

## Accessibility Checks

| Check | Expected Result | Actual Result | Pass/Fail |
| --- | --- | --- | --- |
| Page landmarks | Header, navigation, main content, and footer are identifiable | Semantic landmarks are used on all pages | Pass |
| Heading structure | One `h1` per page and logical lower-level headings | Source review and local checker confirm the required structure | Pass |
| Image alternatives | Meaningful images describe their content and purpose | All HTML images have non-empty project-specific alt text | Pass |
| Focus visibility | Keyboard focus is easy to locate | Yellow focus outline contrasts with dark surfaces | Pass |
| Link meaning | Link purpose is understandable from visible text | Links use labels such as "View live site" and "View repository" | Pass |
| Motion | Essential content does not animate and reduced-motion preference is respected | No autoplay background video or scripted animation remains | Pass |
| Media controls | User controls playback | Project video uses native browser controls | Pass |
| Text resizing | Layout tolerates larger text without fixed-height containers | Content uses flexible sizing and no fixed text containers | Pass |

## HTML Validation

Submit these files to the
[W3C Nu HTML Checker](https://validator.w3.org/nu/):

- `index.html`
- `aboutme.html`
- `projects.html`
- `contact.html`

| File | Expected Result | Actual Result | Pass/Fail |
| --- | --- | --- | --- |
| `index.html` | No errors or warnings requiring a code change | Official W3C Nu result: 0 errors, 0 warnings on 12 June 2026 | Pass |
| `aboutme.html` | No errors or warnings requiring a code change | Official W3C Nu result: 0 errors, 0 warnings on 12 June 2026 | Pass |
| `projects.html` | No errors or warnings requiring a code change | Official W3C Nu result: 0 errors, 0 warnings on 12 June 2026 | Pass |
| `contact.html` | No errors or warnings requiring a code change | Official W3C Nu result: 0 errors, 0 warnings on 12 June 2026 | Pass |

Add validator screenshots under `assets/images/readme/validation/` and update
this table with the date and result.

## CSS Validation

Submit `assets/css/style.css` to the
[W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/).

| File | Expected Result | Actual Result | Pass/Fail |
| --- | --- | --- | --- |
| `assets/css/style.css` | No CSS validation errors | Official Jigsaw result: valid CSS, 0 errors on 12 June 2026 | Pass |

Jigsaw also returned informational notices for CSS custom properties, which it
cannot evaluate statically, and vendor extensions. These are not validation
errors.

## Lighthouse Testing

Run Lighthouse against the final deployed homepage in Chrome DevTools.

| Category | Target | Final Score |
| --- | --- | --- |
| Performance | 90 or higher where practical | 81 locally |
| Accessibility | 95 or higher | 100 |
| Best Practices | 95 or higher | 100 |
| SEO | 95 or higher | 100 |

The performance score is primarily affected by the large hero brand image.
Retest on the deployed host, where caching and delivery may change the result.
Save the final deployed screenshot as
`assets/images/readme/validation/lighthouse-home.png`.

## Bugs Found and Fixed

| Bug | Effect | Fix | Retest |
| --- | --- | --- | --- |
| Bootstrap and JavaScript were required for the original navigation and interactions | Did not match the HTML/CSS-only brief | Replaced them with semantic HTML, CSS Grid, Flexbox, and visible static content | Pass |
| Projects markup contained an unclosed nested article | Risked invalid HTML and unpredictable layout | Rebuilt all project articles with valid nesting | Pass |
| Project names and descriptions did not match visible media | Reduced trust and project clarity | Matched summaries to real project media and labelled concept work | Pass |
| Backslashes appeared in web paths | Could break paths outside Windows | Replaced paths with forward slashes | Pass |
| Image filename contained a space and spelling error | Weakened naming consistency | Renamed to `mindweek-dashboard.png` | Pass |
| Contact form did not deliver messages | Created misleading interaction feedback | Replaced form with a verified direct email route | Pass |
| Background video created motion and page weight | Reduced performance and user control | Replaced with a static responsive image | Pass |
| Icon font links depended on an external library | Added unnecessary dependency and hid visible link names | Replaced icons with visible text links | Pass |
| Old evidence described a different build | Could mislead an assessor | Removed stale reports and screenshots | Pass |

## Known Issues and Remaining Evidence

- Validator result-page screenshots still need to be captured.
- Lighthouse must be rerun against the final deployed version.
- Edge, Firefox, and Safari checks should be recorded where available.
- The live deployment must be compared with the final local build after push.
- Email delivery depends on the visitor having an email application configured;
  GitHub and LinkedIn provide alternative contact routes.
