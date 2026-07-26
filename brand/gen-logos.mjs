import { writeFileSync, mkdirSync } from 'node:fs'

mkdirSync(new URL('./svg', import.meta.url), { recursive: true })

const F = "M 0,-57 C 28,-59 47,-38 46,-10 C 45,16 38,40 22,53 C 12,61 -10,61 -22,52 C -39,39 -46,16 -45,-10 C -44,-38 -27,-55 0,-57 Z"
const STEM_WOODY = "M -3,-55 C -5,-65 5,-69 9,-62 C 10,-58 5,-56 1,-56 Z"
const STEM_HOOK = "M 1,-57 C 5,-68 13,-67 12,-58"
const SHEEN = "M -22,-32 C -31,-17 -29,1 -19,12"
const ECHO = "M 1,-55 C 27,-57 45,-37 45,-9 C 44,17 37,40 21,52 C 11,59 -10,60 -21,51 C -38,39 -44,17 -44,-9 C -43,-36 -26,-53 1,-55"

const shading = (id, o = { a: 0.28, b: 0.18, c: 0.22, s: 0.3 }, extra = '') => `
  <g clip-path="url(#${id})">
    <ellipse cx="16" cy="18" rx="44" ry="48" fill="#7E4326" opacity="${o.a}"/>
    <ellipse cx="12" cy="34" rx="30" ry="22" fill="#5F3320" opacity="${o.b}"/>
    <ellipse cx="-16" cy="-22" rx="24" ry="28" fill="#C9A87E" opacity="${o.c}"/>
    <circle cx="19" cy="-4" r="1.6" fill="#5A3320" opacity="${o.s}"/>
    <circle cx="24" cy="23" r="1.7" fill="#5A3320" opacity="${o.s}"/>
    <circle cx="-7" cy="19" r="1.3" fill="#5A3320" opacity="${o.s - 0.04}"/>
    <circle cx="6" cy="-25" r="1.2" fill="#5A3320" opacity="${o.s - 0.06}"/>
    ${extra}
  </g>`

// Final hand-drawn outline (olive on light, or cream on dark)
const handOutline = (ink, echo, stemStroke) => `
  <g transform="translate(1.5,2) scale(1.08)">
    <path d="${STEM_WOODY}" fill="#6B4A2A" stroke="${stemStroke}" stroke-width="1.2" stroke-linejoin="round"/>
    <path d="${F}" fill="none" stroke="${ink}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="${ECHO}" fill="none" stroke="${echo}" stroke-width="1.2" stroke-linecap="round" opacity="0.5" transform="translate(1.6,-1.4)"/>
    <path d="M 44,-18 C 47,-12 47,-4 45,3" fill="none" stroke="${ink}" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
    <path d="M -30,-40 C -24,-46 -16,-49 -8,-49" fill="none" stroke="${ink}" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
  </g>`

const icon = (name, viewW, viewH, body) => {
  const svg = `<svg width="1000" height="1000" viewBox="0 0 ${viewW} ${viewH}" xmlns="http://www.w3.org/2000/svg">
  <defs><clipPath id="c_${name}"><path d="${F}"/></clipPath></defs>
  ${body}
</svg>`
  writeFileSync(new URL(`./svg/${name}.svg`, import.meta.url), svg)
}

const W = 180, H = 180, CX = 90, CY = 95

// 1. Primary — olive hand-drawn outline, transparent
icon('01-primary', W, H, `
  <g transform="translate(${CX},${CY})">
    <path d="${F}" fill="#A4664A"/>
    ${shading(`c_01-primary`)}
    <path d="${SHEEN}" fill="none" stroke="#DDD3B8" stroke-width="1.8" stroke-linecap="round" opacity="0.8"/>
    ${handOutline('#4A5A2E', '#3A4723', '#3A4723')}
  </g>`)

// 2. Primary on cream
icon('02-primary-on-cream', W, H, `
  <rect width="${W}" height="${H}" fill="#EDE5D0"/>
  <g transform="translate(${CX},${CY})">
    <path d="${F}" fill="#A4664A"/>
    ${shading(`c_02-primary-on-cream`)}
    <path d="${SHEEN}" fill="none" stroke="#DDD3B8" stroke-width="1.8" stroke-linecap="round" opacity="0.8"/>
    ${handOutline('#4A5A2E', '#3A4723', '#3A4723')}
  </g>`)

// 3. Reversed — cream outline, on green
icon('03-reversed-on-green', W, H, `
  <rect width="${W}" height="${H}" fill="#4A5A2E"/>
  <g transform="translate(${CX},${CY})">
    <path d="${F}" fill="#A4664A"/>
    ${shading(`c_03-reversed-on-green`, { a: 0.3, b: 0.2, c: 0.24, s: 0.32 })}
    <path d="${SHEEN}" fill="none" stroke="#F0DDB8" stroke-width="1.8" stroke-linecap="round" opacity="0.7"/>
    ${handOutline('#EDE5D0', '#DDD3B8', '#EDE5D0')}
  </g>`)

// 4. Reversed badge — cream line fruit in olive roundel
icon('04-badge', W, H, `
  <circle cx="${CX}" cy="${CY}" r="78" fill="#4A5A2E"/>
  <g transform="translate(${CX},${CY - 3}) scale(0.78)">
    <path d="${STEM_WOODY}" fill="none" stroke="#EDE5D0" stroke-width="4.4" stroke-linejoin="round"/>
    <path d="${F}" fill="none" stroke="#EDE5D0" stroke-width="4.6" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="${SHEEN}" fill="none" stroke="#A4664A" stroke-width="3.6" stroke-linecap="round"/>
  </g>`)

// 5. Minimal single-line mark — terracotta only, transparent
icon('05-minimal', W, H, `
  <g transform="translate(${CX},${CY})">
    <path d="${STEM_HOOK}" fill="none" stroke="#A4664A" stroke-width="3" stroke-linecap="round"/>
    <path d="${F}" fill="none" stroke="#A4664A" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>`)

// 6. Concept — loose ink + wash (flat, green outline)
icon('06-concept-loose-ink', W, H, `
  <g transform="translate(${CX},${CY})">
    <path d="${F}" fill="#A4664A" opacity="0.85" transform="translate(4,6)"/>
    <path d="${F}" fill="none" stroke="#3A4723" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="${STEM_HOOK}" fill="none" stroke="#3A4723" stroke-width="2.4" stroke-linecap="round"/>
    <path d="${SHEEN}" fill="none" stroke="#DDD3B8" stroke-width="1.8" stroke-linecap="round"/>
  </g>`)

// 7. Concept — realistic (heavy shading + speckles)
icon('07-concept-realistic', W, H, `
  <g transform="translate(${CX},${CY})">
    <path d="${F}" fill="#A4664A"/>
    ${shading(`c_07-concept-realistic`, { a: 0.5, b: 0.45, c: 0.5, s: 0.5 },
      '<circle cx="-12" cy="-8" r="1.3" fill="#EAD2A8" opacity="0.45"/><circle cx="3" cy="8" r="1.2" fill="#EAD2A8" opacity="0.4"/>')}
    <path d="${STEM_WOODY}" fill="#6B4A2A" stroke="#46301C" stroke-width="1.4" stroke-linejoin="round"/>
    <path d="${F}" fill="none" stroke="#3A4723" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="${SHEEN}" fill="none" stroke="#F0DDB8" stroke-width="1.6" stroke-linecap="round" opacity="0.8"/>
  </g>`)

// 8. Concept — natural (toned down, no gloss)
icon('08-concept-natural', W, H, `
  <g transform="translate(${CX},${CY})">
    <path d="${F}" fill="#A4664A"/>
    ${shading(`c_08-concept-natural`, { a: 0.32, b: 0.22, c: 0.28, s: 0.3 })}
    <path d="${STEM_WOODY}" fill="#6B4A2A" stroke="#46301C" stroke-width="1.4" stroke-linejoin="round"/>
    <path d="${F}" fill="none" stroke="#3A4723" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
  </g>`)

// 11. Primary — realistic (gradient volume, soft light, skin speckles)
const speckles = [
  [-20,-10,'#4A2818',0.20],[8,-14,'#4A2818',0.22],[16,10,'#4A2818',0.20],
  [2,28,'#4A2818',0.22],[24,-2,'#4A2818',0.18],[30,18,'#4A2818',0.20],
  [12,40,'#4A2818',0.18],[20,34,'#4A2818',0.16],
  [-6,4,'#E8CBA0',0.22],[-14,22,'#E8CBA0',0.20],[-26,6,'#E8CBA0',0.16],[-2,-30,'#E8CBA0',0.18],
].map(([x,y,c,o],i) => `<circle cx="${x}" cy="${y}" r="${(i%3)*0.3+0.9}" fill="${c}" opacity="${o}"/>`).join('')

icon('11-primary-realistic', W, H, `
  <defs>
    <radialGradient id="body11" cx="34%" cy="28%" r="86%">
      <stop offset="0%" stop-color="#D8A578"/>
      <stop offset="30%" stop-color="#B4744F"/>
      <stop offset="62%" stop-color="#8E5030"/>
      <stop offset="100%" stop-color="#5C3220"/>
    </radialGradient>
    <linearGradient id="stem11" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#8A6238"/>
      <stop offset="100%" stop-color="#4E3319"/>
    </linearGradient>
    <radialGradient id="spec11" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#F7EBD2" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#F7EBD2" stop-opacity="0"/>
    </radialGradient>
    <filter id="soft11" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="2.2"/></filter>
    <filter id="shadow11" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="3.5"/></filter>
  </defs>
  <g transform="translate(${CX},${CY})">
    <ellipse cx="4" cy="58" rx="34" ry="9" fill="#3A2318" opacity="0.18" filter="url(#shadow11)"/>
    <path d="${F}" fill="url(#body11)"/>
    <g clip-path="url(#c_11-primary-realistic)">
      <ellipse cx="18" cy="30" rx="40" ry="42" fill="#4A2818" opacity="0.28" filter="url(#soft11)"/>
      <ellipse cx="-8" cy="22" rx="20" ry="15" fill="#C98A5E" opacity="0.16" filter="url(#soft11)"/>
      ${speckles}
      <ellipse cx="-17" cy="-24" rx="13" ry="20" fill="url(#spec11)" transform="rotate(-25 -17 -24)"/>
      <ellipse cx="-20" cy="-30" rx="4" ry="7" fill="#FFF7E6" opacity="0.7" transform="rotate(-25 -20 -30)" filter="url(#soft11)"/>
    </g>
    <path d="${F}" fill="none" stroke="#3A2318" stroke-width="1" opacity="0.35"/>
    <path d="${F}" fill="none" stroke="#3A4723" stroke-width="1.4" opacity="0.14"/>
    <path d="${STEM_WOODY}" fill="url(#stem11)" stroke="#3A2318" stroke-width="0.8" stroke-linejoin="round"/>
  </g>`)

// --- Flat doum (rounder, irregular real-fruit silhouette) ---
// Rounder, slightly angular blob — closer to an actual doum-palm fruit than the mango ovoid.
const DOUM = "M 1,-46 C 24,-50 45,-44 53,-25 C 59,-11 58,7 51,22 C 43,40 25,53 2,53 C -21,54 -41,43 -50,25 C -58,9 -58,-11 -51,-26 C -43,-44 -22,-42 1,-46 Z"
const DOUM_STEM = "M -4,-45 C -6,-55 6,-55 4,-45 Z"

// Flat, simple two-tone doum
icon('12-doum-flat', W, H, `
  <defs><clipPath id="cd_12"><path d="${DOUM}"/></clipPath></defs>
  <g transform="translate(${CX},${CY})">
    <path d="${DOUM_STEM}" fill="#6B4A2A" stroke="#3A4723" stroke-width="2" stroke-linejoin="round"/>
    <path d="${DOUM}" fill="#A4664A"/>
    <g clip-path="url(#cd_12)">
      <ellipse cx="8" cy="40" rx="66" ry="46" fill="#8A4E32"/>
      <ellipse cx="-14" cy="-18" rx="26" ry="20" fill="#B87A56" opacity="0.5"/>
    </g>
    <path d="${DOUM}" fill="none" stroke="#4A5A2E" stroke-width="2.6" stroke-linejoin="round"/>
  </g>`)

console.log('Generated SVGs in brand/svg/')
