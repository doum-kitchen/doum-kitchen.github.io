<template>
  <section id="menu" class="py-28 md:py-36 bg-doum-cream-dark">
    <div class="max-w-6xl mx-auto px-6 lg:px-12">

      <!-- Header -->
      <div class="grid md:grid-cols-2 gap-12 items-end mb-16">
        <div>
          <p class="section-label mb-4">This Week</p>
          <h2 class="font-serif text-6xl md:text-7xl font-bold text-doum-green leading-tight">
            Weekly Menu
          </h2>
          <div class="divider-left"></div>
          <p class="font-sans text-doum-green/65 text-sm leading-relaxed max-w-md">
            We release a new weekly menu every Thursday — elevated home-style dishes
            crafted with professional techniques. Order for Monday delivery.
          </p>
        </div>
        <div class="flex md:justify-end items-center gap-4">
          <div class="text-right hidden md:block">
            <p class="font-sans text-[10px] tracking-widest uppercase text-doum-brown">Week of</p>
            <p class="font-serif text-doum-green text-3xl">{{ menu?.week ?? '—' }}</p>
          </div>
          <button
            @click="$emit('open-menu')"
            class="btn-primary whitespace-nowrap"
          >
            View Full Menu
          </button>
        </div>
      </div>

      <!-- Menu preview cards -->
      <div v-if="menu" class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="category in menu.categories"
          :key="category.category"
          class="bg-doum-cream p-6 border border-doum-green/8 hover:border-doum-brown/30 transition-colors group"
        >
          <p class="section-label mb-4">{{ category.category }}</p>
          <ul class="space-y-3">
            <li
              v-for="item in category.items"
              :key="item.name"
              class="border-b border-doum-green/8 pb-3 last:border-0 last:pb-0"
            >
              <p class="font-serif text-doum-green text-sm leading-snug">{{ item.name }}</p>
              <p v-if="item.preview" class="font-sans text-doum-green/50 text-[11px] mt-0.5 leading-snug">{{ item.preview }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div v-else class="text-center py-12 text-doum-green/40 font-sans text-sm">
        Menu coming soon — check back Thursday.
      </div>

      <!-- Order teaser -->
      <div class="mt-12 bg-doum-green p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p class="font-serif text-doum-cream text-3xl md:text-4xl mb-2">Ready to order this week's menu?</p>
          <p class="font-sans text-doum-cream/60 text-sm">Minimum 2 portions per dish. Delivery every Monday in Cairo.</p>
        </div>
        <a href="#order" class="btn-outline-cream whitespace-nowrap">Order Now</a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useLatestMenu } from '../composables/useLatestMenu.js'

defineEmits(['open-menu'])

const { menu } = useLatestMenu()
</script>
