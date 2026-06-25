<template>
  <div class="relative">
    <KitchenIllustrations />
    <NavBar @open-order="scrollToOrder" />

    <main>
      <HeroSection @open-menu="menuOpen = true" @open-order="scrollToOrder" />
      <PhilosophySection />
      <ServicesSection />
      <ChefsSection />
      <OrderSection />
    </main>

    <FooterSection />

    <!-- Menu modal (teleported to body to avoid stacking-context issues) -->
    <Teleport to="body">
      <Transition name="modal">
        <MenuModal v-if="menuOpen" @close="menuOpen = false" />
      </Transition>
    </Teleport>

    <!-- Scroll-to-top button -->
    <Transition name="modal">
      <button
        v-if="showTop"
        @click="scrollTop"
        aria-label="Back to top"
        class="fixed bottom-8 right-8 z-30 w-11 h-11 bg-doum-green/90 hover:bg-doum-green text-doum-cream flex items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-0.5"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
        </svg>
      </button>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import KitchenIllustrations from '../components/KitchenIllustrations.vue'
import NavBar          from '../components/NavBar.vue'
import HeroSection     from '../components/HeroSection.vue'
import PhilosophySection from '../components/PhilosophySection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import ChefsSection    from '../components/ChefsSection.vue'
import MenuSection     from '../components/MenuSection.vue'
import MenuModal       from '../components/MenuModal.vue'
import OrderSection    from '../components/OrderSection.vue'
import FooterSection   from '../components/FooterSection.vue'

const menuOpen = ref(false)
const showTop  = ref(false)

const scrollToOrder = () => {
  document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })
}

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

const onScroll = () => { showTop.value = window.scrollY > 500 }

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  // Close modal on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') menuOpen.value = false
  })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
