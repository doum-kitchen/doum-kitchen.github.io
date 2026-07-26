import { writeFileSync, readFileSync } from 'node:fs'

const amatic = readFileSync('/tmp/amatic.ttf').toString('base64')
const josefin = readFileSync('/tmp/josefin.ttf').toString('base64')
const FONTS = `
  @font-face{font-family:'AmaticSC';src:url(data:font/ttf;base64,${amatic}) format('truetype');font-weight:700;}
  @font-face{font-family:'JosefinSans';src:url(data:font/ttf;base64,${josefin}) format('truetype');font-weight:600;}`

const F = "M 0,-57 C 28,-59 47,-38 46,-10 C 45,16 38,40 22,53 C 12,61 -10,61 -22,52 C -39,39 -46,16 -45,-10 C -44,-38 -27,-55 0,-57 Z"
const STEM = "M -3,-55 C -5,-65 5,-69 9,-62 C 10,-58 5,-56 1,-56 Z"
const HOOK = "M 1,-57 C 5,-68 13,-67 12,-58"
const SHEEN = "M -22,-32 C -31,-17 -29,1 -19,12"
const ECHO = "M 1,-55 C 27,-57 45,-37 45,-9 C 44,17 37,40 21,52 C 11,59 -10,60 -21,51 C -38,39 -44,17 -44,-9 C -43,-36 -26,-53 1,-55"

const shade = (id, s = 1) => `<g clip-path="url(#${id})">
  <ellipse cx="16" cy="18" rx="44" ry="48" fill="#7E4326" opacity="${0.28 * s}"/>
  <ellipse cx="12" cy="34" rx="30" ry="22" fill="#5F3320" opacity="${0.18 * s}"/>
  <ellipse cx="-16" cy="-22" rx="24" ry="28" fill="#C9A87E" opacity="${0.22 * s}"/>
  <circle cx="19" cy="-4" r="1.6" fill="#5A3320" opacity="0.3"/><circle cx="24" cy="23" r="1.7" fill="#5A3320" opacity="0.3"/>
  <circle cx="-7" cy="19" r="1.3" fill="#5A3320" opacity="0.26"/><circle cx="6" cy="-25" r="1.2" fill="#5A3320" opacity="0.24"/></g>`
const hand = (ink, echo, stem) => `<g transform="translate(1.5,2) scale(1.08)">
  <path d="${STEM}" fill="#6B4A2A" stroke="${stem}" stroke-width="1.2" stroke-linejoin="round"/>
  <path d="${F}" fill="none" stroke="${ink}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="${ECHO}" fill="none" stroke="${echo}" stroke-width="1.2" stroke-linecap="round" opacity="0.5" transform="translate(1.6,-1.4)"/>
  <path d="M 44,-18 C 47,-12 47,-4 45,3" fill="none" stroke="${ink}" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
  <path d="M -30,-40 C -24,-46 -16,-49 -8,-49" fill="none" stroke="${ink}" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/></g>`

const mark = (kind, id) => {
  if (kind === 'primary') return `<path d="${F}" fill="#A4664A"/>${shade(id)}<path d="${SHEEN}" fill="none" stroke="#DDD3B8" stroke-width="1.8" stroke-linecap="round" opacity="0.8"/>${hand('#4A5A2E', '#3A4723', '#3A4723')}`
  if (kind === 'reversed') return `<path d="${F}" fill="#A4664A"/>${shade(id, 1.1)}<path d="${SHEEN}" fill="none" stroke="#F0DDB8" stroke-width="1.8" stroke-linecap="round" opacity="0.7"/>${hand('#EDE5D0', '#DDD3B8', '#EDE5D0')}`
  if (kind === 'badge') return `<circle cx="0" cy="0" r="78" fill="#4A5A2E"/><g transform="translate(0,-3) scale(0.78)"><path d="${STEM}" fill="none" stroke="#EDE5D0" stroke-width="4.4" stroke-linejoin="round"/><path d="${F}" fill="none" stroke="#EDE5D0" stroke-width="4.6" stroke-linecap="round" stroke-linejoin="round"/><path d="${SHEEN}" fill="none" stroke="#A4664A" stroke-width="3.6" stroke-linecap="round"/></g>`
  if (kind === 'minimal') return `<path d="${HOOK}" fill="none" stroke="#A4664A" stroke-width="3" stroke-linecap="round"/><path d="${F}" fill="none" stroke="#A4664A" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>`
  if (kind === 'loose') return `<path d="${F}" fill="#A4664A" opacity="0.85" transform="translate(4,6)"/><path d="${F}" fill="none" stroke="#3A4723" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="${HOOK}" fill="none" stroke="#3A4723" stroke-width="2.4" stroke-linecap="round"/><path d="${SHEEN}" fill="none" stroke="#DDD3B8" stroke-width="1.8" stroke-linecap="round"/>`
  if (kind === 'realistic') return `<path d="${F}" fill="#A4664A"/>${shade(id, 1.7)}<path d="${STEM}" fill="#6B4A2A" stroke="#46301C" stroke-width="1.4" stroke-linejoin="round"/><path d="${F}" fill="none" stroke="#3A4723" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="${SHEEN}" fill="none" stroke="#F0DDB8" stroke-width="1.6" stroke-linecap="round" opacity="0.8"/>`
  if (kind === 'natural') return `<path d="${F}" fill="#A4664A"/>${shade(id)}<path d="${STEM}" fill="#6B4A2A" stroke="#46301C" stroke-width="1.4" stroke-linejoin="round"/><path d="${F}" fill="none" stroke="#3A4723" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`
}

const cells = [
  ['primary', 'Primary  ·  olive outline', '#F3EEE0', '#3A4723'],
  ['reversed', 'Reversed  ·  on green', '#4A5A2E', '#EDE5D0'],
  ['badge', 'Badge  ·  avatar / social', '#F3EEE0', '#3A4723'],
  ['minimal', 'Minimal  ·  single line', '#F3EEE0', '#3A4723'],
  ['loose', 'Concept  ·  loose ink + wash', '#F3EEE0', '#3A4723'],
  ['natural', 'Concept  ·  natural', '#F3EEE0', '#3A4723'],
  ['realistic', 'Concept  ·  realistic', '#F3EEE0', '#3A4723'],
  ['primary', 'Primary  ·  transparent', 'none', '#3A4723'],
]

const cols = 4, cw = 288, tileH = 280, gx = 18, gy = 60, ox = 40, oy = 210
let cellsSvg = ''
cells.forEach(([kind, label, bg, txt], i) => {
  const cx = ox + (i % cols) * (cw + gx)
  const cy = oy + Math.floor(i / cols) * (tileH + gy)
  const tile = bg === 'none'
    ? `<rect x="${cx}" y="${cy}" width="${cw}" height="${tileH}" rx="12" fill="#EDE5D0" stroke="#4A5A2E" stroke-opacity="0.2" stroke-dasharray="3 5"/>`
    : `<rect x="${cx}" y="${cy}" width="${cw}" height="${tileH}" rx="12" fill="${bg}"/>`
  cellsSvg += `${tile}
    <g transform="translate(${cx + cw / 2},${cy + tileH / 2}) scale(1.5)"><defs><clipPath id="c${i}"><path d="${F}"/></clipPath></defs>${mark(kind, `c${i}`)}</g>
    <text x="${cx + cw / 2}" y="${cy + tileH + 34}" text-anchor="middle" fill="#5C5040" font-family="'JosefinSans',sans-serif" font-size="16" font-weight="600" letter-spacing="1">${label}</text>`
})

const swatches = [['#4A5A2E', 'Olive'], ['#EDE5D0', 'Cream'], ['#A4664A', 'Terracotta'], ['#3A4723', 'Deep olive']]
let palette = ''
swatches.forEach(([hex, n], i) => {
  const x = 40 + i * 230
  palette += `<rect x="${x}" y="1095" width="66" height="66" rx="10" fill="${hex}" stroke="#0000001a"/>
    <text x="${x + 80}" y="1125" fill="#5C5040" font-family="'JosefinSans',sans-serif" font-size="16" font-weight="600">${n}</text>
    <text x="${x + 80}" y="1147" fill="#9a8f7d" font-family="'JosefinSans',sans-serif" font-size="13" font-weight="600">${hex}</text>`
})

const svg = `<svg width="1300" height="1300" viewBox="0 0 1300 1300" xmlns="http://www.w3.org/2000/svg">
  <style>${FONTS}</style>
  <rect width="1300" height="1300" fill="#FBF8F0"/>
  <text x="40" y="96" fill="#3A4723" font-family="'AmaticSC',cursive" font-size="92" font-weight="700">DOUM</text>
  <text x="44" y="140" fill="#A4664A" font-family="'JosefinSans',sans-serif" font-size="17" font-weight="600" letter-spacing="6">LOGO CONCEPTS &amp; VARIATIONS</text>
  <line x1="40" y1="170" x2="1260" y2="170" stroke="#4A5A2E" stroke-opacity="0.15"/>
  ${cellsSvg}
  <line x1="40" y1="1040" x2="1260" y2="1040" stroke="#4A5A2E" stroke-opacity="0.15"/>
  <text x="40" y="1078" fill="#3A4723" font-family="'JosefinSans',sans-serif" font-size="15" font-weight="600" letter-spacing="3">PALETTE</text>
  ${palette}
  <text x="40" y="1230" fill="#9a8f7d" font-family="'JosefinSans',sans-serif" font-size="13" font-weight="600">Wordmark lockups supplied separately · 09-lockup-primary.png · 10-lockup-reversed.png</text>
</svg>`
writeFileSync(new URL('./svg/00-overview.svg', import.meta.url), svg)
console.log('Generated overview sheet')
