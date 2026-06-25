<template>
  <nav
    class="fixed top-0 left-0 right-0 z-40 bg-doum-cream shadow-sm"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">

      <!-- Logo -->
      <a href="#hero" class="group flex flex-col items-start leading-none select-none">
        <span class="font-serif text-[2.5rem] font-bold tracking-[0.3em] text-doum-green">DOUM</span>
        <span class="font-sans text-[8px] tracking-ultra uppercase text-doum-brown mt-[-3px]">Test Kitchen</span>
      </a>

      <!-- Desktop nav -->
      <div class="hidden md:flex items-center gap-10">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="font-sans text-[11px] tracking-widest uppercase text-doum-green/80 hover:text-doum-brown transition-colors duration-200"
        >{{ link.label }}</a>
      </div>

      <!-- CTA + Mobile toggle -->
      <div class="flex items-center gap-4">
        <button
          @click="$emit('open-order')"
          class="hidden md:block btn-primary text-[11px] py-3 px-6"
        >Order Now</button>

        <!-- Hamburger -->
        <button
          @click="mobileOpen = !mobileOpen"
          class="md:hidden text-doum-green p-1"
          aria-label="Toggle menu"
        >
          <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h10"/>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile dropdown -->
    <Transition name="menu">
      <div v-if="mobileOpen" class="md:hidden bg-doum-cream border-t border-doum-green/10 px-6 pb-6 pt-2 flex flex-col gap-1">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          @click="mobileOpen = false"
          class="font-sans text-[11px] tracking-widest uppercase text-doum-green py-3 border-b border-doum-green/10"
        >{{ link.label }}</a>
        <button
          @click="$emit('open-order'); mobileOpen = false"
          class="btn-primary mt-4 text-center text-[11px] py-3"
        >Order Now</button>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineEmits(['open-order'])

const scrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { href: '#about',    label: 'About'    },
  { href: '#services', label: 'Services' },
  { href: '#chefs',    label: 'Chefs'    },
  { href: '#menu',     label: 'Menu'     },
]

const onScroll = () => { scrolled.value = window.scrollY > 60 }

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
