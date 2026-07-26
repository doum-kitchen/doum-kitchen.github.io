import fs from 'node:fs'
import {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, ImageRun,
  AlignmentType, HeadingLevel, BorderStyle, WidthType, ShadingType, VerticalAlign, PageBreak
} from 'docx'

const P = (n) => fs.readFileSync(new URL(`./png/${n}`, import.meta.url))
const OLIVE = '4A5A2E', DEEPOLIVE = '3A4723', CREAM = 'EDE5D0', TERRA = 'A4664A'
const GREENMID = '5C7139', CREAMDK = 'DDD3B8', INK = '2B2B26', MUTE = '6E665A'

const img = (file, w, h) => new ImageRun({
  type: 'png', data: P(file), transformation: { width: w, height: h },
  altText: { title: file, description: file, name: file },
})

const center = (children, spacing = {}) => new Paragraph({ alignment: AlignmentType.CENTER, spacing, children })

const label = (text, color = TERRA) => new Paragraph({
  spacing: { before: 60, after: 40 },
  children: [new TextRun({ text: text.toUpperCase(), font: 'Arial', size: 17, bold: true, color, characterSpacing: 60 })],
})

const body = (text, opts = {}) => new Paragraph({
  spacing: { after: 140, line: 300 },
  children: [new TextRun({ text, font: 'Arial', size: 21, color: INK, ...opts })],
})

const bullet = (text) => new Paragraph({
  numbering: { reference: 'b', level: 0 }, spacing: { after: 80, line: 290 },
  children: [new TextRun({ text, font: 'Arial', size: 21, color: INK })],
})

const rule = () => new Paragraph({
  spacing: { before: 60, after: 200 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: OLIVE, space: 1 } },
  children: [new TextRun({ text: '' })],
})

// ---- Color swatch table -------------------------------------------------
const swatchRow = (hex, name, role) => new TableRow({
  children: [
    new TableCell({
      width: { size: 1500, type: WidthType.DXA }, columnSpan: 1,
      shading: { fill: hex, type: ShadingType.CLEAR },
      margins: { top: 260, bottom: 260, left: 120, right: 120 },
      children: [new Paragraph({ children: [] })],
    }),
    new TableCell({
      width: { size: 2200, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER,
      margins: { top: 80, bottom: 80, left: 160, right: 120 },
      children: [
        new Paragraph({ children: [new TextRun({ text: name, font: 'Arial', size: 21, bold: true, color: INK })] }),
        new Paragraph({ children: [new TextRun({ text: '#' + hex, font: 'Arial', size: 18, color: MUTE })] }),
      ],
    }),
    new TableCell({
      width: { size: 5660, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER,
      margins: { top: 80, bottom: 80, left: 120, right: 120 },
      children: [new Paragraph({ children: [new TextRun({ text: role, font: 'Arial', size: 20, color: INK })] })],
    }),
  ],
})

const noBorder = { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }, insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: 'E5DECB' }, insideVertical: { style: BorderStyle.NONE } }

const paletteTable = new Table({
  width: { size: 9360, type: WidthType.DXA }, columnWidths: [1500, 2200, 5660], borders: noBorder,
  rows: [
    swatchRow(OLIVE, 'Olive Green', 'Primary brand colour — backgrounds, the Services section, headings.'),
    swatchRow(DEEPOLIVE, 'Deep Olive', 'Logo outline, footers, deepest shade for contrast.'),
    swatchRow(CREAM, 'Cream', 'Primary surface and reversed type on dark backgrounds.'),
    swatchRow(TERRA, 'Terracotta', 'Accent — the doum fruit, labels, dividers, call-to-action highlights.'),
    swatchRow(GREENMID, 'Mid Olive', 'Secondary green for hover states and subtle layering.'),
    swatchRow(CREAMDK, 'Cream Dark', 'Secondary surface, sheen highlights, soft borders.'),
  ],
})

// ---- Logo variation grid ------------------------------------------------
const varCell = (file, w, h, name, use) => new TableCell({
  width: { size: 4680, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER,
  margins: { top: 140, bottom: 140, left: 140, right: 140 },
  children: [
    center([img(file, w, h)]),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 80 },
      children: [new TextRun({ text: name, font: 'Arial', size: 20, bold: true, color: DEEPOLIVE })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 40 },
      children: [new TextRun({ text: use, font: 'Arial', size: 18, color: MUTE })] }),
  ],
})

const varRow = (a, b) => new TableRow({ children: [a, b] })

const variationsTable = new Table({
  width: { size: 9360, type: WidthType.DXA }, columnWidths: [4680, 4680],
  borders: { top: { style: BorderStyle.SINGLE, size: 4, color: 'E5DECB' }, bottom: { style: BorderStyle.SINGLE, size: 4, color: 'E5DECB' }, left: { style: BorderStyle.SINGLE, size: 4, color: 'E5DECB' }, right: { style: BorderStyle.SINGLE, size: 4, color: 'E5DECB' }, insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: 'E5DECB' }, insideVertical: { style: BorderStyle.SINGLE, size: 4, color: 'E5DECB' } },
  rows: [
    varRow(
      varCell('01-primary.png', 150, 150, 'Primary mark', 'Light backgrounds'),
      varCell('03-reversed-on-green.png', 150, 150, 'Reversed', 'Dark / green backgrounds')),
    varRow(
      varCell('04-badge.png', 150, 150, 'Badge', 'Avatar · social · stamps'),
      varCell('05-minimal.png', 150, 150, 'Minimal', 'Favicon · tiny sizes')),
    varRow(
      varCell('09-lockup-primary.png', 165, 165, 'Lockup — light', 'Full logo on cream'),
      varCell('10-lockup-reversed.png', 165, 165, 'Lockup — dark', 'Full logo on green')),
  ],
})

// ---- Document -----------------------------------------------------------
const H1 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_1, spacing: { before: 80, after: 120 },
  children: [new TextRun({ text: t, font: 'Arial', bold: true, size: 36, color: DEEPOLIVE })] })
const H2 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 200, after: 80 },
  children: [new TextRun({ text: t, font: 'Arial', bold: true, size: 26, color: OLIVE })] })

const doc = new Document({
  numbering: { config: [{ reference: 'b', levels: [{ level: 0, format: 'bullet', text: '•', alignment: AlignmentType.LEFT, style: { run: { color: TERRA }, paragraph: { indent: { left: 460, hanging: 260 } } } }] }] },
  sections: [
    // COVER
    {
      properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
      children: [
        new Paragraph({ spacing: { before: 1400 }, children: [] }),
        center([img('10-lockup-reversed.png', 320, 320)]),
        center([new TextRun({ text: 'BRAND MANUAL', font: 'Arial', bold: true, size: 40, color: DEEPOLIVE, characterSpacing: 120 })], { before: 360 }),
        center([new TextRun({ text: 'Doum Test Kitchen', font: 'Arial', size: 26, color: TERRA })], { before: 120 }),
        center([new TextRun({ text: 'Cairo · Egypt', font: 'Arial', size: 20, color: MUTE, characterSpacing: 60 })], { before: 60 }),
        center([new TextRun({ text: 'Version 1.0 · 2026', font: 'Arial', size: 18, color: MUTE })], { before: 1600 }),
      ],
    },
    // BODY
    {
      properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
      children: [
        H1('1 · The Brand'), rule(),
        body('Doum Test Kitchen is a Cairo-based test kitchen built on curiosity, collaboration, and a deep respect for ingredients. We pair rigorous, laboratory-minded technique with the warmth of Egyptian heritage cooking.'),
        body('Our promise is fine dining, made approachable — hearty, generous food rooted in memory, presented without pretension. This manual sets out how the brand looks and sounds so that every touchpoint feels unmistakably Doum.'),
        H2('Brand idea'),
        body('Where culinary science meets heritage.'),

        new Paragraph({ children: [new PageBreak()] }),
        H1('2 · The Logo'), rule(),
        body('The mark is a hand-drawn doum fruit — the fruit of the doum palm, native to Egypt. It is drawn loosely, in the spirit of an illustrator’s ink-and-wash sketch: a confident outline that sits slightly off-register from a soft terracotta wash, with gentle shading, a few skin speckles, and a small stem. The looseness is intentional; it signals a kitchen that is handmade, exploratory, and human.'),
        center([img('09-lockup-primary.png', 250, 250)], { before: 120, after: 80 }),
        center([new TextRun({ text: 'Primary lockup — fruit mark with the Amatic SC wordmark and Josefin Sans sub-label.', font: 'Arial', size: 18, italics: true, color: MUTE })], { after: 80 }),

        new Paragraph({ children: [new PageBreak()] }),
        H1('3 · Logo Variations'), rule(),
        body('Use the version that gives the clearest contrast against its background. The badge and minimal marks exist for small and square placements.'),
        variationsTable,

        new Paragraph({ children: [new PageBreak()] }),
        H1('4 · Usage & Clear Space'), rule(),
        H2('Do'),
        bullet('Keep clear space around the logo equal to at least the height of the fruit’s stem on all sides.'),
        bullet('Use the reversed (cream-outline) mark on olive green or photography; use the primary (olive-outline) mark on cream and light surfaces.'),
        bullet('Reach for the badge on circular placements — social avatars, stickers, stamps — and the minimal mark for favicons.'),
        H2('Don’t'),
        bullet('Don’t recolour the fruit outside the brand palette or add effects, gradients, or drop shadows.'),
        bullet('Don’t stretch, rotate, or outline the wordmark, and don’t place the olive-outline mark on a dark background where it disappears.'),
        bullet('Don’t reintroduce the old palm-sprout symbol — the doum fruit alone is the mark.'),

        new Paragraph({ children: [new PageBreak()] }),
        H1('5 · Colour Palette'), rule(),
        body('Four core colours carry the brand, supported by two secondary shades. Pair olive green with cream, and let terracotta do the accenting.'),
        paletteTable,

        new Paragraph({ children: [new PageBreak()] }),
        H1('6 · Typography'), rule(),
        H2('Amatic SC — Display & wordmark'),
        body('The hand-drawn display face used for “DOUM” and large headlines. It carries the same warm, handmade quality as the fruit mark. Use Bold weight for the wordmark.'),
        H2('Josefin Sans — Labels & body'),
        body('A clean geometric sans for sub-labels, navigation, captions, and running text. Use generous letter-spacing in uppercase for small labels such as “TEST KITCHEN”.'),
        body('Both are free Google Fonts, keeping the brand easy to apply across web and print.', { italics: true, color: MUTE, size: 19 }),

        new Paragraph({ children: [new PageBreak()] }),
        H1('7 · Contact'), rule(),
        label('Email'), body('doumtestkitchen@gmail.com'),
        label('Phone'), body('+20 102 255 9335'), body('+20 111 600 2086'),
        label('Location'), body('Cairo, Egypt'),
        label('Web'), body('doum-kitchen.github.io'),
      ],
    },
  ],
})

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(new URL('./Doum_Kitchen_Brand_Manual.docx', import.meta.url), buf)
  console.log('Wrote Doum_Kitchen_Brand_Manual.docx')
})
