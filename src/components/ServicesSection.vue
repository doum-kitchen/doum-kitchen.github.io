<template>
  <section id="services" class="py-28 md:py-36 bg-doum-green">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">

      <!-- Header -->
      <div class="text-center mb-16">
        <p class="section-label text-doum-brown mb-4">What We Offer</p>
        <h2 class="font-serif text-6xl md:text-7xl font-bold text-doum-cream">Our Services</h2>
        <div class="divider"></div>
        <p class="font-sans text-doum-cream/60 text-sm max-w-lg mx-auto leading-relaxed">
          Every service we offer is rooted in the same philosophy — thoughtful ingredients,
          professional technique, and genuine care for the experience around the table.
        </p>
      </div>

      <!-- Services grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-2 gap-px bg-doum-cream/10">
        <div
          v-for="(service, i) in services"
          :key="service.title"
          class="group bg-doum-cream p-10 md:p-12 hover:bg-doum-cream/70 transition-colors duration-300 relative overflow-hidden"
        >
          <!-- Number -->
          <span class="absolute top-8 right-10 font-serif text-7xl font-bold text-doum-green/5 leading-none select-none">
            {{ String(i + 1).padStart(2, '0') }}
          </span>

          <!-- Content -->
          <div class="relative">
            <!-- Tag -->
            <span class="inline-block font-sans text-[9px] tracking-ultra uppercase text-doum-brown border border-doum-brown/40 px-3 py-1 mb-6">
              {{ service.tag }}
            </span>

            <h3 class="font-serif text-4xl md:text-5xl text-doum-green mb-4 leading-snug">
              {{ service.title }}
            </h3>

            <div class="w-8 h-px bg-doum-brown mb-5 group-hover:w-16 transition-all duration-300"></div>

            <p class="font-sans text-doum-green/65 text-sm leading-relaxed">
              {{ service.description }}
            </p>

            <!-- Arrow link -->
            <component
              :is="service.route ? 'RouterLink' : 'div'"
              :to="service.route || undefined"
              class="mt-8 flex items-center gap-2 text-doum-brown font-sans text-[11px] tracking-widest uppercase cursor-pointer"
            >
              <span>Learn more</span>
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </component>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const services = [
  {
    tag: 'Private Dining',
    title: 'Fine Dining at Your Home',
    description:
      'Choose from our themed menus and we bring the full experience to your home — chefs, assistants, service, and every detail. Premium seasonal ingredients, served family-style or fully plated. You host. We take care of everything else. For more relaxed gatherings, we also create lively, informal experiences built around sharing — passing trays, beautifully crafted finger food, and themed evenings in a social, playful format.',
  },
  {
    tag: 'Weekly Meals',
    title: 'Elevated Home Cooking, Weekly',
    description:
      'We release a new weekly menu every Thursday — healthy home-style cooking elevated through professional techniques and thoughtful sourcing. Order for Monday delivery of your comforting, balanced meals, combining home cooking with the precision of a professional kitchen.',
    route: '/weekly-meals',
  },
  {
    tag: 'Pop-Ups',
    title: 'Experimentation as Storytelling',
    description:
      'Each pop-up revolves around seasonal and local ingredients transformed into carefully curated menus that reflect memories, places, encounters, and ideas. No two are alike — temporary, evolving, and deeply personal culinary experiences. A space to test ideas, collaborate with creatives, and celebrate whatever inspires us.',
  },
  {
    tag: 'Product Line',
    title: 'Signature Products',
    description:
      'Development of signature products including spice blends, preserves, and specialty items for retail distribution — each one a distillation of the techniques, ingredients, and stories that define Doum Kitchen.',
  },
]
</script>
