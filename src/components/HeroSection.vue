<template>
  <section
    id="hero"
    class="relative min-h-screen flex flex-col items-center justify-center bg-doum-green overflow-hidden"
  >
    <!-- Decorative grain overlay -->
    <div class="absolute inset-0 opacity-[0.04]" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E'); background-size: 200px;"></div>

    <!-- Top decorative line -->
    <div class="absolute top-0 left-0 right-0 h-1 bg-doum-brown"></div>

    <!-- Decorative circles -->
    <div class="absolute top-1/4 left-[8%] w-40 h-40 rounded-full border border-doum-cream/10 pointer-events-none hidden lg:block"></div>
    <div class="absolute bottom-1/4 right-[8%] w-64 h-64 rounded-full border border-doum-cream/10 pointer-events-none hidden lg:block"></div>
    <div class="absolute top-1/3 right-[12%] w-20 h-20 rounded-full border border-doum-brown/30 pointer-events-none hidden lg:block"></div>

    <!-- Main content -->
    <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <!-- Logo -->
      <img src="../assets/doum_logo.png" alt="Doum logo" class="w-40 md:w-40 mx-auto mb-6" />
      <!-- Pre-label -->
      <p class="font-sans text-[13px] tracking-ultra uppercase text-doum-brown mb-8">Cairo · Egypt</p>

      <!-- Main logotype -->
      <h1 class="font-serif text-[clamp(6rem,20vw,18rem)] font-bold leading-none tracking-[0.12em] text-doum-cream">
        DOUM
      </h1>

      <!-- Sub title -->
      <p class="font-sans text-[15px] md:text-[18px] tracking-ultra uppercase text-doum-cream/60 mt-1 mb-10">
        Test Kitchen
      </p>

      <!-- Divider -->
      <div class="w-16 h-px bg-doum-brown mx-auto mb-10"></div>

      <!-- Tagline -->
      <p class="font-serif text-doum-cream/80 text-2xl md:text-3xl leading-relaxed max-w-xl mx-auto mb-12">
        Where culinary science meets heritage.
      </p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button @click="$emit('open-menu')" class="btn-outline-cream w-full sm:w-auto">
          View Our Menus
        </button>
        <a href="#order" class="btn-primary w-full sm:w-auto text-center">
          Make an Inquiry
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
defineEmits(['open-menu', 'open-order'])
</script>

<style scoped>
@keyframes scrollLine {
  0%   { transform: translateY(-100%); opacity: 1; }
  80%  { transform: translateY(250%);  opacity: 1; }
  100% { transform: translateY(250%);  opacity: 0; }
}
</style>
