# [SCHOOL NAME] Model United Nations — Website Design Specification

> **Purpose of this document.** This is a complete design + layout brief for a Model United Nations
> conference website. It is written to be handed to a design tool/designer first (to produce the
> visual design), and then to a developer/AI to build the site. Every piece of real conference
> information is written as a `[BRACKETED PLACEHOLDER]` so it can be swapped in later without
> touching the design.
>
> **Scope:** multi-page marketing/information site. Static — no backend, no database, no login.
> The only "action" on the site is a **Sign Up** button that will eventually point at a Google Form.
> For now every sign-up link must resolve to `#` (a dead link) with a `TODO` comment beside it.

---

## 1. Project Summary

| Field | Value |
|---|---|
| Client | [SCHOOL NAME] |
| Product | Public website for [CONFERENCE NAME] (e.g. "[SCHOOL ACRONYM]MUN [YEAR]") |
| Audience (primary) | Students aged 14–18 considering attending as delegates |
| Audience (secondary) | MUN directors / teachers at other schools, parents, prospective chairs, sponsors |
| Primary goal | Get a visitor to understand the conference and click **Sign Up** |
| Secondary goals | Communicate credibility to teachers and parents; let delegates find their committee and topics; introduce the secretariat |
| Tone | Professional, diplomatic, aspirational, institutional — but readable by teenagers. Never corporate-jargon, never childish. |
| Devices | Mobile-first. Must be excellent at 375px, 768px, 1280px, 1600px+ |
| Languages | English only (design should not break if a second language is added later) |

---

## 2. Visual Identity

### 2.1 Direction

**"Institutional gravitas, student energy."** The site should feel like the website of a real
international body — restrained, confident, generous with whitespace, strong typographic hierarchy —
using the school's **grey and yellow** as the entire palette. No third accent colour. The yellow is
used sparingly and deliberately, which is what makes it feel expensive rather than loud.

Reference feeling: the visual discipline of a UN agency report or a university's flagship programme
page, not a startup landing page. Avoid: gradients-on-everything, glassmorphism, neon glows,
rounded-blob illustrations, emoji as UI, stock "handshake" photography.

### 2.2 Colour palette

Grey is the environment. Yellow is the signal. Roughly a **90/10 split** — if more than about a
tenth of any screen is yellow, pull it back.

| Token | Hex | Role |
|---|---|---|
| `--ink` | `#16181C` | Primary text, dark section backgrounds, footer |
| `--slate` | `#2E343C` | Secondary dark surfaces, nav on scroll, cards on dark |
| `--grey-600` | `#5B636E` | Body text on light backgrounds, captions |
| `--grey-400` | `#9AA1AB` | Muted/meta text, disabled states, dividers on dark |
| `--grey-200` | `#DCDFE4` | Borders, rules, table lines |
| `--grey-050` | `#F4F5F7` | Alternating page section background ("mist") |
| `--white` | `#FFFFFF` | Default page background, text on dark |
| `--gold` | `#E8B10A` | **Primary accent** — buttons, active states, key numbers, underlines |
| `--gold-dark` | `#C08F00` | Hover/pressed state of gold elements, gold text on white where contrast is needed |
| `--gold-tint` | `#FFF7DC` | Very light wash for highlight callouts, badges, table header rows |

**Colour rules**

1. Gold buttons always use `--ink` text, never white — `#16181C` on `#E8B10A` passes AA comfortably.
2. Gold **text** on white is only permitted at 20px+ bold; below that use `--gold-dark`.
3. Never put gold text on gold-tint or on `--grey-200`.
4. Every section has one of four backgrounds: white, `--grey-050`, `--ink`, or a photo with an ink
   overlay at 65–75% opacity. Alternate them so the page has rhythm; never two identical
   backgrounds adjacent.
5. Photography is treated as duotone-ish: desaturated toward grey, with the gold reserved for the UI
   drawn on top. This keeps mixed-quality school photos looking cohesive.

### 2.3 Typography

Two families only.

| Use | Font | Notes |
|---|---|---|
| Display / headings | **Source Serif 4** (fallback: Libre Baskerville → Georgia → serif) | Weights 600/700. Gives the diplomatic, printed-document authority. |
| Body / UI | **Inter** (fallback: Söhne → -apple-system → Helvetica Neue → sans-serif) | Weights 400/500/600. |
| Eyebrow / label | Inter, 600, `letter-spacing: 0.12em`, `text-transform: uppercase`, 12–13px, colour `--gold-dark` on light / `--gold` on dark | The signature detail — every section starts with one of these. |

**Type scale** (desktop → mobile)

| Role | Size / line-height | Mobile |
|---|---|---|
| Hero H1 | 68px / 1.05, serif 700, `-0.02em` | 38px / 1.1 |
| H2 (section) | 44px / 1.15, serif 700 | 30px / 1.2 |
| H3 (card title) | 24px / 1.3, serif 600 | 21px |
| H4 / subhead | 18px / 1.4, sans 600 | 17px |
| Lead paragraph | 20px / 1.6, sans 400, `--grey-600` | 18px |
| Body | 17px / 1.7, sans 400 | 16px |
| Small / meta | 14px / 1.5, sans 500, `--grey-400` | 14px |
| Stat number | 56px / 1, serif 700, `--gold` | 40px |

Body copy measure: max `68ch`. Never full-bleed paragraphs.

### 2.4 Layout system

- Container: max-width `1200px`, side padding `24px` mobile / `48px` tablet / `64px` desktop.
- Grid: 12 columns, `32px` gutters desktop, `20px` tablet, single column mobile.
- Vertical section padding: `120px` desktop / `80px` tablet / `56px` mobile.
- Spacing scale (use only these): `4, 8, 12, 16, 24, 32, 48, 64, 80, 120`.

### 2.5 Shape, depth, and detail language

- **Corner radius: 4px.** Almost square. Buttons, cards, inputs, images. Radius above 8px reads
  playful and breaks the institutional tone. Avatars/team photos are the one exception: full circle
  *or* a 4:5 rectangle — pick one and use it everywhere.
- **Borders over shadows.** Cards use a `1px solid --grey-200` border on light backgrounds and a
  `1px solid rgba(255,255,255,.12)` border on dark. Only floating elements (sticky nav after
  scroll, mobile menu, modal) get a shadow: `0 8px 24px rgba(22,24,28,.10)`.
- **The gold rule.** A `3px` gold bar, `48px` wide, sits above every section H2 as a recurring motif.
  It also appears as a bottom-border on active nav items and as the left border of blockquotes.
- **Numbering.** Committees, schedule days, and process steps are numbered in serif with a
  `--grey-200` colour at large size behind or beside the content (e.g. a ghosted "01"). This is the
  second recurring motif.
- Optional texture: a very subtle 1px grey dot-grid or a faint world-map line drawing at 4–6%
  opacity behind the hero and one or two dark sections. Must be near-invisible — atmosphere, not
  decoration.

### 2.6 Iconography & imagery

- Icons: thin-line (1.5px stroke), 24px, single colour, from one set (Lucide or Phosphor Light).
  No filled or multicolour icons.
- Flags: only if real; small, `20×14`, `1px --grey-200` border. Never as emoji.
- Photography needs: see §7 asset list. Every image needs a defined 16:9, 4:5, or 1:1 crop and an
  `alt` text placeholder.
- If real photos are unavailable, the design must still work: specify a fallback of
  ink-background + dot-grid + large serif type in place of each photo block.

---

## 3. Global Components

### 3.1 Header / navigation

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  [LOGO] [SCHOOL ACRONYM]MUN        About  Committees  Schedule  Team  ▾More  │
│                                                          [ Sign Up ]         │
└──────────────────────────────────────────────────────────────────────────────┘
```

- Height `80px` desktop, `64px` mobile.
- **At top of page (hero only):** transparent background, white logo + white links.
- **After 40px scroll:** solid `--white` with a `1px --grey-200` bottom border and the small shadow;
  links become `--ink`. Transition `200ms ease`.
- Links: Inter 500, 15px. Active page gets a `3px --gold` bottom border (offset `-28px`).
- Right side: a single **Sign Up** button — gold fill, ink text, 4px radius, `12px 24px` padding,
  Inter 600 15px. `href="#"` for now.
- "More" dropdown holds Resources, FAQ, Contact (keeps the primary bar to 4 items). Dropdown is a
  white panel, 4px radius, `1px --grey-200`, `8px` item padding.
- Mobile: hamburger (3 lines, 1.5px) → full-screen `--ink` overlay panel, links stacked at 24px
  serif, gold rules between, Sign Up button pinned at the bottom, full width.
- Sticky on all pages. Never hide on scroll-down.

### 3.2 Buttons

| Variant | Style |
|---|---|
| Primary | `--gold` fill, `--ink` text, 4px radius. Hover: `--gold-dark` fill + `translateY(-1px)`. |
| Secondary (on light) | Transparent, `1.5px --ink` border, `--ink` text. Hover: `--ink` fill, white text. |
| Secondary (on dark) | Transparent, `1.5px rgba(255,255,255,.4)` border, white text. Hover: white fill, ink text. |
| Text link | `--ink` text, `--gold` 2px underline that animates from 0→100% width on hover, with a `→` arrow that slides `4px` right. |

Sizes: L `14px 28px` / 16px text (hero) · M `12px 24px` / 15px (default) · S `8px 16px` / 14px (cards).
All buttons need a visible focus ring: `2px --gold-dark` outline, `2px` offset.

### 3.3 Card

Used for committees, team members, resources, FAQ.

```
┌─────────────────────────────┐
│ [image or ghosted number]   │
├─────────────────────────────┤
│ EYEBROW LABEL               │  ← gold, uppercase, 12px
│ Card Title in Serif         │  ← 24px
│ Two lines of supporting     │  ← 16px, --grey-600
│ description text here.      │
│                             │
│ Learn more →                │  ← text link
└─────────────────────────────┘
```

- White background, `1px --grey-200`, 4px radius, `28px` padding (`20px` mobile).
- Hover (only if the whole card is a link): border → `--gold`, `translateY(-2px)`,
  `180ms ease`. No scale, no shadow bloom.

### 3.4 Section header pattern

Every content section opens with, in this order and left-aligned (or centred for full-width feature
sections — pick per section and stay consistent):

```
▬▬▬            ← 48×3px gold bar
EYEBROW        ← uppercase gold label
Section Title  ← serif H2
Optional one-sentence lead in --grey-600, max 60ch
```

### 3.5 Footer

Dark (`--ink`), `80px` top padding, `32px` bottom.

```
┌──────────────────────────────────────────────────────────────────────────┐
│ [LOGO]                 Conference        Delegates       Connect         │
│ [CONFERENCE NAME]      About             Committees       Instagram      │
│ One-line tagline.      Schedule          Resources        Email          │
│                        Team              FAQ              [SCHOOL SITE]  │
│ [ Sign Up ]                                                              │
│                                                                          │
│ ──────────────────── 1px rgba(255,255,255,.12) ───────────────────────── │
│ © [YEAR] [SCHOOL NAME] MUN. All rights reserved.        Built by [NAME]  │
└──────────────────────────────────────────────────────────────────────────┘
```

Column headings: gold eyebrow style. Links `--grey-400` → white on hover. Mobile: columns stack,
`32px` gap.

### 3.6 Reusable "Sign Up" CTA band

A full-width band placed near the bottom of **every** page except Registration.

- Background `--ink` with the faint map/dot texture.
- Centred: gold eyebrow `[REGISTRATION STATUS — e.g. "REGISTRATION OPEN"]`, serif H2
  "Take your seat at [CONFERENCE ACRONYM] [YEAR]", one lead line
  `[REGISTRATION DEADLINE / FEE SUMMARY]`, then two buttons side by side:
  **Sign Up as a Delegate** (primary) and **Apply to Chair** (secondary-on-dark).
- Both `href="#"` — `<!-- TODO: replace with Google Form URL -->`.

---

## 4. Site Map

```
/                     Home
/about                About the conference
/committees           Committees index
/committees/[slug]    One page per committee   (repeatable template)
/schedule             Schedule & venue
/team                 Secretariat & team
/register             Sign up / how to register
/resources            Delegate resources & downloads
/faq                  FAQ
/contact              Contact
```

9 templates total (committee detail is one template rendered N times).
Every page: unique `<title>`, meta description, and OG image placeholder.

---

## 5. Page-by-Page Layout

### 5.1 Home (`/`)

The only page that may be long. Eight sections.

**S1 — Hero** (full viewport height, min `640px`, max `860px`)

```
┌──────────────────────────────────────────────────────────────┐
│  transparent nav over image                                  │
│                                                              │
│   ▬▬▬                                                        │
│   [MONTH DAY]–[DAY], [YEAR]  ·  [CITY, COUNTRY]              │
│                                                              │
│   [CONFERENCE NAME]                                          │
│   [YEAR]                                                     │
│                                                              │
│   [ONE-SENTENCE CONFERENCE THEME OR TAGLINE — max 90 chars]  │
│                                                              │
│   [ Sign Up ]   [ Explore Committees ]                       │
│                                                              │
│   ┌────────┬────────┬────────┬────────┐                      │
│   │  [N]   │  [N]   │  [N]   │  [N]   │  ← stat strip        │
│   │Delegates│Committees│Schools│ Days  │                     │
│   └────────┴────────┴────────┴────────┘                      │
└──────────────────────────────────────────────────────────────┘
```

- Background: `[HERO IMAGE — wide shot of the school hall / delegates in session]`, desaturated,
  with an `--ink` overlay at 70% plus a bottom-to-top gradient so text stays legible.
- H1: serif 700, white, 68px, two lines. The year sits on its own line in `--gold`.
- Date/location line: Inter 500, 15px, uppercase, `letter-spacing .08em`, white at 85%.
- Stat strip: sits on a `rgba(255,255,255,.08)` panel with a `1px rgba(255,255,255,.15)` border,
  4 equal cells divided by 1px rules. Numbers in gold serif 56px, labels 13px uppercase grey-400.
  On mobile: 2×2 grid.
- No autoplaying video. No carousel.

**S2 — Welcome / Secretary-General's note** — white background, 2-column.
Left (5 cols): `[PORTRAIT — Secretary-General, 4:5]`. Right (6 cols, offset 1):
gold bar + eyebrow "WELCOME" + H2 "[SHORT WELCOME HEADLINE]" + 2 paragraphs of
`[WELCOME LETTER EXCERPT — 90–120 words]` + a signature block
(`[NAME]`, then `Secretary-General, [CONFERENCE ACRONYM] [YEAR]` in grey small) +
text link "Read the full letter →" to `/about`.

**S3 — What is [CONFERENCE ACRONYM]?** — `--grey-050` background. Centred section header, then a
3-up row of icon features: `[FEATURE 1 TITLE]` / `[FEATURE 2]` / `[FEATURE 3]`
(e.g. Authentic Debate, Global Issues, Real Diplomacy). Each: thin-line icon in a `48px` gold-tint
square, H4 title, 2-line description. Divided by 1px vertical rules on desktop, stacked on mobile.

**S4 — Committees preview** — white. Section header + text link "All committees →" aligned right on
the same baseline. Then a 3-column card grid (2 on tablet, 1 on mobile) showing the first 6
committees. Each card: ghosted serif number `01`, committee abbreviation as eyebrow (`UNSC`),
serif H3 full name, one-line remit, and `[N] topics` meta. Whole card links to
`/committees/[slug]`.

**S5 — Key details** — `--ink` background with texture. Section header centred in white, then a
4-up row of detail blocks separated by 1px light rules: **When** `[DATES + TIMES]` · **Where**
`[VENUE NAME, ADDRESS]` · **Who** `[ELIGIBILITY — e.g. Grades 9–12]` · **Fee**
`[DELEGATE FEE / "Free"]`. Each with a thin gold icon above. Below: secondary-on-dark button
"See the full schedule →".

**S6 — Timeline / how it works** — white. Horizontal 4-step timeline on desktop (a 1px grey line
with 4 gold dots), vertical on mobile. Steps: `01 Register` → `02 Get your assignment` →
`03 Prepare & research` → `04 Debate` — each with a short `[DESCRIPTION]` and a
`[DATE / DEADLINE]` in gold small caps.

**S7 — Team preview** — `--grey-050`. Section header + "Meet the full team →". Row of 5–6
secretariat portraits (circle or 4:5, greyscale that goes to full colour on hover), name in
serif 18px, role in 13px uppercase grey.

**S8 — Sign-Up CTA band** (see §3.6), then footer.

---

### 5.2 About (`/about`)

- **Page header** (used by every non-home page): `--ink` band, `220px` tall (`160px` mobile), gold
  eyebrow = breadcrumb (`HOME / ABOUT`), serif H1 44px white, one lead line in grey-400. Faint
  texture, no photo. This gives all interior pages a consistent, cheap-to-build masthead.
- **Intro** — white, single centred column, `68ch`: 3–4 paragraphs of
  `[INAUGURAL FRAMING AND MISSION — 200–300 words]`. First paragraph is lead size. This is the
  school's first conference, so the copy states that plainly and is written as intent — what is
  being built and who it is for — never as history or track record.
- **The theme** — `--gold-tint` band, centred: eyebrow "THIS YEAR'S THEME", serif H2
  "[CONFERENCE THEME]", one paragraph `[THEME EXPLANATION — 60–80 words]`.
- **Full welcome letter** — white, 2-column (letter left 7 cols, sticky portrait + name card right
  4 cols). Letter body uses a `--gold` left-border blockquote for its pull-quote.
- ~~**By the numbers**~~ — *removed.* This is the first conference; there are no past figures to
  report. Do not reintroduce a retrospective stat band.
- ~~**Gallery strip**~~ — *removed.* No past-conference photos exist. Add a gallery only after the
  first conference has actually run.
- CTA band + footer.

---

### 5.3 Committees index (`/committees`)

- Page header ("Committees" / `[N] committees. [N] topics. One weekend.`).
- **Filter row** *(visual only, no logic required — or simple client-side filtering)*: pill buttons
  `All` · `General Assembly` · `Specialised` · `Crisis` · `[OTHER BLOCK]`. Active pill = gold fill,
  ink text; inactive = white with grey border. Right side: `[N] committees` count in grey.
- **Committee list** — the centrepiece. Do **not** use small cards here; use full-width rows so the
  topics are readable:

```
┌────────────────────────────────────────────────────────────────────────────┐
│  01   UNSC                                              GENERAL ASSEMBLY   │
│       United Nations Security Council                                      │
│       [ONE-SENTENCE COMMITTEE DESCRIPTION]                                 │
│                                                                            │
│       Topic A  ·  [TOPIC A TITLE]                                          │
│       Topic B  ·  [TOPIC B TITLE]                                          │
│                                                                            │
│       [N] delegates   ·   [DIFFICULTY: Beginner/Intermediate/Advanced]      │
│                                                    View committee →         │
└────────────────────────────────────────────────────────────────────────────┘
```

- Row: white, `1px --grey-200`, `36px` padding, `24px` gap between rows. Ghosted number `01` in
  `--grey-200` serif 48px on the left (hidden on mobile). Block label as a small grey-bordered
  badge, top-right. Difficulty badge uses gold-tint fill with `--gold-dark` text.
- Topics list: each topic on its own line, `Topic A` label in gold uppercase 12px then a 1px grey
  divider then the title in 17px ink.
- Hover: border → gold, ghosted number → gold-tint.
- Mobile: everything stacks left-aligned; badges move above the title.
- CTA band + footer.

---

### 5.4 Committee detail (`/committees/[slug]`) — repeatable template

- **Page header variant:** `--ink`, taller (`320px`), split. Left: eyebrow `[BLOCK]`, serif H1
  `[COMMITTEE ABBREVIATION]`, subtitle `[FULL COMMITTEE NAME]` in grey-400 20px, meta row
  (`[N] delegates` · `[DIFFICULTY]` · `[LANGUAGE]`). Right: large ghosted committee number or the
  committee's emblem placeholder.
- **Overview** — white, 8 cols: eyebrow "MANDATE", H2 "About the committee", 2–3 paragraphs
  `[COMMITTEE DESCRIPTION — 120–180 words]`.
- **Topics** — `--grey-050`. Two stacked topic blocks (repeat per topic):

```
▬▬▬  TOPIC A
[TOPIC TITLE]
[TOPIC SUMMARY — 80–120 words explaining the issue and why it matters now]

Key questions
· [QUESTION 1]
· [QUESTION 2]
· [QUESTION 3]

[ Download background guide ]   ← secondary button, href="#"
```
  Bulleted questions use a small gold square as the marker, not a disc.

- **Your chairs** — white. 2-up cards: `[CHAIR PHOTO]`, name in serif 21px, role
  (`Chair` / `Deputy Chair`), 2-line `[CHAIR BIO]`, optional `[EMAIL]`.
- **Prev / next committee** — `--grey-050`, two half-width link blocks with `←` / `→`, showing the
  neighbouring committee names.
- CTA band + footer.

---

### 5.5 Schedule (`/schedule`)

- Page header ("Schedule & Venue").
- **At a glance** — white: 3 detail blocks (Dates / Venue / Dress code) in a bordered strip.
- **Day tabs** — gold-underlined tab row: `Day 1 · [DATE]` | `Day 2 · [DATE]` | `Day 3 · [DATE]`.
  Simple show/hide; on mobile the tabs become a horizontally scrollable row (no dropdown).
- **Agenda table** per day — not an HTML `<table>` visually, but a list of rows:

```
09:00 — 10:00   │  ▬  Opening Ceremony
                │     [LOCATION] · [DESCRIPTION]
────────────────┼──────────────────────────────────────
10:15 — 12:30   │  ▬  Committee Session I
                │     All committee rooms
```
  Time column: `120px` fixed, Inter 600 15px, `--ink`, right-aligned, with a 1px grey vertical rule
  after it. Event title: serif 20px. A `3px` gold segment marks major/plenary events; regular
  sessions get a grey segment. Rows separated by 1px grey lines, `20px` vertical padding.
  Mobile: time moves above the title, rule removed.
- **Dress code & conduct** — `--gold-tint` band, two short columns of `[DRESS CODE]` and
  `[CODE OF CONDUCT SUMMARY]` with a link to the full rules on `/resources`.
- **Venue** — `--grey-050`: left 6 cols `[VENUE PHOTO or STATIC MAP IMAGE]` (4px radius, 16:9),
  right 5 cols: `[VENUE NAME]`, `[FULL ADDRESS]`, `[GETTING THERE / PARKING / TRANSPORT NOTES]`,
  and a text link "Open in Google Maps →" (`href="#"` for now).
- CTA band + footer.

---

### 5.6 Team (`/team`)

- Page header ("The Team" / `[ONE LINE ABOUT THE ORGANISING TEAM]`).
- **Secretariat** — white. Section header, then a 3-up grid of larger cards: `[PHOTO 4:5]`
  (greyscale → colour on hover), serif 21px name, gold uppercase 12px role, 2–3 line `[BIO]`,
  optional email/LinkedIn thin-line icons.
- **Committee chairs** — `--grey-050`. 4-up grid, smaller cards: photo, name, role, and the
  committee they chair as a small badge. No bios.
- **Organising & logistics team** — white. Compact 5-up grid or a simple two-column name list
  (`[NAME]` — `[ROLE]`) separated by 1px rules. Use the list if there are more than ~12 people.
- **Faculty advisors** — `--ink` band, 2–3 centred entries: name, title, `[SCHOOL NAME]`.
- **Join the team** — `--gold-tint` band: eyebrow "APPLICATIONS OPEN", H3
  "Want to chair at [CONFERENCE ACRONYM] [YEAR]?", one line, primary button "Apply to Chair"
  (`href="#"`).
- Footer.

---

### 5.7 Register (`/register`)

This page carries the conversion. No form is built here — it explains and then hands off.

- Page header ("Sign Up") with `[REGISTRATION STATUS]` as a gold badge in place of the breadcrumb.
- **Two paths** — white, two large side-by-side panels, equal height:

```
┌──────────────────────────────┬──────────────────────────────┐
│ ▬▬▬  DELEGATES               │ ▬▬▬  CHAIRS & STAFF          │
│ Attend as a delegate         │ Join the team                │
│ [WHO THIS IS FOR — 2 lines]  │ [WHO THIS IS FOR — 2 lines]  │
│                              │                              │
│ · [REQUIREMENT / DETAIL]     │ · [REQUIREMENT / DETAIL]      │
│ · [FEE]                      │ · [EXPERIENCE EXPECTED]       │
│ · [DEADLINE]                 │ · [DEADLINE]                  │
│                              │                              │
│ [ Sign Up as a Delegate ]    │ [ Apply to Chair ]            │
│ Opens a Google Form          │ Opens a Google Form           │
└──────────────────────────────┴──────────────────────────────┘
```
  Delegate panel: `--ink` background, white text, gold primary button (visually dominant).
  Chair panel: white with `1px --grey-200`, ink text, secondary-on-light button.
  Small grey caption under each button: "Opens in a new tab." Both `href="#"` with
  `<!-- TODO: Google Form URL -->` and `target="_blank" rel="noopener"` already in place.

- **How registration works** — `--grey-050`: numbered 4-step vertical list
  (`01 Submit the form` → `02 Confirmation email` → `03 Pay the fee` → `04 Receive your country &
  committee assignment`), each with `[DETAIL]` and a `[TIMEFRAME]` in gold.
- **Deadlines** — white: a simple bordered list of `[DEADLINE NAME]` / `[DATE]` rows, dates in gold
  serif, right-aligned. Passed deadlines get grey-400 text and a strikethrough.
- **Fees & what's included** — white, two columns: fee amount as a big gold serif number with
  `[PER DELEGATE]` caption; beside it a checkmark list of `[WHAT'S INCLUDED]` items.
- **Questions?** — `--ink` slim band: one line + text link to `/faq` and `/contact`.
- Footer (no CTA band — this page *is* the CTA).

---

### 5.8 Resources (`/resources`)

- Page header ("Delegate Resources").
- **Essentials** — white, 3-up cards with a document icon: `[RULES OF PROCEDURE]`,
  `[POSITION PAPER TEMPLATE]`, `[DELEGATE HANDBOOK]`. Each card shows file type + size as meta
  (`PDF · 1.2 MB`) and a "Download →" link (`href="#"`).
- **Background guides** — `--grey-050`: one row per committee, `[COMMITTEE]` on the left, download
  links for each topic guide on the right, 1px rules between rows.
- **New to MUN?** — white: a 5-item numbered guide (`What is a position paper?`,
  `How debate works`, `Points and motions`, `Research tips`, `Glossary of terms`) rendered as an
  accordion; each expands to `[EXPLANATION — 60–100 words]`. Closed rows show a thin `+`, open rows
  a `−`; open row title turns gold.
- **External links** — `--ink` band: 3–4 outbound links (UN.org, UN Charter, `[OTHER]`) as text
  links with an external-link icon.
- CTA band + footer.

---

### 5.9 FAQ (`/faq`)

- Page header ("Frequently Asked Questions").
- **Grouped accordions** — white, single `760px` centred column, three groups with gold eyebrow
  headings: **Registration & fees**, **During the conference**, **Preparation**. 4–6 questions each,
  all placeholders `[QUESTION]` / `[ANSWER]`. Accordion styling as in §5.8. First item of the first
  group is open by default.
- **Still stuck?** — `--grey-050` band with a link to `/contact`.
- Footer.

---

### 5.10 Contact (`/contact`)

- Page header ("Contact").
- **Contact methods** — white, 3-up bordered blocks: **General enquiries** `[EMAIL]` ·
  **Registration** `[EMAIL]` · **Press & sponsorship** `[EMAIL]`. Each with a thin icon and the
  address as a `mailto:` link.
- **School & venue** — `--grey-050`, 2-column: `[SCHOOL NAME]`, `[ADDRESS]`, `[PHONE]`, office hours
  on the left; `[STATIC MAP IMAGE]` on the right.
- **Follow us** — white, centred: `[INSTAGRAM]`, `[OTHER SOCIAL]` as bordered icon buttons, 44px
  square.
- No contact form (keeps the site fully static).
- Footer.

---

## 6. Interaction, Motion & States

- **Motion budget is small and consistent.** Only three animations exist:
  1. `fade-up`: opacity 0→1, `translateY(16px→0)`, `500ms cubic-bezier(.16,1,.3,1)`, triggered when a
     section enters the viewport, with a `60ms` stagger between siblings. Once only — never replay.
  2. Hover transitions: `180ms ease` on colour, border, transform.
  3. Accordion/tab expand: `240ms ease` on height.
- Hero content animates in on load with the same fade-up, staggered: eyebrow → H1 → tagline →
  buttons → stat strip.
- Respect `prefers-reduced-motion: reduce` — disable all of the above, keep instant state changes.
- **Empty/TBA states matter.** Fields like committee topics or the schedule may not be finalised.
  Define a "TBA" treatment: `--grey-050` background, `--grey-400` italic text, e.g.
  "Background guide coming soon". Never show a broken or blank block.
- **Sign-up links:** every one is `href="#"` today. They must all be a single reusable component so
  swapping in the Google Form URL is a one-line change. Add `aria-label` describing the
  destination.

---

## 7. Assets Needed From The School

| # | Asset | Spec | Used on |
|---|---|---|---|
| 1 | School / MUN logo | SVG, light + dark versions | Header, footer |
| 2 | Hero image | ≥2400×1400, wide shot of hall or delegates | Home hero |
| 3 | Secretary-General portrait | 4:5, ≥1000px wide | Home S2, About |
| 4 | Secretariat portraits | 4:5, ≥800px, consistent framing | Team, Home S7 |
| 5 | Chair portraits | 1:1 or 4:5, ≥600px | Committee detail, Team |
| 6 | Venue photo | 16:9, ≥1800px | Schedule |
| 7 | Committee emblems (optional) | SVG or PNG, transparent | Committee detail |
| 8 | Favicon + OG image | 512×512 / 1200×630 | Global |
| 9 | PDFs | Rules of procedure, position paper template, background guides | Resources |

If an asset is missing, use the documented no-photo fallback (§2.6) rather than a stock image.

---

## 8. Accessibility & Quality Bar

- All text meets **WCAG 2.1 AA** contrast (4.5:1 body, 3:1 for large text). Verify gold
  combinations specifically.
- Visible focus indicator on every interactive element (`2px --gold-dark`, `2px` offset). Never
  `outline: none` without a replacement.
- One `<h1>` per page; heading levels never skip.
- Every image has meaningful `alt`; decorative textures get `alt=""` / `aria-hidden`.
- Accordions and tabs are real buttons with `aria-expanded` / `aria-selected`, keyboard operable.
- Mobile tap targets ≥44×44px.
- Site must be fully usable and readable with JavaScript disabled (accordions default open in that
  case, tabs render as stacked sections).
- Target: no layout shift, no horizontal scroll at 320px, Lighthouse ≥95 on Accessibility and Best
  Practices.

---

## 9. Placeholder Inventory (fill this in once, reuse everywhere)

Conference: `[CONFERENCE NAME]` · `[CONFERENCE ACRONYM]` · `[YEAR]` · `[CONFERENCE THEME]` ·
`[TAGLINE]` · `[REGISTRATION STATUS]`
Dates & place: `[START DATE]` · `[END DATE]` · `[DAILY START/END TIMES]` · `[VENUE NAME]` ·
`[FULL ADDRESS]` · `[CITY, COUNTRY]`
Numbers: `[N DELEGATES]` · `[N COMMITTEES]` · `[N SCHOOLS]` · `[N DAYS]`
Money & rules: `[DELEGATE FEE]` · `[WHAT'S INCLUDED]` · `[ELIGIBILITY]` · `[DRESS CODE]` ·
`[CODE OF CONDUCT]`
Deadlines: `[REGISTRATION OPENS]` · `[REGISTRATION CLOSES]` · `[CHAIR APPLICATIONS CLOSE]` ·
`[POSITION PAPER DUE]` · `[ASSIGNMENTS RELEASED]`
Per committee (×N): `[ABBREVIATION]` · `[FULL NAME]` · `[BLOCK]` · `[DIFFICULTY]` ·
`[N DELEGATES]` · `[DESCRIPTION]` · `[TOPIC A]` · `[TOPIC B]` · `[KEY QUESTIONS]` ·
`[CHAIR NAME/ROLE/BIO/PHOTO]`
Per person (×N): `[NAME]` · `[ROLE]` · `[BIO]` · `[PHOTO]` · `[EMAIL]`
Contact: `[GENERAL EMAIL]` · `[REGISTRATION EMAIL]` · `[PRESS EMAIL]` · `[PHONE]` ·
`[INSTAGRAM]` · `[SCHOOL WEBSITE]`
Links: `[DELEGATE GOOGLE FORM URL]` · `[CHAIR GOOGLE FORM URL]` · `[MAPS URL]` · `[PDF URLS]`

**Sample committees for design mock-ups only** (replace with the school's real list):
UNSC — United Nations Security Council · UNHRC — Human Rights Council · WHO — World Health
Organization · UNEP — Environment Programme · ECOSOC — Economic and Social Council ·
HISTORICAL CRISIS — [Crisis Committee]

---

## 10. Build Notes (for the developer stage)

- Static site. Plain HTML/CSS/JS is sufficient; a static generator or a small React/Astro setup is
  fine if preferred. No backend, no CMS, no analytics unless asked.
- Define the palette, type scale, and spacing as CSS custom properties in one place so the school's
  exact grey/yellow can be corrected in a single file.
- Self-host the two web fonts (`woff2`, `font-display: swap`) — do not rely on a CDN the school
  might block.
- Content should live in one editable data file per collection (`committees`, `team`, `schedule`,
  `faq`) rather than being hard-coded into markup, so a teacher can update it later.
- Total page weight target: under 1 MB per page with images compressed to WebP.
- The committee detail page is one template, iterated over the committees data file.
