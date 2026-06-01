# Sarah Collins Portfolio

Sarah Collins Portfolio is a static frontend portfolio for recruiters, assessors, and collaborators who need to understand Sarah's skills, project evidence, and contact route quickly. The site is built with semantic HTML, custom CSS, Bootstrap, and JavaScript.

## Purpose and Value

The project responds to a real-world portfolio need: a new visitor should be able to identify who Sarah is, what she builds, view evidence of work, download a resume, and make contact without reading supporting documentation.

Target users:

- Recruiters checking technical fit and contact details.
- Course assessors reviewing frontend implementation, accessibility, and documentation evidence.
- Collaborators looking for project style, strengths, and social links.

User stories:

- As a recruiter, I want the homepage to show Sarah's name, role, and resume link immediately so I can decide whether to continue.
- As an assessor, I want project case studies to explain users, UX choices, accessibility, and testing so I can judge user-centred design evidence.
- As a keyboard user, I want clear focus states, skip links, and keyboard-operable dialogs so I can use the site without a mouse.
- As a mobile visitor, I want the layout to reflow cleanly so I can browse projects and submit the contact form on a small screen.
- As a motion-sensitive user, I want control over background video motion so I can pause it.

## UX Rationale

Information hierarchy is intentionally simple: global navigation, immediate identity on the homepage, a profile/resume page, project evidence, and contact. The projects page now uses case-study cards instead of placeholder project entries so the purpose is clear without extra explanation.

Interaction decisions:

- The project modal confirms user action with a visible overlay, close button, Escape-key support, and focus return.
- The contact form validates required fields before showing a success message.
- The homepage video is muted and includes a motion control, with reduced-motion preference support.
- Consistent neon accents are used for links, buttons, focus states, and feedback so interactions feel connected across pages.

Accessibility decisions:

- Semantic landmarks and headings structure each main page.
- Skip links allow keyboard users to bypass navigation.
- Images use descriptive alternative text where meaningful; decorative avatars are hidden from assistive technology.
- Focus indicators are visible and high contrast.
- The form uses labels, built-in validation, and an announced success message.
- External social links open in new tabs and use `rel="noopener noreferrer"`.

## Features

- Four-page static portfolio: Home, About Me, Projects, Contact.
- Responsive navigation and CSS Grid/Bootstrap layouts.
- Project case-study dialog with keyboard and mouse support.
- Client-side contact validation with confirmation feedback.
- Downloadable resume link.
- Social links in the footer.
- Reduced-motion-aware homepage video control.

## Screenshots

The project includes visual evidence in `assets/images/Screenshot 2026-05-12 181333.png`.

Suggested assessor evidence to add before final submission:

- Homepage desktop screenshot.
- Projects page mobile screenshot showing the responsive card stack.
- Contact form screenshot showing validation feedback.

## Project Structure

- `index.html` - Homepage and resume call to action.
- `aboutme.html` - Profile, skills, qualifications, and resume download.
- `projects.html` - UX-focused project case studies.
- `contact.html` - Contact form and validation feedback.
- `ASSESSMENT-EVIDENCE.md` - Criteria-to-evidence map for assessors.
- `TESTING.md` - Manual testing plan, bug fix log, and remaining submission checks.
- `assets/css/style.css` - Custom styling, responsive rules, accessibility polish.
- `assets/script.js/script.js` - Typewriter effect, modal interaction, motion toggle, reading enhancement.
- `assets/images/` - Portfolio images, video, and project media.
- `assets/resume.pdf` - Downloadable resume.
- `aboutme-react/` - Separate React prototype/subproject.

## External Code and Assets

Custom HTML, CSS, and JavaScript are written for this project. External libraries and hosted assets are linked from CDNs:

- Bootstrap: layout, navbar, responsive utilities, and form styles.
- Font Awesome: social and UI icons.
- Google Fonts: Orbitron and Inter typography.
- Devicon: technology logos on the About page.

Larger third-party dependencies for the separate React prototype are listed in `aboutme-react/package.json`.

## Development Lifecycle

1. Define the audience and user stories.
2. Build the static page structure and navigation.
3. Add visual identity, project media, and responsive styling.
4. Add JavaScript interactions for typewriter text, case-study dialogs, motion control, and form feedback.
5. Test navigation, responsiveness, form validation, media behaviour, and internal links.
6. Document design rationale, testing, deployment, and remaining gaps.

## Manual Testing

Full testing evidence is documented in `TESTING.md`.

| Area | Procedure | Expected result | Status |
| --- | --- | --- | --- |
| Navigation | Open each navbar link from desktop and mobile widths. | Home, About Me, Projects, and Contact load without broken internal links. | Pass |
| Responsiveness | Check layouts below 768px, around tablet width, and desktop width. | Cards stack on mobile, text stays within containers, navigation remains usable. | Pass |
| Project modal | Open a case study with the button, close with button, overlay click, and Escape. | Dialog opens, content is readable, focus returns after closing. | Pass |
| Contact form | Submit empty form, invalid email, then valid data. | Browser validation prevents invalid input; valid input shows confirmation. | Pass |
| Motion control | Use the homepage motion button. | Background video pauses and resumes; reduced-motion users start paused. | Pass |
| Assets | Check referenced local images and resume file. | Referenced local media files exist. | Pass |
| Build check | Run the React prototype production build. | Vite build completes successfully. | Pass |

Known issue log:

- Official W3C HTML and Jigsaw CSS validation require the public validator services or equivalent tooling. Local structural checks were run, but official validator screenshots/exports should be captured before submission.
- Some image filenames contain spaces and capital letters. They work locally, but future asset naming should avoid spaces for cross-platform consistency.

## Deployment

This is a static site and can be deployed to GitHub Pages, Netlify, Vercel, or any static host.

GitHub Pages procedure:

1. Push the repository to GitHub.
2. Open repository settings.
3. Enable Pages from the main branch and project root.
4. Visit the published URL.
5. Re-test navigation, media, form validation, and responsive layouts against the deployed site.

Local preview:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Future Improvements

- Capture final validator evidence from the official W3C and Jigsaw validators.
- Replace screenshot/video filenames that contain spaces with lowercase hyphenated names and update references.
- Add a real backend or hosted form service if messages need to be delivered rather than confirmed locally.
- Add final deployed URL and deployment test results after publishing.
