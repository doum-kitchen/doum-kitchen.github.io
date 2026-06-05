<template>
  <div
    class="absolute inset-0 pointer-events-none overflow-hidden"
    aria-hidden="true"
    style="z-index: 2"
  >

    <!-- ════════════════════════════════════════════════════════
         DARK SECTIONS  (hero · services · order · footer)
         → cream strokes so they show on dark green backgrounds
         ════════════════════════════════════════════════════════ -->

    <!-- Herb sprig — top-left, hero -->
    <svg width="30" height="85" viewBox="0 0 35 95"
      fill="none" stroke="#EDE5D0" stroke-linecap="round" stroke-linejoin="round"
      style="position:absolute; top:3%; left:4%; opacity:0.20; transform:rotate(12deg)">
      <path d="M18,90 C17,68 19,45 18,10" stroke-width="1.5"/>
      <path d="M18,78 C11,72 7,63 11,58 C15,52 18,65 18,78" stroke-width="1.3"/>
      <path d="M18,66 C25,60 29,51 25,45 C21,40 18,53 18,66" stroke-width="1.3"/>
      <path d="M18,54 C11,48 8,39 12,34 C16,28 18,41 18,54" stroke-width="1.3"/>
      <path d="M18,42 C25,36 28,27 24,22 C20,16 18,30 18,42" stroke-width="1.3"/>
    </svg>

    <!-- Lemon — top-right, hero -->
    <svg width="78" height="54" viewBox="0 0 80 55"
      fill="none" stroke="#EDE5D0" stroke-linecap="round" stroke-linejoin="round"
      style="position:absolute; top:6%; right:5%; opacity:0.21; transform:rotate(-10deg)">
      <path d="M16,28 C15,14 26,5 40,5 C54,5 65,14 64,28 C65,42 54,51 40,51 C26,51 15,42 16,28Z" stroke-width="1.6"/>
      <path d="M16,28 C10,23 6,28 10,28 C6,28 10,33 16,28" stroke-width="1.3"/>
      <path d="M64,28 C70,23 74,28 70,28 C74,28 70,33 64,28" stroke-width="1.3"/>
      <path d="M40,5 Q42,28 40,51" stroke-width="0.8" stroke-opacity="0.55"/>
    </svg>

    <!-- Garlic bulb — left, hero -->
    <svg width="52" height="66" viewBox="0 0 55 70"
      fill="none" stroke="#EDE5D0" stroke-linecap="round" stroke-linejoin="round"
      style="position:absolute; top:11%; left:6%; opacity:0.19; transform:rotate(-14deg)">
      <path d="M8,50 C6,32 16,10 27,8 C38,10 48,32 46,50 C44,65 36,72 27,72 C18,72 10,65 8,50Z" stroke-width="1.5"/>
      <path d="M27,8 C26,5 25,2 27,1 C29,2 28,5 27,8" stroke-width="1.3"/>
      <path d="M18,18 C20,35 22,55 23,70" stroke-width="0.75" stroke-opacity="0.5"/>
      <path d="M36,18 C34,35 32,55 31,70" stroke-width="0.75" stroke-opacity="0.5"/>
      <path d="M20,72 C19,76 18,78" stroke-width="1.0"/>
      <path d="M27,72 C27,77 27,79" stroke-width="1.0"/>
      <path d="M34,72 C35,76 36,78" stroke-width="1.0"/>
    </svg>

    <!-- Knife — right, hero -->
    <svg width="28" height="100" viewBox="0 0 28 100"
      fill="none" stroke="#EDE5D0" stroke-linecap="round" stroke-linejoin="round"
      style="position:absolute; top:13%; right:7%; opacity:0.20; transform:rotate(-8deg)">
      <path d="M14,3 C12,3 10,20 10,45 L18,45 C18,20 16,3 14,3Z" stroke-width="1.5"/>
      <path d="M7,47 C9,45 19,45 21,47" stroke-width="1.4"/>
      <path d="M10,48 C9,68 11,88 10,97" stroke-width="1.6"/>
      <path d="M18,48 C19,68 17,88 18,97" stroke-width="1.6"/>
      <path d="M10,97 C12,100 16,100 18,97" stroke-width="1.3"/>
      <circle cx="14" cy="62" r="1.5" stroke-width="0.9"/>
      <circle cx="14" cy="76" r="1.5" stroke-width="0.9"/>
    </svg>

    <!-- Whisk — left, services -->
    <svg width="52" height="110" viewBox="0 0 62 128"
      fill="none" stroke="#EDE5D0" stroke-linecap="round" stroke-linejoin="round"
      style="position:absolute; top:30%; left:3%; opacity:0.21; transform:rotate(18deg)">
      <path d="M31,122 C30,98 32,88 31,72" stroke-width="1.7"/>
      <path d="M21,72 C25,70 37,70 41,72" stroke-width="1.3"/>
      <path d="M31,72 C18,66 13,54 16,42 C19,31 24,23 31,22" stroke-width="1.5"/>
      <path d="M31,72 C24,65 21,53 24,42 C27,33 29,26 31,22" stroke-width="1.4"/>
      <path d="M31,72 C38,65 41,53 38,42 C35,33 33,26 31,22" stroke-width="1.4"/>
      <path d="M31,72 C44,66 49,54 46,42 C43,31 38,23 31,22" stroke-width="1.5"/>
    </svg>

    <!-- Ladle — right, services -->
    <svg width="80" height="94" viewBox="0 0 90 100"
      fill="none" stroke="#EDE5D0" stroke-linecap="round" stroke-linejoin="round"
      style="position:absolute; top:37%; right:4%; opacity:0.20; transform:rotate(22deg)">
      <path d="M5,30 C4,14 14,4 25,4 C36,4 46,14 46,30 C46,46 36,56 25,56 C14,56 5,46 5,30Z" stroke-width="1.5"/>
      <path d="M5,25 C10,20 40,20 46,25" stroke-width="1.2"/>
      <path d="M44,38 C58,56 72,74 80,88" stroke-width="1.8"/>
      <path d="M80,88 C78,93 76,95 78,96 C80,97 82,93 80,88" stroke-width="1.3"/>
    </svg>

    <!-- Pot — left, order -->
    <svg width="84" height="72" viewBox="0 0 100 86"
      fill="none" stroke="#EDE5D0" stroke-linecap="round" stroke-linejoin="round"
      style="position:absolute; top:71%; left:5%; opacity:0.21; transform:rotate(10deg)">
      <path d="M14,30 C12,64 20,80 50,80 C80,80 88,64 86,30" stroke-width="1.6"/>
      <path d="M14,30 C22,25 78,25 86,30" stroke-width="1.5"/>
      <path d="M86,44 C93,40 98,44 98,50 C98,56 93,60 86,56" stroke-width="1.4"/>
      <path d="M14,44 C7,40 2,44 2,50 C2,56 7,60 14,56" stroke-width="1.4"/>
      <path d="M22,25 C30,17 70,17 78,25" stroke-width="1.5"/>
      <path d="M50,17 C49,13 50,8" stroke-width="1.4"/>
      <path d="M46,8 C48,6 52,6 54,8" stroke-width="1.3"/>
    </svg>

    <!-- Oil bottle — right, order -->
    <svg width="40" height="102" viewBox="0 0 42 108"
      fill="none" stroke="#EDE5D0" stroke-linecap="round" stroke-linejoin="round"
      style="position:absolute; top:75%; right:5%; opacity:0.19; transform:rotate(-12deg)">
      <path d="M5,55 C4,35 10,22 21,22 C32,22 38,35 37,55 C37,80 30,100 21,100 C12,100 5,80 5,55Z" stroke-width="1.5"/>
      <path d="M13,22 C14,12 16,6 21,5 C26,6 28,12 29,22" stroke-width="1.4"/>
      <path d="M17,5 C18,2 24,2 25,5" stroke-width="1.3"/>
      <path d="M9,50 L9,70 C9,80 33,80 33,70 L33,50 C33,40 9,40 9,50" stroke-width="0.75" stroke-opacity="0.5"/>
    </svg>

    <!-- Rolling pin — right, order/footer -->
    <svg width="108" height="42" viewBox="0 0 132 50"
      fill="none" stroke="#EDE5D0" stroke-linecap="round" stroke-linejoin="round"
      style="position:absolute; top:81%; right:3%; opacity:0.21; transform:rotate(-18deg)">
      <path d="M18,12 C40,8 92,8 114,12" stroke-width="1.6"/>
      <path d="M18,36 C40,40 92,40 114,36" stroke-width="1.6"/>
      <path d="M18,12 C16,24 18,36" stroke-width="1.5"/>
      <path d="M114,12 C116,24 114,36" stroke-width="1.5"/>
      <path d="M18,14 C12,12 6,14 5,22 C6,30 12,34 18,34" stroke-width="1.4"/>
      <path d="M114,14 C120,12 126,14 127,22 C126,30 120,34 114,34" stroke-width="1.4"/>
      <line x1="42" y1="8" x2="42" y2="40" stroke-width="0.85" stroke-opacity="0.6"/>
      <line x1="66" y1="8" x2="66" y2="40" stroke-width="0.85" stroke-opacity="0.6"/>
      <line x1="90" y1="8" x2="90" y2="40" stroke-width="0.85" stroke-opacity="0.6"/>
    </svg>

    <!-- Small herb sprig — bottom-right, footer -->
    <svg width="24" height="64" viewBox="0 0 28 78"
      fill="none" stroke="#EDE5D0" stroke-linecap="round" stroke-linejoin="round"
      style="position:absolute; top:87%; right:6%; opacity:0.18; transform:rotate(-22deg)">
      <path d="M14,74 C13,56 15,38 14,8" stroke-width="1.4"/>
      <path d="M14,62 C8,55 5,47 9,42 C13,36 14,50 14,62" stroke-width="1.3"/>
      <path d="M14,50 C20,43 24,35 20,30 C16,24 14,38 14,50" stroke-width="1.3"/>
      <path d="M14,38 C8,32 6,23 10,18 C14,12 14,26 14,38" stroke-width="1.3"/>
    </svg>

    <!-- Small lemon — bottom-left, footer -->
    <svg width="58" height="40" viewBox="0 0 80 55"
      fill="none" stroke="#EDE5D0" stroke-linecap="round" stroke-linejoin="round"
      style="position:absolute; top:88%; left:6%; opacity:0.20; transform:rotate(16deg)">
      <path d="M16,28 C15,14 26,5 40,5 C54,5 65,14 64,28 C65,42 54,51 40,51 C26,51 15,42 16,28Z" stroke-width="1.6"/>
      <path d="M16,28 C10,23 6,28 10,28 C6,28 10,33 16,28" stroke-width="1.3"/>
      <path d="M64,28 C70,23 74,28 70,28 C74,28 70,33 64,28" stroke-width="1.3"/>
    </svg>


    <!-- ════════════════════════════════════════════════════════
         CREAM SECTIONS  (philosophy · chefs · menu)
         → dark green strokes on light backgrounds
         ════════════════════════════════════════════════════════ -->

    <!-- Egg — left, philosophy -->
    <svg width="44" height="56" viewBox="0 0 52 64"
      fill="none" stroke="#4A5A2E" stroke-linecap="round" stroke-linejoin="round"
      style="position:absolute; top:17%; left:5%; opacity:0.22; transform:rotate(8deg)">
      <path d="M8,38 C7,20 16,5 26,5 C36,5 45,20 45,38 C45,56 36,62 26,62 C16,62 8,55 8,38Z" stroke-width="1.6"/>
    </svg>

    <!-- Wine glass — right, philosophy -->
    <svg width="50" height="100" viewBox="0 0 60 118"
      fill="none" stroke="#4A5A2E" stroke-linecap="round" stroke-linejoin="round"
      style="position:absolute; top:20%; right:4%; opacity:0.21; transform:rotate(-6deg)">
      <path d="M8,10 C6,30 18,56 30,57" stroke-width="1.6"/>
      <path d="M52,10 C54,30 42,56 30,57" stroke-width="1.6"/>
      <path d="M20,57 C24,61 36,61 40,57" stroke-width="1.3"/>
      <path d="M30,61 C29,81 31,93 30,103" stroke-width="1.6"/>
      <path d="M10,108 C18,103 42,103 50,108" stroke-width="1.6"/>
      <path d="M10,108 C20,112 40,112 50,108" stroke-width="1.3"/>
    </svg>

    <!-- Fork — right, chefs -->
    <svg width="30" height="100" viewBox="0 0 30 100"
      fill="none" stroke="#4A5A2E" stroke-linecap="round" stroke-linejoin="round"
      style="position:absolute; top:46%; right:5%; opacity:0.21; transform:rotate(-14deg)">
      <line x1="8"  y1="5" x2="8"  y2="26" stroke-width="1.5"/>
      <line x1="15" y1="5" x2="15" y2="26" stroke-width="1.5"/>
      <line x1="22" y1="5" x2="22" y2="26" stroke-width="1.5"/>
      <path d="M8,26 C8,35 11,39 15,39 C19,39 22,35 22,26" stroke-width="1.3"/>
      <line x1="15" y1="39" x2="15" y2="95" stroke-width="1.5"/>
    </svg>

    <!-- Fish — left, chefs -->
    <svg width="90" height="54" viewBox="0 0 100 58"
      fill="none" stroke="#4A5A2E" stroke-linecap="round" stroke-linejoin="round"
      style="position:absolute; top:50%; left:3%; opacity:0.20; transform:rotate(10deg)">
      <path d="M26,29 C28,12 60,9 78,29 C60,49 28,46 26,29Z" stroke-width="1.6"/>
      <path d="M26,29 C14,19 4,22 8,29 C4,36 14,39 26,29" stroke-width="1.5"/>
      <circle cx="66" cy="25" r="2.5" stroke-width="1.3"/>
      <path d="M44,16 C42,20 44,24" stroke-width="0.8" stroke-opacity="0.6"/>
      <path d="M52,13 C50,18 52,22" stroke-width="0.8" stroke-opacity="0.6"/>
    </svg>

    <!-- Mushroom — right, chefs/menu -->
    <svg width="66" height="74" viewBox="0 0 70 80"
      fill="none" stroke="#4A5A2E" stroke-linecap="round" stroke-linejoin="round"
      style="position:absolute; top:55%; right:4%; opacity:0.21; transform:rotate(7deg)">
      <path d="M5,38 C5,18 16,6 35,5 C54,6 65,18 65,38" stroke-width="1.6"/>
      <path d="M5,38 C12,44 20,45 28,42 C30,41 40,41 42,42 C50,45 58,44 65,38" stroke-width="1.4"/>
      <path d="M25,42 C23,58 25,70 27,76" stroke-width="1.4"/>
      <path d="M45,42 C47,58 45,70 43,76" stroke-width="1.4"/>
      <path d="M27,76 C30,78 40,78 43,76" stroke-width="1.4"/>
    </svg>

    <!-- Bowl — right, menu -->
    <svg width="84" height="60" viewBox="0 0 100 70"
      fill="none" stroke="#4A5A2E" stroke-linecap="round" stroke-linejoin="round"
      style="position:absolute; top:61%; right:4%; opacity:0.22; transform:rotate(5deg)">
      <path d="M8,20 C9,48 28,63 50,63 C72,63 91,48 92,20" stroke-width="1.6"/>
      <path d="M8,20 C20,15 80,15 92,20" stroke-width="1.5"/>
      <path d="M36,63 C40,68 60,68 64,63" stroke-width="1.4"/>
    </svg>

    <!-- Mortar & pestle — left, menu -->
    <svg width="76" height="68" viewBox="0 0 92 82"
      fill="none" stroke="#4A5A2E" stroke-linecap="round" stroke-linejoin="round"
      style="position:absolute; top:64%; left:4%; opacity:0.22; transform:rotate(-8deg)">
      <path d="M58,5 C57,26 54,40 50,52" stroke-width="1.6"/>
      <path d="M50,52 C47,57 42,60 39,58 C36,56 38,50 44,50" stroke-width="1.4"/>
      <path d="M8,52 C10,68 26,78 46,78 C66,78 82,68 84,52" stroke-width="1.6"/>
      <path d="M8,52 C18,47 74,47 84,52" stroke-width="1.5"/>
    </svg>

    <!-- Chili pepper — right, menu -->
    <svg width="34" height="82" viewBox="0 0 35 85"
      fill="none" stroke="#4A5A2E" stroke-linecap="round" stroke-linejoin="round"
      style="position:absolute; top:67%; right:6%; opacity:0.20; transform:rotate(15deg)">
      <path d="M9,45 C8,25 12,12 17,10 C22,12 26,25 25,45 C24,65 20,80 17,80 C14,80 10,65 9,45Z" stroke-width="1.5"/>
      <path d="M17,10 C16,6 17,3 17,2" stroke-width="1.4"/>
      <path d="M17,6 C21,3 24,6 21,9" stroke-width="1.1"/>
    </svg>

  </div>
</template>
