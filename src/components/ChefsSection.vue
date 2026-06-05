<template>
  <section id="chefs" class="py-28 md:py-36 bg-doum-cream">
    <div class="max-w-6xl mx-auto px-6 lg:px-12">

      <!-- Header -->
      <div class="text-center mb-20">
        <p class="section-label mb-4">The Team</p>
        <h2 class="font-serif text-6xl md:text-7xl font-bold text-doum-green">The Minds Behind Doum</h2>
        <div class="divider"></div>
        <p class="font-sans text-doum-green/65 text-sm max-w-xl mx-auto leading-relaxed">
          Two global journeys converging in Cairo — bringing together deep-rooted
          culinary heritage, international gastronomy, and rigorous kitchen science.
        </p>
      </div>

      <!-- Chef cards -->
      <div class="grid md:grid-cols-2 gap-12 md:gap-16">
        <div
          v-for="chef in chefs"
          :key="chef.name"
          class="group relative"
        >
          <!-- Avatar -->
          <div class="relative mb-8">
            <div
              class="w-full aspect-[4/3] flex items-center justify-center relative overflow-hidden"
              :style="{ backgroundColor: chef.bgColor }"
            >
              <!-- Initials fallback -->
              <span class="font-serif text-7xl md:text-8xl font-bold text-doum-cream/20 select-none tracking-widest">
                {{ chef.initials }}
              </span>
              <!-- Subtle pattern overlay -->
              <div class="absolute inset-0 opacity-5" style="background-image: repeating-linear-gradient(45deg, #EDE5D0 0, #EDE5D0 1px, transparent 0, transparent 50%); background-size: 14px 14px;"></div>
              <!-- Chef photo (covers initials when loaded) -->
              <img
                v-if="chef.image"
                :src="chef.image"
                :alt="chef.name"
                class="absolute inset-0 w-full h-full object-cover object-top"
                @error="$event.target.style.display = 'none'"
              />
              <!-- Bottom label -->
              <div class="absolute bottom-0 left-0 right-0 bg-doum-green/90 py-4 px-6">
                <p class="font-serif text-doum-cream text-2xl font-bold">{{ chef.name }}</p>
                <p class="font-sans text-[10px] tracking-widest uppercase text-doum-brown mt-0.5">{{ chef.role }}</p>
              </div>
            </div>
          </div>

          <!-- Bio -->
          <div>
            <!-- <div class="flex flex-wrap gap-2 mb-5">
              <span
                v-for="tag in chef.tags"
                :key="tag"
                class="font-sans text-[9px] tracking-widest uppercase border border-doum-green/25 text-doum-green/70 px-3 py-1"
              >{{ tag }}</span>
            </div> -->
            <p class="font-sans text-doum-green/70 text-[15px] leading-relaxed">
              {{ chef.bio }}
            </p>
          </div>
        </div>
      </div>

      <!-- Convergence statement -->
      <div class="mt-24 border-t border-doum-green/10 pt-16 text-center">
        <p class="font-serif text-4xl md:text-5xl text-doum-green/80 max-w-3xl mx-auto leading-relaxed">
          "Individually, they are masters of their craft. Together, they are a formidable team —
          reimagining Egyptian heritage, local ingredients, and modern gastronomy into a future classic."
        </p>
      </div>

    </div>
  </section>
</template>

<script setup>
const chefs = [
  {
    name: 'Chef Bahaa Alkhamissi',
    role: 'Co-Founder',
    initials: 'BA',
    bgColor: '#4A5A2E',
    image: null,
    tags: ['Biotechnology', 'Seattle Culinary Academy', 'Southeast Asian Cuisine', 'Egyptian Heritage'],
    bio: 'The creative force of the kitchen. With a degree from the Seattle Culinary Academy (USA) and a four-year background in Biotechnology, Bahaa combines deep culinary knowledge with a precise, laboratory-like understanding of food science. In Seattle, his training focused deeply on the philosophy of seasonal, local food. He then sharpened his technical execution over three years at celebrated Southeast Asian restaurants, and co-founded a successful bi-weekly pop-up of Latin street food. Driven by his profound interest in Egyptian heritage cuisine, Bahaa views cooking as an exact science of extraction, precision, and cultural innovation.',
  },
  {
    name: 'Chef Abdelrahman Mostafa',
    role: 'Co-Founder',
    initials: 'AM',
    bgColor: '#8D4B1F',
    image: 'src/assets/chef-abdelrahman.jpeg',
    tags: ['Mexican Cuisine', 'Croatian Gastronomy', 'BAM Burger', 'Ancestral Techniques'],
    bio: 'Born half-Egyptian and half-Mexican, Abdelrahman combines early cross-cultural food exposure, a predisposition for rigorous methods, and studies that provide a sharp strategic eye for business development. His culinary journey began in Europe, where he spent two years expanding his palate in the vibrant restaurant scenes of Croatia. Driven to find his roots, he then traveled to Mexico, where he immersed himself in the bold, ancestral art of Mexican cuisine. His Cairo burger restaurant, BAM Burger, attests to his eclectic food experiences.',
  },
]
</script>
