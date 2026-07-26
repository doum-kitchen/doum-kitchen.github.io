# Doum — Logo Concepts & Variations

**The approved logo is `13`–`17` (and `svg/13-final-wordmark.svg`), cut from the
final artwork in `source/`. Everything numbered `00`–`12` is superseded exploration,
kept for reference only.**

All logos are in `png/` as 1000–1400px PNGs with transparent backgrounds
(except the on-green / on-cream / badge versions, which include their background).
Open the folder in Finder and drag or copy-paste any image into your document.

## Final logo

| File | What it is | Use for |
|------|------------|---------|
| `source/Doum Logo Final.png` | The master artwork, both colourways | The original — cut new assets from this |
| `13-final-fruit.png` | Painted fruit alone, transparent | The site mark; works on cream and green |
| `14-final-lockup-dark.png` | Fruit + wordmark, olive type, transparent | Full logo on light backgrounds |
| `15-final-lockup-cream.png` | Fruit + wordmark, cream type, transparent | Full logo on green / dark backgrounds |
| `16-final-wordmark-dark.png` | DOUM + Test kitchen, olive type | Wordmark alone, light backgrounds |
| `17-final-wordmark-cream.png` | DOUM + Test kitchen, cream type | Wordmark alone, dark backgrounds |
| `svg/13-final-wordmark.svg` | DOUM lettering traced to vector, `currentColor` | Any size, any colour — what the site uses |

The transparent cutouts were un-mixed against the artwork's cream `#EDE5D0` and
green `#4A5A2E` backgrounds rather than hard-keyed, so the watercolour edges stay
soft. The fruit silhouette is forced opaque so its white highlight reads as paint
rather than a hole.

## Superseded explorations

| File | What it is | Use for |
|------|------------|---------|
| `00-overview.png` | One-page board of every mark + palette | The "document" overview |
| `01-primary.png` | Final mark, olive hand-drawn outline, transparent | Light backgrounds |
| `02-primary-on-cream.png` | Same, on the cream brand background | Cream surfaces |
| `03-reversed-on-green.png` | Cream outline on olive green | Dark / green backgrounds (the hero) |
| `04-badge.png` | Cream fruit inside an olive roundel | Instagram avatar, stamps, stickers |
| `05-minimal.png` | Single terracotta line, transparent | Favicon, tiny app mark, embossing |
| `06-concept-loose-ink.png` | Exploration: flat loose ink + wash | Archive |
| `07-concept-realistic.png` | Exploration: heavy shading + speckles | Archive |
| `08-concept-natural.png` | Exploration: toned-down natural | Archive |
| `09-lockup-primary.png` | Fruit + DOUM / Test Kitchen wordmark, cream | Full logo, light backgrounds |
| `10-lockup-reversed.png` | Fruit + wordmark, on green | Full logo, dark backgrounds |

## Palette
- Olive `#4A5A2E` · Cream `#EDE5D0` · Terracotta `#A4664A` · Deep olive `#3A4723`

## Type
- Logo wordmark: **The Storyline** — commercial, not a webfont, so the site uses
  the traced `svg/13-final-wordmark.svg` rather than live text
- Sub-label in the artwork: a geometric sans close to Poppins Light
- On the site today: Amatic SC (headings) · Josefin Sans (body, sub-labels)

The vector sources are in `svg/`; regenerate the PNGs with
`node gen-logos.mjs && node gen-lockups.mjs && node gen-sheet.mjs`
then Quick Look the SVGs to PNG.
