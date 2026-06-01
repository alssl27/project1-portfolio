# Assessment Evidence Map

This document maps the portfolio to the User Centric Frontend Development distinction expectations. It is written for assessors so the strongest evidence is easy to find.

## Qualification Aim

The project is a static frontend portfolio for Sarah Collins. It demonstrates responsive layout, semantic HTML, custom CSS, JavaScript interaction, documentation, accessibility consideration, and manual testing evidence.

## Pass and Merit Evidence

| Criteria area | Evidence in project |
| --- | --- |
| Main navigation and structured layout | `index.html`, `aboutme.html`, `projects.html`, and `contact.html` share a consistent navbar, footer, and main landmark. |
| Accessibility guidelines | Skip links, labelled form fields, visible focus states, descriptive alternative text, decorative image hiding, motion control, reduced-motion CSS, and semantic headings are implemented. |
| UX information hierarchy | The homepage identifies Sarah and the call to action immediately; Projects uses a clear intro plus case-study cards; About groups profile, skills, competencies, and qualifications. |
| User control | The homepage video can be paused; project dialogs are opened by the user, closed by button, overlay click, or Escape; audio does not autoplay. |
| Responsive design | Bootstrap, CSS Grid, media queries, and flexible image containers are used across the site. |
| Clear purpose and user-story alignment | `README.md` documents target users, user stories, UX rationale, and manual testing. Project cards explain the user problem, target user, decisions, accessibility, testing, and outcome. |
| Maintainability | Custom CSS is in `assets/css/style.css`; custom JavaScript is in `assets/script.js/script.js`; external libraries are attributed in `README.md`. |
| Testing and deployment documentation | `README.md` and `TESTING.md` document test procedures, known gaps, and deployment checks. |

## Distinction Evidence

| Distinction expectation | Implemented evidence |
| --- | --- |
| Clear, justified rationale for a real-world application | `README.md` explains why the portfolio exists, who it serves, what users need, and how the design supports those needs. |
| Professional-grade user interface and interaction | Consistent neon visual identity, structured cards, responsive layout, visible feedback, modal case studies, motion controls, and validation feedback. |
| Advanced technique | CSS media queries, CSS Grid, Bootstrap responsive components, JavaScript modal behaviour, reduced-motion handling, and local validation feedback. |
| Positive user response and clear feedback | Hover/focus states, modal open/close feedback, contact validation, success messaging, and clear action labels. |
| Accessibility across pages and interactivity | Skip links, semantic page regions, accessible modal attributes, meaningful labels, aria-live confirmation, focus return, and high-contrast focus indicators. |
| Defensive design | Required contact fields use browser validation; static contact messaging avoids claiming a backend delivery that does not exist; missing project image references were removed. |
| Comprehensive testing | `TESTING.md` records manual procedures and expected results; README records known validation and deployment evidence still to capture. |
| Few spelling/grammar errors | Placeholder project labels were replaced with site-specific case study text. Documentation is structured and written in consistent Markdown. |

## User Stories Traceability

| User story | Where it is evidenced |
| --- | --- |
| As a recruiter, I want to understand Sarah's role quickly. | Homepage hero, resume download, About page profile. |
| As an assessor, I want UX decisions and testing evidence. | Projects case-study modal, `README.md`, `TESTING.md`, this evidence map. |
| As a keyboard user, I want to use the site without a mouse. | Skip links, focus states, button-based modal triggers, Escape close, focus return. |
| As a mobile user, I want the site to reflow cleanly. | Responsive grids, media queries, Bootstrap navbar collapse, flexible image containers. |
| As a motion-sensitive user, I want control over animated media. | Homepage pause/play motion button and reduced-motion CSS. |

## Remaining Submission Evidence to Capture

- Official W3C HTML validator result.
- Official Jigsaw CSS validator result.
- Screenshots of desktop homepage, mobile projects page, modal case study, and contact validation.
- Final deployed URL and deployment retest notes.
