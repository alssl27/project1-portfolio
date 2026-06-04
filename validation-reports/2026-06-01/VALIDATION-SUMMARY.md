# Validation Summary (2026-06-01)

## Official W3C HTML (Nu Validator)

| File | Errors | Notes |
| --- | ---: | --- |
| `index.html` | 0 | infos: 11 |
| `aboutme.html` | 0 | infos: 10 |
| `projects.html` | 0 | infos: 13 |
| `contact.html` | 0 | infos: 10 |

Result: all four HTML pages returned **0 errors** from the official W3C validator endpoint.

## Official Jigsaw CSS Validator

Validated URL:
`https://cdn.jsdelivr.net/gh/alssl27/project1-portfolio@codex/css-validation-20260601-fix/assets/css/style.css`

Result:
- Errors: `0`
- Warnings: `7`
- Validity: `true`

Notes:
- Jigsaw returned HTTP 500 for `text=` and POST-body validation modes during this run.
- URL-based validation via jsDelivr succeeded and produced official JSON output.
- Most warnings are non-blocking static-check limitations for CSS variables (`5` instances).

## Artifacts Saved

- `index.html.w3c.json`
- `aboutme.html.w3c.json`
- `projects.html.w3c.json`
- `contact.html.w3c.json`
- `html-summary.json`
- `style.css.jigsaw.json`
- `style.css.source-url.txt`
- `css-summary.json`
