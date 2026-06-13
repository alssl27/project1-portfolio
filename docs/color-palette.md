# Colour Palette

The portfolio uses a dark base with neon accents to retain Sarah's existing
personal brand while keeping long-form content readable.

| Token | Hex | Purpose |
| --- | --- | --- |
| Background | `#08070d` | Main page background |
| Surface | `#11101a` | Alternating section background |
| Raised surface | `#191725` | Cards and panels |
| Text | `#f8f7fb` | Main text |
| Muted text | `#c8c5d0` | Supporting copy |
| Pink | `#ff4fd8` | Primary buttons, brand, and highlights |
| Cyan | `#73ddf2` | Eyebrows, terms, and secondary highlights |
| Border | `#3c374b` | Panel boundaries |
| Focus | `#fff275` | Keyboard focus outline |

## Accessibility Use

- Main and muted text are placed on very dark backgrounds.
- Pink and cyan are not used as the only way to identify an action or state.
- Active navigation also uses `aria-current`, a filled background, and an
  underline-like inset border.
- Links remain underlined in body copy.
- Keyboard focus uses a separate yellow outline rather than the brand colours.
- Validator and Lighthouse evidence should be added after final deployment.
