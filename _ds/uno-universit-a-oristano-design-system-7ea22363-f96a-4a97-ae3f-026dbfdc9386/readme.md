# UNO — Università a Oristano · Design System

The brand and UI system for **UNO**, the public university of **Oristano** (Sardinia, Italy), built around the **Campagna Iscrizioni 26** — the 2026/27 student-enrollment campaign.

UNO is a small, human-scale university on the central-west coast of Sardinia. Its identity is warm, editorial and confident: a custom **serif wordmark**, a single hard-working sans (**Montserrat**), a **sand / teal / night-blue** core palette, a signature rounded **wave ("onda")** motif, and a set of six **course colours + bespoke pictograms**, one per degree programme.

> **Language:** the brand and all sample copy are in **Italian**. Write UI copy in Italian unless asked otherwise.

---

## Sources

This system was reconstructed from the official brand asset sheet supplied by the user:

- `uploads/AssetsIA-01…08.svg` — brand manual plates: logo, principal palette, course names + icons, course palette, the graphic element, the pattern, and two typographic specimens (light & dark).
- `uploads/Montserrat (1).zip` — the Montserrat type family (variable + static weights + OFL licence).

No codebase or Figma file was provided; the components and UI kit are an original, faithful application of the brand manual (not a recreation of a pre-existing product UI). The clean, recoloured logo / wave / pattern assets and the six individual course pictograms in `assets/` were extracted programmatically from those plates.

---

## Content fundamentals

**Voice.** Welcoming, direct, a little poetic about place. UNO sells *closeness* (small classes, real relationships with teachers) and *territory* (sea, land, history of Sardinia). It speaks to a prospective student as **"tu"** (informal you), never the formal "Lei".

- **Person & tone:** second person informal — "Scegli il tuo futuro", "Vieni all'Open Day", "Iscriviti ora". Inviting, not bureaucratic.
- **Casing:** sentence case for headings and body. UPPERCASE only for the eyebrow/kicker ("occhiello") and tiny labels, always letter-spaced.
- **Headlines** are short and benefit-led, with **one emphasised word set in italic teal** — the signature move: *"L'università **a misura** di studente"*, *"Scegli il tuo **futuro**"*.
- **Eyebrow ("occhiello")** sits above most headings: a short uppercase category — `ISCRIZIONI 2026 / 27`, `I CORSI`, `OPEN DAY`.
- **Numbers** are used sparingly and concretely (6 corsi, 2 dipartimenti, 100% in presenza) — never invented vanity stats.
- **Italian specifics:** keep accents (è, à, ò, ù), the apostrophe in "L'università", and the elision "dell'Uomo". Course classes are written `Classe L-15`, `LP-02`, etc.
- **No emoji.** The brand voice is editorial; warmth comes from words and colour, not emoji.

**Example block**

> ‹occhiello› ISCRIZIONI 2026 / 27
> **L'università *a misura* di studente**
> Sei corsi di laurea sul mare di Oristano, tra agraria, biotecnologie, turismo e archeologia.
> → Scopri i corsi   ·   Vieni all'Open Day

---

## Visual foundations

**Colour.**
- **Core / brand:** Sabbia/Cream `#F4EEE7`, Verde/Teal `#287C71`, Blu notte/Navy `#131A2E`. Cream is the **default page surface** (not white); white is reserved for cards. Navy is ink + dark sections; teal is the accent and the feature colour.
- **Course palette (categorical):** Red `#DB3418` (DST), Orange `#EAA000` (ETC), Lime `#86B500` (OCF), Cyan `#23A1D4` (BMEA), Blue `#1561AF` (Nesiotika), Magenta `#890064` (VE). One hue *belongs* to each programme and themes its card, detail hero and icon. The same six hues double as the **status scale** (success/warning/danger/info).
- **Warmth:** neutrals are warm (sand ramp), and shadows are **navy-tinted**, never neutral grey/black, so they sit naturally on cream.

**Type.** One family — **Montserrat** (variable, 300–900). Display & headings in **ExtraBold (800)** with tight tracking; body in Regular/Medium; eyebrows in **Bold uppercase** with wide tracking (`0.14em`). The accent word inside a heading is **Bold Italic + teal**. The "UNO" wordmark itself is a separate custom serif and lives **only** as an SVG logo — do not try to set it in a font.

**Spacing & layout.** 8px base grid. Generous vertical rhythm between sections (`clamp(52px, 8vw, 104px)`). Content max-width ~1200px; reading width ~760px.

**Shape.** Friendly, rounded — echoing the onda loops. Cards ~14px radius; **buttons are pills** by default; inputs ~10px. Course cards carry a 4px **top accent bar** in the course colour.

**Elevation.** Soft, navy-tinted shadows (`--shadow-xs … --shadow-xl`). Cards default to a light `--shadow-sm`; interactive cards lift on hover (`translateY(-3/4px)` + larger shadow).

**Backgrounds & texture.** The **onda mesh pattern** is used as a *faint* texture (≈6–12% opacity) behind heroes, the teal CTA band and the navy footer — never at full strength. Three section surfaces recur: cream (default), navy (dark/feature) and teal (CTA). Imagery (where present) should be warm and place-led (campus, sea, Sinis lagoons); real photography is expected — placeholders are used here and must be replaced.

**Motion.** Restrained and institutional. Transitions 120–360ms on `--ease-standard` / `--ease-out`. Hover = colour shift or gentle lift; **press = a 1px downward nudge** (no bounces, no big scale). Accordions animate height via the `grid-template-rows: 0fr→1fr` technique. All motion respects `prefers-reduced-motion`.

**States.**
- *Hover:* primary/secondary darken one step; outline/ghost get a teal-tinted wash; links go teal→teal-700; cards lift.
- *Focus:* a 3px teal focus ring (`--shadow-focus`) on every interactive element.
- *Press:* `translateY(1px)`.
- *Disabled:* ~42% opacity, no pointer events.

**Borders.** Hairlines are low-alpha navy on cream (`--border-subtle/default/strong`) and low-alpha cream on navy (`--border-on-dark`); a warm `--divider-cream` separates list rows.

---

## Iconography

Three distinct icon layers:

1. **Course pictograms — the hero of the system.** Six bespoke marks, one per programme, each in its course colour with the course abbreviation: **DST** (map-pin / destinations), **ETC** (events badge), **VE** (wine glass / viticulture), **OCF** (leaf / horticulture), **BMEA** (water drop / marine), **NESIOTIKA** (amphora / archaeology). Extracted as individual SVGs in `assets/course-icons/` and **inlined** into the `CourseIcon` / `CourseCard` components and the `courseData.js` catalogue. Use these directly — never redraw them.
2. **Brand graphics.** The **logo** (`assets/logo/`, four colourways), the **onda wave element** (`assets/graphics/wave-element-*`) and the **onda pattern** (`assets/graphics/wave-pattern-*`). All recoloured for cream / navy / teal / white surfaces.
3. **UI icons — substitution (flagged).** The brand manual ships **no general UI icon set** (arrows, menu, calendar, etc.). The UI kit uses a curated **Lucide-style** line set (`ui_kits/sito/icons.jsx`, stroke 2, round caps) chosen to match Montserrat's geometric feel. **This is a substitution** — if UNO has an official UI icon library, drop it in and replace `icons.jsx`.

No emoji, no unicode glyphs as icons.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link (imports only).
- `tokens/` — `fonts.css` (@font-face), `colors.css`, `typography.css`, `spacing.css` (spacing/radius/shadow/motion/z/layout), `base.css` (reset + brand utility classes).
- `assets/` — `fonts/` (Montserrat variable + OFL), `logo/` (navy·cream·white·teal), `graphics/` (wave element & pattern, 3–4 colourways each), `course-icons/` (6 pictograms), `reference/` (original brand-manual plates).
- `readme.md` (this file) · `SKILL.md` (Agent-Skills wrapper).

**Foundations** (`guidelines/foundations/`) — specimen cards for the Design System tab: Colours (core, courses, ramps, status, text), Type (eyebrow+accent, display, body, weights, scale), Spacing (scale, radius, shadow), Brand (logo, wave, texture, course icons).

**Components** (`components/`) — `window.UNOUniversitAOristanoDesignSystem_7ea223`:
- `actions/` — **Button**, **IconButton**
- `forms/` — **Input**, **Textarea**, **Select**, **Checkbox**, **Radio**, **Switch**
- `feedback/` — **Badge**, **Tag**, **Alert**
- `surfaces/` — **Card**
- `typography/` — **Eyebrow**, **SectionHeading**
- `courses/` — **CourseIcon**, **CourseCard** (+ `COURSES`, `COURSE_KEYS` catalogue data)
- `disclosure/` — **Accordion**

**UI kit** (`ui_kits/sito/`) — the interactive **enrollment website**: Home → Corsi (catalogue, filterable) → Course detail (themed) → Iscrizione (form), plus Ateneo & Open Day. See `ui_kits/sito/README.md`.
