<template>
  <footer class="bg-doum-green-dark border-t border-doum-cream/10">

    <!-- Main footer -->
    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid md:grid-cols-3 gap-12">

      <!-- Brand -->
      <div>
        <div class="mb-4">
          <p class="font-serif text-5xl font-bold tracking-[0.3em] text-doum-cream">DOUM</p>
          <p class="font-sans text-[9px] tracking-ultra uppercase text-doum-brown mt-[-2px]">Test Kitchen</p>
        </div>
        <p class="font-sans text-doum-cream/50 text-sm leading-relaxed max-w-xs mt-4">
          A test kitchen built on curiosity, collaboration, and deep respect for ingredients.
          Based in Cairo, Egypt.
        </p>
        <!-- Social -->
        <div class="flex items-center gap-4 mt-8">
          <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"
            class="text-doum-cream/40 hover:text-doum-brown transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener" aria-label="TikTok"
            class="text-doum-cream/40 hover:text-doum-brown transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.24 8.24 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Links -->
      <div class="grid grid-cols-2 gap-8">
        <div>
          <p class="font-sans text-[10px] tracking-ultra uppercase text-doum-brown mb-4">Navigate</p>
          <ul class="space-y-2">
            <li v-for="link in navLinks" :key="link.href">
              <a :href="link.href" class="font-sans text-doum-cream/55 text-sm hover:text-doum-cream transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p class="font-sans text-[10px] tracking-ultra uppercase text-doum-brown mb-4">Services</p>
          <ul class="space-y-2">
            <li v-for="s in serviceLinks" :key="s">
              <span class="font-sans text-doum-cream/55 text-sm">{{ s }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Contact -->
      <div>
        <p class="font-sans text-[10px] tracking-ultra uppercase text-doum-brown mb-4">Contact</p>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <svg class="w-4 h-4 text-doum-brown mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <a href="mailto:doumtestkitchen@gmail.com" class="font-sans text-doum-cream/55 text-sm hover:text-doum-cream transition-colors">
              doumtestkitchen@gmail.com
            </a>
          </li>
          <li class="flex items-start gap-3">
            <svg class="w-4 h-4 text-doum-brown mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <div class="flex flex-col gap-1">
              <a href="tel:+201022559335" class="font-sans text-doum-cream/55 text-sm hover:text-doum-cream transition-colors">+20 102 255 9335</a>
              <a href="tel:+201116002086" class="font-sans text-doum-cream/55 text-sm hover:text-doum-cream transition-colors">+20 111 600 2086</a>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <svg class="w-4 h-4 text-doum-brown mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span class="font-sans text-doum-cream/55 text-sm">Cairo, Egypt</span>
          </li>
        </ul>

        <!-- Product line note -->
        <div class="mt-8 border border-doum-cream/10 p-4">
          <p class="font-sans text-[10px] tracking-widest uppercase text-doum-brown mb-1">Coming Soon</p>
          <p class="font-sans text-doum-cream/50 text-xs leading-relaxed">
            Signature spice blends, preserves, and specialty items for retail.
          </p>
        </div>
      </div>

    </div>

    <!-- Bottom bar -->
    <div class="border-t border-doum-cream/8 px-6 lg:px-12 py-5 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
      <p class="font-sans text-doum-cream/30 text-[11px]">
        © {{ new Date().getFullYear() }} Doum Test Kitchen. All rights reserved.
      </p>
      <p class="font-sans text-doum-cream/20 text-[11px]">
        Cairo · Egypt
      </p>
    </div>

  </footer>
</template>

<script setup>
const navLinks = [
  { href: '#about',    label: 'About'    },
  { href: '#services', label: 'Services' },
  { href: '#chefs',    label: 'Chefs'    },
  { href: '#menu',     label: 'Menu'     },
  { href: '#order',    label: 'Order'    },
]

const serviceLinks = [
  'Private Dining',
  'Weekly Meals',
  'Pop-Ups',
  'Private Events',
  'Product Line',
]
</script>
