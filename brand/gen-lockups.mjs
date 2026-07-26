import { writeFileSync, readFileSync } from 'node:fs'

const amatic = readFileSync('/tmp/amatic.ttf').toString('base64')
const josefin = readFileSync('/tmp/josefin.ttf').toString('base64')

const FONTS = `
  @font-face{font-family:'AmaticSC';src:url(data:font/ttf;base64,${amatic}) format('truetype');font-weight:700;}
  @font-face{font-family:'JosefinSans';src:url(data:font/ttf;base64,${josefin}) format('truetype');font-weight:600;}`

const F = "M 0,-57 C 28,-59 47,-38 46,-10 C 45,16 38,40 22,53 C 12,61 -10,61 -22,52 C -39,39 -46,16 -45,-10 C -44,-38 -27,-55 0,-57 Z"
const STEM = "M -3,-55 C -5,-65 5,-69 9,-62 C 10,-58 5,-56 1,-56 Z"
const SHEEN = "M -22,-32 C -31,-17 -29,1 -19,12"
const ECHO = "M 1,-55 C 27,-57 45,-37 45,-9 C 44,17 37,40 21,52 C 11,59 -10,60 -21,51 C -38,39 -44,17 -44,-9 C -43,-36 -26,-53 1,-55"

const shading = (id, sheenColor) => `
  <g clip-path="url(#${id})">
    <ellipse cx="16" cy="18" rx="44" ry="48" fill="#7E4326" opacity="0.28"/>
    <ellipse cx="12" cy="34" rx="30" ry="22" fill="#5F3320" opacity="0.18"/>
    <ellipse cx="-16" cy="-22" rx="24" ry="28" fill="#C9A87E" opacity="0.22"/>
    <circle cx="19" cy="-4" r="1.6" fill="#5A3320" opacity="0.3"/>
    <circle cx="24" cy="23" r="1.7" fill="#5A3320" opacity="0.3"/>
    <circle cx="-7" cy="19" r="1.3" fill="#5A3320" opacity="0.26"/>
    <circle cx="6" cy="-25" r="1.2" fill="#5A3320" opacity="0.24"/>
  </g>
  <path d="${SHEEN}" fill="none" stroke="${sheenColor}" stroke-width="1.8" stroke-linecap="round" opacity="0.8"/>`

const outline = (ink, echo, stem) => `
  <g transform="translate(1.5,2) scale(1.08)">
    <path d="${STEM}" fill="#6B4A2A" stroke="${stem}" stroke-width="1.2" stroke-linejoin="round"/>
    <path d="${F}" fill="none" stroke="${ink}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="${ECHO}" fill="none" stroke="${echo}" stroke-width="1.2" stroke-linecap="round" opacity="0.5" transform="translate(1.6,-1.4)"/>
    <path d="M 44,-18 C 47,-12 47,-4 45,3" fill="none" stroke="${ink}" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
    <path d="M -30,-40 C -24,-46 -16,-49 -8,-49" fill="none" stroke="${ink}" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
  </g>`

const lockup = (name, bg, inkSet, textMain, textSub) => {
  const svg = `<svg width="1100" height="1100" viewBox="0 0 550 550" xmlns="http://www.w3.org/2000/svg">
  <defs><clipPath id="lc_${name}"><path d="${F}"/></clipPath></defs>
  <style>${FONTS}</style>
  ${bg ? `<rect width="550" height="550" fill="${bg}"/>` : ''}
  <g transform="translate(275,200) scale(1.7)">
    <path d="${F}" fill="#A4664A"/>
    ${shading(`lc_${name}`, inkSet.sheen)}
    ${outline(inkSet.ink, inkSet.echo, inkSet.stem)}
  </g>
  <text x="275" y="430" text-anchor="middle" fill="${textMain}" font-family="'AmaticSC',cursive" font-size="150" font-weight="700" letter-spacing="6">DOUM</text>
  <text x="278" y="470" text-anchor="middle" fill="${textSub}" font-family="'JosefinSans',sans-serif" font-size="22" font-weight="600" letter-spacing="13">TEST KITCHEN</text>
</svg>`
  writeFileSync(new URL(`./svg/${name}.svg`, import.meta.url), svg)
}

lockup('09-lockup-primary', '#EDE5D0',
  { ink: '#4A5A2E', echo: '#3A4723', stem: '#3A4723', sheen: '#DDD3B8' }, '#3A4723', '#A4664A')

lockup('10-lockup-reversed', '#4A5A2E',
  { ink: '#EDE5D0', echo: '#DDD3B8', stem: '#EDE5D0', sheen: '#F0DDB8' }, '#EDE5D0', '#D9B48C')

console.log('Generated lockups')
