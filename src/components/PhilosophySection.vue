<template>
  <section id="about" class="py-28 md:py-36 bg-doum-cream">
    <div class="max-w-6xl mx-auto px-6 lg:px-12">

      <!-- Two-column intro -->
      <div class="grid md:grid-cols-2 gap-16 md:gap-24 items-start mb-24">

        <!-- Left: Pull quote -->
        <div>
          <p class="section-label mb-6">Our Story</p>
          <h2 class="font-serif text-6xl md:text-7xl font-bold leading-tight text-doum-green mb-8">
            A kitchen built<br />on curiosity.
          </h2>
          <div class="divider-left"></div>
          <p class="font-sans text-doum-green/70 leading-relaxed text-[15px]">
            We wanted to build a space where we could experiment freely, push culinary
            boundaries and give ourselves room to create without limits. At Doum Kitchen,
            we explore techniques, work with ingredients in innovative ways and test flavors.
          </p>
          <p class="font-sans text-doum-green/70 leading-relaxed text-[15px] mt-4">
            From fresh pasta and fermentation to smoking, dry aging, and different cooking
            techniques — the goal is to keep learning and creating dishes with more depth,
            character, and intention. We aspire to create an open, interactive space for
            chefs and producers to collectively come up with groundbreaking ideas.
          </p>
        </div>

        <!-- Right: manifesto card -->
        <div class="bg-doum-green p-10 md:p-12 relative">
          <div class="absolute top-4 right-4 w-8 h-8 border border-doum-brown/40"></div>
          <p class="font-serif text-doum-cream/90 text-3xl md:text-4xl leading-relaxed">
            "Fine dining without pretension. Hearty, warm food
            rooted in generosity and memory."
          </p>
          <div class="w-8 h-px bg-doum-brown mt-8 mb-0"></div>
        </div>
      </div>

      <!-- Philosophy pillars -->
      <div class="border-t border-doum-green/10 pt-16">
        <p class="section-label text-center mb-14">Our Philosophy</p>
        <div class="grid sm:grid-cols-3 gap-10">
          <div v-for="pillar in pillars" :key="pillar.title" class="text-center group">
            <!-- Icon circle -->
            <div class="w-14 h-14 rounded-full border border-doum-brown/40 flex items-center justify-center mx-auto mb-6 group-hover:bg-doum-brown/10 transition-colors">
              <FontAwesomeIcon :icon="pillar.icon" class="text-doum-brown text-lg" />
            </div>
            <h3 class="font-serif text-3xl text-doum-green mb-3">{{ pillar.title }}</h3>
            <p class="font-sans text-doum-green/65 text-sm leading-relaxed">{{ pillar.body }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const pillars = [
  {
    icon: 'utensils',
    title: 'Seasonal & Craft',
    body: 'We pay the greatest attention to our ingredients, working closely with local producers and small suppliers we personally trust. Seasonality gives food its honesty, rhythm, and character.',
  },
  {
    icon: 'spoon',
    title: 'Elegance Without Pretension',
    body: 'We are interested in fine dining without pretension. We aspire to create hearty, warm food rooted in generosity and memory — and we are always excited to explore other culinary traditions with our own creative take.',
  },
  {
    icon: 'kitchen-set',
    title: 'Heritage & Community',
    body: 'We have a deep understanding of Egyptian food culture and shared traditions. Our goal is to reinterpret through contemporary techniques — within a community of chefs, farmers, artisans, and guests.',
  },
]
</script>
