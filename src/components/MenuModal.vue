<template>
  <Transition name="modal">
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-doum-green/90 backdrop-blur-sm" @click="$emit('close')"></div>

      <!-- Panel -->
      <div class="relative bg-doum-cream w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">

        <!-- Sticky header -->
        <div class="sticky top-0 bg-doum-cream border-b border-doum-green/10 z-10 px-8 py-5 flex items-center justify-between">
          <div>
            <p class="section-label">This Week's Menu</p>
            <p class="font-serif text-doum-green text-2xl mt-0.5">{{ menu?.week ?? '—' }}</p>
          </div>
          <button @click="$emit('close')" class="text-doum-green/60 hover:text-doum-green transition-colors p-1">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Body -->
        <div class="p-8 md:p-12">

          <!-- Intro note -->
          <div class="bg-doum-green/5 border-l-2 border-doum-brown px-6 py-4 mb-10">
            <p class="font-sans text-doum-green/70 text-sm leading-relaxed">
              Delivery arrives fresh
              <strong class="text-doum-green">every Monday</strong>. Minimum 2 portions per dish.
              All dishes are prepared with premium seasonal ingredients sourced from local producers.
            </p>
          </div>

          <!-- Menu categories -->
          <div class="space-y-12">
            <div v-for="category in menu?.categories ?? []" :key="category.category">
              <!-- Category header -->
              <div class="flex items-center gap-4 mb-6">
                <p class="section-label">{{ category.category }}</p>
                <div class="flex-1 h-px bg-doum-green/10"></div>
              </div>

              <!-- Items -->
              <div class="grid sm:grid-cols-2 gap-4">
                <div
                  v-for="item in category.items"
                  :key="item.name"
                  class="border border-doum-green/10 p-5 hover:border-doum-brown/30 transition-colors group"
                >
                  <div class="flex items-start justify-between gap-4">
                    <div class="flex-1">
                      <h4 class="font-serif text-doum-green text-base leading-snug mb-1">{{ item.name }}</h4>
                      <p class="font-sans text-doum-green/55 text-[12px] leading-relaxed">{{ item.desc }}</p>
                      <div v-if="item.tags" class="flex flex-wrap gap-1.5 mt-3">
                        <span
                          v-for="tag in item.tags"
                          :key="tag"
                          class="font-sans text-[9px] tracking-widest uppercase bg-doum-green/8 text-doum-green/60 px-2 py-0.5"
                        >{{ tag }}</span>
                      </div>
                    </div>
                    <span class="font-serif text-doum-brown text-base font-medium whitespace-nowrap">{{ item.price }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA -->
          <div class="mt-14 border-t border-doum-green/10 pt-10 text-center">
            <p class="font-serif text-doum-green text-3xl mb-2">Ready to place your order?</p>
            <p class="font-sans text-doum-green/60 text-sm mb-6">Fill in the inquiry form and we'll confirm your order.</p>
            <a href="#order" @click="$emit('close')" class="btn-primary">Go to Order Form</a>
          </div>

        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { useLatestMenu } from '../composables/useLatestMenu.js'

defineEmits(['close'])

const { menu } = useLatestMenu()
</script>
