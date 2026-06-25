<template>
  <section id="order" class="py-28 md:py-36 bg-doum-green">
    <div class="max-w-5xl mx-auto px-6 lg:px-12">

      <!-- Header -->
      <div class="text-center mb-16">
        <p class="section-label text-doum-brown mb-4">Get in Touch</p>
        <h2 class="font-serif text-6xl md:text-7xl font-bold text-doum-cream">Place an Inquiry</h2>
        <div class="divider"></div>
        <p class="font-sans text-doum-cream/60 text-sm max-w-md mx-auto leading-relaxed">
          Whether you're ordering weekly meals or planning a private event, fill in the form
          below and we'll get back to you within 24 hours.
        </p>
      </div>

      <!-- Success state -->
      <Transition name="modal">
        <div v-if="submitted" class="text-center py-20">
          <div class="w-16 h-16 rounded-full border-2 border-doum-brown flex items-center justify-center mx-auto mb-6">
            <svg class="w-7 h-7 text-doum-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <h3 class="font-serif text-doum-cream text-4xl mb-3">Inquiry Received</h3>
          <p class="font-sans text-doum-cream/60 text-sm max-w-sm mx-auto mb-8">
            Thank you, <span class="text-doum-cream">{{ form.name }}</span>. We'll be in touch
            at <span class="text-doum-cream">{{ form.email }}</span> within 24 hours.
          </p>
          <button @click="resetForm" class="btn-outline-cream text-[11px] py-3 px-6">Send Another Inquiry</button>
        </div>
      </Transition>

      <!-- Form -->
      <Transition name="modal">
        <form v-if="!submitted" @submit.prevent="handleSubmit" class="grid md:grid-cols-2 gap-6">

          <!-- Name -->
          <div class="flex flex-col gap-2">
            <label class="font-sans text-[10px] tracking-widest uppercase text-doum-cream/70">Full Name *</label>
            <input
              v-model="form.name"
              type="text"
              required
              placeholder="Your name"
              class="bg-transparent border border-doum-cream/20 text-doum-cream placeholder-doum-cream/30 font-sans text-sm px-4 py-3.5 focus:outline-none focus:border-doum-brown transition-colors"
            />
          </div>

          <!-- Email -->
          <div class="flex flex-col gap-2">
            <label class="font-sans text-[10px] tracking-widest uppercase text-doum-cream/70">Email Address *</label>
            <input
              v-model="form.email"
              type="email"
              required
              placeholder="your@email.com"
              class="bg-transparent border border-doum-cream/20 text-doum-cream placeholder-doum-cream/30 font-sans text-sm px-4 py-3.5 focus:outline-none focus:border-doum-brown transition-colors"
            />
          </div>

          <!-- Phone -->
          <div class="flex flex-col gap-2">
            <label class="font-sans text-[10px] tracking-widest uppercase text-doum-cream/70">Phone Number</label>
            <input
              v-model="form.phone"
              type="tel"
              placeholder="+20 10 ..."
              class="bg-transparent border border-doum-cream/20 text-doum-cream placeholder-doum-cream/30 font-sans text-sm px-4 py-3.5 focus:outline-none focus:border-doum-brown transition-colors"
            />
          </div>

          <!-- Service -->
          <div class="flex flex-col gap-2">
            <label class="font-sans text-[10px] tracking-widest uppercase text-doum-cream/70">Service Type *</label>
            <select
              v-model="form.service"
              required
              class="bg-doum-green border border-doum-cream/20 text-doum-cream font-sans text-sm px-4 py-3.5 focus:outline-none focus:border-doum-brown transition-colors appearance-none cursor-pointer"
            >
              <option value="" disabled selected class="text-doum-cream/40">Select a service</option>
              <option v-for="s in serviceOptions" :key="s" :value="s">{{ s }}</option>
            </select>
          </div>

          <!-- Date (conditional) -->
          <Transition name="modal">
            <div v-if="needsDate" class="flex flex-col gap-2">
              <label class="font-sans text-[10px] tracking-widest uppercase text-doum-cream/70">Preferred Date</label>
              <input
                v-model="form.date"
                type="date"
                :min="minDate"
                class="bg-transparent border border-doum-cream/20 text-doum-cream font-sans text-sm px-4 py-3.5 focus:outline-none focus:border-doum-brown transition-colors"
              />
            </div>
          </Transition>

          <!-- Guests (conditional) -->
          <Transition name="modal">
            <div v-if="needsGuests" class="flex flex-col gap-2">
              <label class="font-sans text-[10px] tracking-widest uppercase text-doum-cream/70">Number of Guests</label>
              <select
                v-model="form.guests"
                class="bg-doum-green border border-doum-cream/20 text-doum-cream font-sans text-sm px-4 py-3.5 focus:outline-none focus:border-doum-brown transition-colors appearance-none cursor-pointer"
              >
                <option value="">Select</option>
                <option v-for="n in guestOptions" :key="n" :value="n">{{ n }}</option>
              </select>
            </div>
          </Transition>

          <!-- Delivery address (weekly meals) -->
          <Transition name="modal">
            <div v-if="form.service === 'Weekly Meals'" class="md:col-span-2 flex flex-col gap-2">
              <label class="font-sans text-[10px] tracking-widest uppercase text-doum-cream/70">Delivery Address</label>
              <input
                v-model="form.address"
                type="text"
                placeholder="Your Cairo address"
                class="bg-transparent border border-doum-cream/20 text-doum-cream placeholder-doum-cream/30 font-sans text-sm px-4 py-3.5 focus:outline-none focus:border-doum-brown transition-colors"
              />
            </div>
          </Transition>

          <!-- Message -->
          <div class="md:col-span-2 flex flex-col gap-2">
            <label class="font-sans text-[10px] tracking-widest uppercase text-doum-cream/70">Message / Special Requests</label>
            <textarea
              v-model="form.message"
              rows="4"
              placeholder="Tell us about dietary restrictions, event theme, preferred dishes, or any special requests…"
              class="bg-transparent border border-doum-cream/20 text-doum-cream placeholder-doum-cream/30 font-sans text-sm px-4 py-3.5 focus:outline-none focus:border-doum-brown transition-colors resize-none"
            ></textarea>
          </div>

          <!-- How did you hear -->
          <div class="md:col-span-2 flex flex-col gap-2">
            <label class="font-sans text-[10px] tracking-widest uppercase text-doum-cream/70">How did you hear about us?</label>
            <select
              v-model="form.referral"
              class="bg-doum-green border border-doum-cream/20 text-doum-cream font-sans text-sm px-4 py-3.5 focus:outline-none focus:border-doum-brown transition-colors appearance-none cursor-pointer"
            >
              <option value="">Select</option>
              <option>Instagram</option>
              <option>Word of mouth</option>
              <option>A pop-up</option>
              <option>Google</option>
              <option>Other</option>
            </select>
          </div>

          <!-- Submit -->
          <div class="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
            <button
              type="submit"
              :disabled="loading"
              class="btn-outline-cream text-[11px] py-3.5 px-10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="loading">Sending…</span>
              <span v-else>Send Inquiry</span>
            </button>
            <p class="font-sans text-doum-cream/40 text-[11px]">We respond within 24 hours.</p>
          </div>

        </form>
      </Transition>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const serviceOptions = [
  'Weekly Meals',
  'Private Dining (Formal)',
  'Private Dining (Casual / Event)',
  'Pop-Up Reservation',
  'General Inquiry',
]

const guestOptions = ['2–4', '5–8', '9–12', '13–20', '20+']

const minDate = new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0]

const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  date: '',
  guests: '',
  address: '',
  message: '',
  referral: '',
})

const loading = ref(false)
const submitted = ref(false)

const needsDate = computed(() =>
  ['Private Dining (Formal)', 'Private Dining (Casual / Event)', 'Pop-Up Reservation'].includes(form.value.service)
)
const needsGuests = computed(() =>
  ['Private Dining (Formal)', 'Private Dining (Casual / Event)'].includes(form.value.service)
)

const handleSubmit = async () => {
  loading.value = true
  // Simulate async submission (replace with Formspree / Netlify Forms / API in production)
  await new Promise(r => setTimeout(r, 1200))
  loading.value = false
  submitted.value = true
}

const resetForm = () => {
  submitted.value = false
  form.value = { name: '', email: '', phone: '', service: '', date: '', guests: '', address: '', message: '', referral: '' }
}
</script>
