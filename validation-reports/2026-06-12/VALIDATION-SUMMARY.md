# Validation Summary - 12 June 2026

## W3C HTML

The final source was submitted directly to the official W3C Nu HTML Checker API.

| File | Errors | Warnings | Result |
| --- | ---: | ---: | --- |
| `index.html` | 0 | 0 | Pass |
| `aboutme.html` | 0 | 0 | Pass |
| `projects.html` | 0 | 0 | Pass |
| `contact.html` | 0 | 0 | Pass |

## W3C Jigsaw CSS

`assets/css/style.css` was uploaded to the official W3C Jigsaw CSS Validator
using the CSS3 profile.

- Validity: `true`
- Errors: `0`
- Informational warnings: `68`

The informational notices are generated because Jigsaw does not statically
evaluate CSS custom properties. It also identifies a browser-specific property
and system font names as vendor extensions. These notices do not make the
stylesheet invalid.

## Lighthouse

Local mobile-mode Lighthouse results for `index.html`:

| Category | Score |
| --- | ---: |
| Performance | 81 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

Raw local Lighthouse data is stored in `lighthouse-local.json`. Performance
should be rerun on the final deployed site because hosting and caching affect
the result.

## Remaining Evidence

- Capture screenshots of the final HTML and CSS validator result pages.
- Capture a screenshot of Lighthouse on the final deployed site.
- Add those images under `assets/images/readme/validation/`.
