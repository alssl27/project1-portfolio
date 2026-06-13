# Layout Reference

These diagrams document the final information architecture created during the
June 2026 project audit. They are post-audit references, not original
pre-development wireframes.

## Desktop

```text
┌──────────────────────────────────────────────────────────────┐
│ Logo                      Home About Projects Contact        │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  Eyebrow                                                     │
│  Main page heading                         Brand imagery      │
│  Supporting introduction                                    │
│  [Primary action] [Secondary action]                         │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│  Section heading                                             │
│  [Card]                 [Card]                 [Card]         │
├──────────────────────────────────────────────────────────────┤
│  Text / case study                       Relevant media       │
├──────────────────────────────────────────────────────────────┤
│  Call to action                              [Action]         │
├──────────────────────────────────────────────────────────────┤
│  Copyright                         GitHub LinkedIn Email      │
└──────────────────────────────────────────────────────────────┘
```

## Mobile

```text
┌──────────────────────────┐
│         Logo             │
│ Home About Projects Cont.│
├──────────────────────────┤
│      Brand imagery       │
│ Eyebrow                  │
│ Main heading             │
│ Supporting text          │
│ [Primary action]         │
│ [Secondary action]       │
├──────────────────────────┤
│ Section heading          │
│ [Card]                   │
│ [Card]                   │
│ [Card]                   │
├──────────────────────────┤
│ Relevant media           │
│ Text / case study        │
├──────────────────────────┤
│ Call to action           │
│ [Action]                 │
├──────────────────────────┤
│ Copyright                │
│ GitHub LinkedIn Email    │
└──────────────────────────┘
```

## Responsive Decisions

- Navigation remains visible instead of depending on a scripted hamburger.
- Multi-column content becomes one column before text or media becomes cramped.
- Buttons become full width below 480px.
- Project media appears before project detail on small screens.
- Content width is capped on large displays to preserve comfortable line length.
