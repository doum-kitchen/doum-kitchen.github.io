<template>
  <div class="min-h-screen bg-doum-cream">
    <NavBar />

    <section v-if="service" class="pt-40 pb-28 max-w-5xl mx-auto px-6 lg:px-12">

      <!-- Header -->
      <div class="mb-16">
        <RouterLink to="/" class="inline-flex items-center gap-2 font-sans text-[11px] tracking-widest uppercase text-doum-brown mb-10 hover:opacity-70 transition-opacity">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
          </svg>
          Back to Home
        </RouterLink>
        <p class="section-label text-doum-brown mb-4">{{ service.tag }}</p>
        <h1 class="font-serif text-6xl md:text-7xl font-bold text-doum-green leading-tight" v-html="service.title"></h1>
        <div class="divider"></div>
        <p class="font-sans text-doum-green/60 text-sm max-w-lg leading-relaxed">
          {{ service.intro }}
        </p>
      </div>

      <!-- Feature blocks -->
      <div class="grid sm:grid-cols-3 gap-px bg-doum-green/10 mb-20">
        <div v-for="block in service.blocks" :key="block.label" class="bg-doum-cream p-10">
          <p class="font-sans text-[9px] tracking-ultra uppercase text-doum-brown border border-doum-brown/40 inline-block px-3 py-1 mb-6">
            {{ block.label }}
          </p>
          <h3 class="font-serif text-3xl text-doum-green mb-3">{{ block.title }}</h3>
          <p class="font-sans text-doum-green/60 text-sm leading-relaxed">{{ block.description }}</p>
        </div>
      </div>

      <!-- CTA -->
      <div class="border border-doum-green/15 p-12 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p class="font-sans text-[9px] tracking-ultra uppercase text-doum-brown border border-doum-brown/40 inline-block px-3 py-1 mb-6">Get Started</p>
          <h2 class="font-serif text-4xl md:text-5xl text-doum-green mb-3">Interested?</h2>
          <p class="font-sans text-doum-green/60 text-sm max-w-md leading-relaxed">
            Tell us what you have in mind and we'll get back to you within 24 hours.
          </p>
        </div>
        <RouterLink
          :to="service.cta.to"
          class="shrink-0 inline-flex items-center gap-2 font-sans text-[11px] tracking-widest uppercase text-doum-green border border-doum-green/40 px-6 py-3 hover:bg-doum-green hover:text-doum-cream transition-colors"
        >
          {{ service.cta.label }}
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </RouterLink>
      </div>

    </section>

    <FooterSection />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from '../components/NavBar.vue'
import FooterSection from '../components/FooterSection.vue'
import { getService } from '../data/services.js'

const route = useRoute()
const service = computed(() => getService(route.params.slug))
</script>
