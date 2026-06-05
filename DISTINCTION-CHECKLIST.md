# Distinction Checklist

This checklist is based on the supplied Gateway Qualifications Level 5 Diploma
in Web Application Development, Unit 1: User Centric Front End Development
grading pages. The target standard is distinction, which requires all pass and
merit criteria plus the distinction performance characteristics.

## Pass Criteria

| Criterion | Requirement from PDF | Current status | Evidence and changes made | Remaining task |
| --- | --- | --- | --- | --- |
| 1.1 | Design a website that incorporates a main navigation menu and a structured layout. | Meets locally | Four root pages use consistent `header`, `nav`, `main`, and `footer` landmarks with active navigation. | Retest after final deployment. |
| 1.2 | Design a website that meets accessibility guidelines, including contrast and planned alternative text for non-text elements. | Meets locally | Strengthened foreground panel opacity, retained skip links/focus states, meaningful image alt text, decorative empty alt text, labelled form fields, and dynamic `aria-invalid`. | Manual screen-reader check recommended. |
| 1.3 | Organise information using UX principles, with headers conveying structure and information easy to find by priority. | Meets locally | Homepage identity and CTAs come first, About covers skills/profile, Projects holds case studies, Contact holds the form. | None beyond final review. |
| 1.4 | Ensure foreground information is never distracted by backgrounds. | Meets locally | Increased About/Projects/Contact panel opacity and kept homepage overlay dark. | Check deployed pages after push. |
| 1.5 | Include graphics consistent in style and colour. | Meets locally | Project/profile imagery uses consistent framing, neon accent palette, and shared card treatment. | None. |
| 1.6 | Design the site to allow the user to initiate and control actions such as pop-ups and audio/video. | Meets locally | Homepage video now starts paused; user activates Play motion. Project dialogs open only from buttons. Videos use native controls. | Reduced-motion preference retest recommended. |
| 2.1 | Create a website of at least 3 pages or 3 separate page areas matching the design and stated purpose. | Meets locally | Four root pages: `index.html`, `aboutme.html`, `projects.html`, `contact.html`. | None. |
| 2.2 | Write custom CSS that passes the official Jigsaw validator with no issues. | Meets locally | `validation-reports/2026-06-05/style.css.jigsaw.json` reports valid CSS with 0 errors. | Rerun only after CSS edits. |
| 2.3 | Write custom HTML that passes the official W3C validator with no issues. | Meets locally | `validation-reports/2026-06-05/*.w3c.json` report 0 errors for all four root pages. | Rerun only after HTML edits. |
| 2.4 | Incorporate images of sufficient resolution so they do not appear pixelated or stretched. | Meets locally | Optimised project images are 1400x764; profile images are 960x960/320x320; CSS uses stable aspect ratios and `object-fit`. | None. |
| 2.5 | Code all external links to open in a separate tab. | Meets locally | Social and GitHub links use `target="_blank"` plus `rel="noopener noreferrer"`. | External link availability can be checked manually. |
| 2.6 | Use media queries, CSS Grid, or Bootstrap so layout changes appropriately across device sizes. | Meets locally | Bootstrap navbar, CSS Grid project/skills layouts, and media queries are implemented. | Retest deployed mobile/tablet/desktop. |
| 2.7 | Use semantic markup to structure HTML code. | Meets locally | Pages use landmarks, sections, articles, headings, lists, labels, buttons, and forms. | None. |
| 2.8 | Present clear site-specific content rather than Lorem Ipsum placeholder text. | Meets locally | Portfolio content is specific to Sarah Collins, case-study concepts, skills, and contact routes. | Replace any future placeholder content before submission. |
| 2.9 | Implement clear navigation so users find resources intuitively. | Meets locally | Shared nav links to Home, About Me, Projects, and Contact. Homepage also links directly to Projects and Contact. | None. |
| 3.1 | Write a README explaining purpose, user value, and deployment procedure. | Meets locally | README includes purpose, target users, user stories, value, deployment, testing, and criteria alignment. | Add final deployed retest note after push. |
| 3.2 | Insert screenshots of the finished project aligned to relevant user stories. | Meets locally | Fresh screenshots are in `output/playwright/`, including homepage, mobile Projects, modal, and contact states. | Capture deployed screenshots after push if required. |
| 3.3 | Attribute external code sources in comments and README. | Meets locally | CDN/library comments are in HTML; README credits Bootstrap, Font Awesome, Google Fonts, Devicon, React/Vite/Tailwind/Framer/Lucide. | None. |
| 3.4 | Clearly separate custom code from external code. | Meets locally | Custom root site code is in HTML, `assets/css/style.css`, and `assets/js/script.js`; external libraries use CDN/dependencies. | None. |
| 3.5 | Organise HTML and CSS into well-defined and commented sections. | Meets locally | CSS has sections for global styles, navigation, homepage, About, Projects, Contact, responsive, and reduced motion. | None. |
| 3.6 | Place CSS in external files linked in each HTML head. | Meets locally | All root pages link `assets/css/style.css` in the `head`. | None. |
| 3.7 | Write readable code with consistent indentation and limited repeated blank lines. | Meets locally | Root HTML/CSS/JS use consistent indentation; local static checker guards against common issues. | None. |
| 3.8 | Name files consistently and descriptively without spaces or capitalisation. | Meets locally | Project-facing assets use lowercase hyphenated names; docs/tools are named clearly. | Keep future files lowercase/hyphenated. |
| 3.9 | Group files in directories by file type. | Meets locally | Assets are grouped under `assets/css`, `assets/js`, `assets/images`, `assets/videos`, and `assets/resume.pdf`; docs/tools/output/validation have folders. | None. |
| 4.1 | Use cloud-based git version control throughout development. | Mostly meets | Git repository and GitHub remote are present; GitHub Pages workflow exists. | Commit and push today’s changes. |
| 4.2 | Document development process through descriptive commit messages. | Mostly meets | Git history exists with descriptive messages, though some commits are broad. | Use small, clear commits for final changes. |
| 4.3 | Use consistent markdown formatting in a well-structured README with few grammar errors. | Meets locally | README is structured with tables, code blocks, headings, lifecycle, testing, deployment, and credits. | Final proofread before submission. |
| 5.1 | Design and implement manual testing procedures for functionality, usability, and responsiveness. | Meets locally | `TESTING.md` includes manual test cases and expected/actual results. | Add final deployed/browser results. |
| 5.2 | Document testing in README or a separate file. | Meets locally | README summarizes testing; `TESTING.md` contains detailed evidence. | None. |
| 5.3 | Deploy final code to a cloud platform and test it matches development version. | Pending final push | GitHub Pages workflow and live URL are documented. | Commit, push, wait for deployment, then compare live vs local. |
| 5.4 | Remove commented-out code before final push/deploy. | Meets locally | Static checker looks for inline custom code and common unfinished markers; no commented-out custom blocks found in root pages. | Recheck before final commit. |
| 5.5 | Ensure there are no broken internal links. | Meets locally | `node tools/check-static-site.js` passed on 2026-06-05 after fixing broken video references. | Rerun after any path edits. |

## Merit Criteria

| Criterion | Requirement from PDF | Current status | Evidence and changes made | Remaining task |
| --- | --- | --- | --- | --- |
| M(i) | Design a website with clear information flow and unambiguous interaction feedback. | Meets locally | Homepage journey, project dialogs, contact validation, success message, active nav, and focus states provide clear feedback. | Manual keyboard Tab-cycle check recommended. |
| M(ii) | Implement a website whose purpose is immediately evident to a new user without documentation. | Meets locally | Homepage now states Sarah's role, value, and primary actions in the first viewport. | None. |
| M(iii) | Implement a website that solves user story demands and expectations. | Meets locally | README user stories map recruiters, assessors, keyboard users, mobile users, and motion-sensitive users to implemented features. | None. |
| M(iv) | Commit often for individual features/fixes with clear messages. | Partially meets | Existing history is descriptive but includes some broad commits. | Make the final submission commit small and descriptive; do not rewrite history. |
| M(v) | Present a clear project rationale in README for target audience and user stories. | Meets locally | README covers purpose, value, target users, user stories, UX rationale, and criteria alignment. | None. |
| M(vi) | Document testing fully, including bugs found/fixed and remaining bugs. | Meets locally | `TESTING.md` and README list bugs fixed, retests, pending browser/deployment checks, and static-form limitation. | Add final deployment/browser notes. |
| M(vii) | Fully document the development lifecycle in README. | Meets locally | README includes planning, design, implementation, testing, deployment, and review lifecycle steps. | None. |

## Distinction Characteristics

| Distinction characteristic from PDF | Current status | Evidence and changes made | Remaining task |
| --- | --- | --- | --- |
| Clear, justified rationale for a real-world application and comprehensive explanation of how it will be developed. | Meets locally | README documents target users, user stories, UX rationale, features, lifecycle, testing, deployment, and criteria alignment. | Final proofread. |
| Fully functioning, interactive web application using at least one advanced technique such as CSS media queries. | Meets locally | Uses responsive media queries, CSS Grid, Bootstrap navbar, modal focus management, user-initiated video, and client-side form validation. | None. |
| Publishable professional UI and interaction adhering to current practice. | Meets locally | Polished first viewport, consistent neon identity, stronger contrast panels, clear CTAs, accessible controls, refreshed screenshots. | Check deployed URL after push. |
| No obvious code errors. | Meets locally | Static checker passed, JS syntax passed, CSS parse passed, W3C/Jigsaw passed, Chromium console showed no errors. | Rerun checks after any edits. |
| Any breach of accepted UX/design/code practice is justified and appropriate. | Meets locally | README documents the static form limitation and notes the separate React prototype is not the primary deployed site. | Keep limitations honest in submission. |
| Project matches the design and demonstrates craftsmanship in code. | Meets locally | Externalised custom CSS/JS, semantic HTML, grouped assets, organised CSS sections, defensive form handling, and validation evidence. | None. |
| Code is clearly signposted and testing is documented at all stages. | Meets locally | CSS section comments, README lifecycle, `TESTING.md`, validation reports, Lighthouse report, and assessment evidence map. | Add final live retest. |
| Full evidence of end testing and evaluation of bugs remaining. | Mostly meets | Local end testing and reports are documented; remaining bugs/risks are listed. | Complete live deployment match and cross-browser checks. |
| Development and testing process is evident and justified through commit messages. | Mostly meets | Git history exists and README gives final commit guidance; some broad commits remain as a risk. | Use clear final commits. |
| README gives clear, detailed rationale covering all lifecycle stages. | Meets locally | README has purpose, user stories, UX rationale, features, testing, bugs, deployment, lifecycle, credits, and criteria alignment. | None. |

## Craftsmanship Amplification

| Area | Requirement summary from PDF | Current status | Evidence | Remaining task |
| --- | --- | --- | --- | --- |
| Information hierarchy | Clear headers, organised content, resources easy to find, priority-based presentation. | Meets locally | Single H1 per page, clear page order, project cards, case-study dialog sections. | None. |
| User control | Interactions produce clear feedback; media avoids aggressive popups/autoplay. | Meets locally | Video starts paused, modal is button-opened, form confirms valid submission, no audio autoplay. | None. |
| Consistency | Design and interactivity consistent across pages. | Meets locally | Shared navbar/footer, typography, colour tokens, cards, buttons, focus styles. | None. |
| Confirmation | User actions confirmed where appropriate. | Meets locally | Active nav state, modal open/close state, form validation, success alert, button state for motion. | None. |
| Accessibility | Clear conformity across pages and interactivity. | Meets locally | Skip links, labels, alt text, focus states, reduced motion, keyboard modal handling, Lighthouse Accessibility 100. | Manual screen-reader check recommended. |
| Naming conventions | File/class/function names descriptive and consistent; file names lowercase/no spaces. | Meets locally | Root files and assets are descriptive; JS functions indicate purpose. | Keep future files consistent. |
| File structure | Files grouped by type and custom/external code separated. | Meets locally | `assets/css`, `assets/js`, `assets/images`, `assets/videos`, docs, tools, validation, output. | None. |
| Readability | Consistent indentation, semantic markup, external CSS, no unnecessary blank-line blocks. | Meets locally | Root files are readable and validator-clean. | None. |
| Defensive design | Potential user errors handled. | Meets locally | Contact form validates required fields, email, length, first invalid focus, `aria-invalid`; static form avoids false backend claim. | None. |
| Comments | Custom files include clear relevant comments explaining code segments. | Meets locally | CSS section comments; HTML external-source comments; JS function names are self-explanatory. | Add comments only if future complexity grows. |
| Compliant code | HTML/W3C, CSS/Jigsaw, JavaScript linter/syntax. | Meets locally | W3C 0 errors, Jigsaw valid 0 errors, `node --check` passed. | Optional JS linter if assessor asks. |
| Robust code | No logic errors found; user action errors handled; inputs validated. | Meets locally | Chromium smoke tests passed modal, motion, invalid form, valid form; no console errors. | Manual cross-browser retest. |
| Real-world application | Site-specific content aligned to user stories. | Meets locally | Portfolio-specific copy, case studies, user stories, project evidence, contact route. | None. |
| Testing procedures | Comprehensive coverage followed; noticeable errors corrected or documented. | Meets locally | `TESTING.md`, validation reports, Lighthouse, screenshots, bug log. | Add live deployment and browser results. |
| Version control | Git used effectively with small, descriptive commits. | Partially meets | Git/GitHub present; final guidance added. | Make final commits small and descriptive. |
| Documentation | README includes purpose, UX design work, wireframes/mockups if created, attribution, testing, deployment, commit process. | Mostly meets | README includes purpose, UX rationale, testing, deployment, credits, lifecycle. Existing screenshots are included; no separate wireframes were found. | Add wireframes/design notes only if you have them; otherwise do not invent them. |
| Spelling and grammar | Documentation and UI have few spelling/grammar errors. | Meets locally | Updated copy uses clear professional language. | Final proofread. |

## Manual Tasks Before Submission

1. Commit today’s changes with a clear message, for example
   `fix: polish portfolio for distinction evidence`.
2. Push to GitHub and wait for the GitHub Pages workflow to complete.
3. Open the live URL and compare it with `http://localhost:8000`.
4. Retest navigation, Projects modal, motion button, contact validation, resume
   download, and internal links on the deployed site.
5. Test in Edge, Firefox, and Safari if available; record results in
   `TESTING.md`.
6. Take final deployed screenshots if your assessor expects live-site evidence.
7. Rerun W3C/Jigsaw only if you edit HTML or CSS again.
8. Do a final README/TESTING proofread and remove any new temporary files.

## Final Submission Checklist

- [ ] Local static checker passes.
- [ ] JavaScript syntax check passes.
- [ ] Official W3C HTML validation shows 0 errors.
- [ ] Official Jigsaw CSS validation shows valid CSS with 0 errors.
- [ ] Lighthouse/accessibility evidence is saved.
- [ ] README explains purpose, users, features, testing, deployment, credits,
      lifecycle, and criteria alignment.
- [ ] TESTING documents manual checks, bugs fixed, remaining risks, and final
      deployed retests.
- [ ] Project has been committed and pushed.
- [ ] GitHub Pages deployment has completed.
- [ ] Live deployment matches the local site.
- [ ] Final browser checks are recorded.
