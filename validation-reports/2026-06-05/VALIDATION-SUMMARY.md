# Validation Summary (2026-06-05)

## Official W3C HTML (Nu Validator)

The four root HTML pages were posted to the official W3C Nu Validator API after
the final local edits.

| File | Errors | Notes |
| --- | ---: | --- |
| `index.html` | 0 | Informational messages only. |
| `aboutme.html` | 0 | Informational messages only. |
| `projects.html` | 0 | Informational messages only. |
| `contact.html` | 0 | Informational messages only. |

Result: all root HTML pages returned **0 errors**.

## Official Jigsaw CSS Validator

Validation method: multipart file upload of `assets/css/style.css` to the
official Jigsaw CSS Validator using the CSS3 SVG profile.

Result:

- Errors: `0`
- Validity: `true`
- Warnings: validator caveats only, mainly CSS variables, imported fonts, and
  static colour-cascade checks.

## Lighthouse

Local Lighthouse run against `http://localhost:8000/index.html`.

| Category | Score |
| --- | ---: |
| Performance | 75 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

## Artifacts Saved

- `index.html.w3c.json`
- `aboutme.html.w3c.json`
- `projects.html.w3c.json`
- `contact.html.w3c.json`
- `html-summary.json`
- `style.css.jigsaw.json`
- `css-summary.json`
- `lighthouse-index.json`
