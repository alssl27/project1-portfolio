# Distinction Readiness Checklist

This checklist records the state of the final HTML/CSS implementation. Validator
screenshots, final deployment, and unavailable browser evidence remain manual
tasks.

## Pass Criteria

| Area | Status | Evidence |
| --- | --- | --- |
| Clear purpose and target audience | Ready | Homepage identifies Sarah, her role, location, value, and next actions. README defines users and goals. |
| Three or more pages/sections | Ready | Four public pages: Home, About, Projects, and Contact. |
| Navigation and structured layout | Ready | Consistent semantic header, navigation, main content, and footer. |
| Accessibility | Ready locally | Skip links, landmarks, heading order, alt text, focus states, contrast, descriptive links, and native controls. |
| Responsive design | Ready locally | Custom Grid, Flexbox, `clamp()`, and media queries tested at required widths. |
| Semantic HTML | Ready locally | Sections, articles, aside, lists, definition lists, headings, and links match content purpose. |
| Valid HTML | Ready | Official W3C Nu result: 0 errors and 0 warnings on all four pages. |
| Valid CSS | Ready | Official Jigsaw result: valid CSS with 0 errors. |
| External links | Ready | HTTP links open in new tabs with `noopener noreferrer`. |
| Clear project-specific content | Ready | All copy is specific to Sarah and visible project media. |
| External CSS | Ready | One stylesheet linked in every page head. |
| File naming and structure | Ready | Lowercase descriptive asset names and grouped asset folders. |
| README and deployment instructions | Ready | README covers purpose, UX, features, testing, deployment, credits, and version control. |
| Testing documentation | Ready locally | TESTING records manual, responsive, browser, accessibility, validator, and bug checks. |
| No broken internal links | Ready locally | Local Node checker verifies referenced files. |
| Deployment match | Manual evidence needed | Push final code and compare the custom domain with local output. |

## Merit Criteria

| Area | Status | Evidence |
| --- | --- | --- |
| Clear information flow | Ready | Pages answer identity, experience, work, and contact questions in order. |
| Purpose immediately evident | Ready | First viewport contains role, value statement, and primary actions. |
| User stories implemented | Ready | README maps recruiter, client, keyboard, mobile, contact, and assessor stories to features. |
| Project rationale | Ready | Target audience, owner goals, UX choices, colour, typography, and imagery are documented. |
| Development lifecycle | Ready | README covers planning evidence, implementation, testing, deployment, and future work. |
| Bugs and remaining issues | Ready | README and TESTING contain bug logs and honest pending evidence. |
| Incremental Git history | Partially controllable | Existing history is retained. Use clear final commits and do not rewrite history. |

## Distinction Characteristics

| Characteristic | Status | Evidence |
| --- | --- | --- |
| Publishable visual presentation | Ready locally | Consistent neon identity, controlled content width, clear hierarchy, and responsive cards. |
| Real-world purpose | Ready | Portfolio supports employment, collaboration, and small-business enquiries. |
| Craftsmanship | Ready locally | Framework-free custom code, consistent naming, honest content, reduced dependencies, and relevant media. |
| Strong accessibility | Ready locally | No JavaScript dependency, keyboard-visible controls, semantic structure, and reduced-motion support. |
| Excellent responsiveness | Ready locally | Five target widths checked with no document overflow. |
| No obvious errors | Ready locally | Static checks and official HTML/CSS validation pass. |
| Comprehensive final evidence | Manual evidence needed | Add validator screenshots, deployed Lighthouse, live deployment, and remaining browser results. |

## Final Manual Tasks

- [ ] Save validator screenshots under `assets/images/readme/validation/`.
- [ ] Run Lighthouse on the final deployed homepage.
- [ ] Test Microsoft Edge, Firefox, and Safari where available.
- [ ] Push the final commit and wait for GitHub Pages deployment.
- [ ] Compare the deployed site with the final local site.
- [ ] Update pending rows in `TESTING.md`.
