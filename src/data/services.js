// Detail content for each service page. The `slug` is used in the URL
// (/services/<slug>) and to match cards in the Services section.
export const services = [
  {
    slug: 'private-events',
    tag: 'Private Events',
    cardTitle: 'Fine Dining, Casual Events',
    title: 'Fine Dining,<br>Casual Events',
    intro:
      'Choose from our themed menus and we bring the full experience to your home — chefs, assistants, service, and every detail. You host. We take care of everything else.',
    cardDescription:
      'Choose from our themed menus and we bring the full experience to your home — chefs, assistants, service, and every detail. Premium seasonal ingredients, served family-style or fully plated. You host. We take care of everything else. For more relaxed gatherings, we also create lively, informal experiences built around sharing — passing trays, beautifully crafted finger food, and themed evenings in a social, playful format.',
    blocks: [
      {
        label: 'Plated Dinners',
        title: 'Full Service',
        description: 'Premium seasonal ingredients, served family-style or fully plated, with chefs and service staff handling every detail.',
      },
      {
        label: 'Casual Gatherings',
        title: 'Social & Playful',
        description: 'Lively, informal experiences built around sharing — passing trays, crafted finger food, and themed evenings.',
      },
      {
        label: 'Your Space',
        title: 'We Come to You',
        description: 'We bring the full kitchen experience to your home or venue. You host; we take care of everything else.',
      },
    ],
    cta: { label: 'Plan Your Event', to: '/#order' },
  },
  {
    slug: 'weekly-meals',
    tag: 'Weekly Meals',
    cardTitle: 'Elevated Home Cooking, Weekly',
    title: 'Elevated Home<br>Cooking, Weekly',
    intro:
      'We release a new weekly menu every Thursday — healthy home-style cooking elevated through professional techniques and thoughtful sourcing. Order for Monday delivery.',
    cardDescription:
      'We release a new weekly menu every Thursday — healthy home-style cooking elevated through professional techniques and thoughtful sourcing. Order for Monday delivery of your comforting, balanced meals, combining home cooking with the precision of a professional kitchen.',
    blocks: [
      {
        label: 'Step 01',
        title: 'Menu Released',
        description: "Every Thursday we publish that week's menu — thoughtfully sourced, professionally prepared home-style dishes.",
      },
      {
        label: 'Step 02',
        title: 'Place Your Order',
        description: 'Browse the menu and place your order before Sunday. Choose your portions and any dietary preferences.',
      },
      {
        label: 'Step 03',
        title: 'Monday Delivery',
        description: 'Your meals arrive fresh on Monday, ready to enjoy throughout the week with zero compromise on quality.',
      },
    ],
    cta: { label: 'Place an Inquiry', to: '/#order' },
  },
  {
    slug: 'pop-ups',
    tag: 'Pop-Ups',
    cardTitle: 'Experimentation as Storytelling',
    title: 'Experimentation<br>as Storytelling',
    intro:
      'Each pop-up revolves around seasonal and local ingredients transformed into carefully curated menus that reflect memories, places, encounters, and ideas. No two are alike.',
    cardDescription:
      'Each pop-up revolves around seasonal and local ingredients transformed into carefully curated menus that reflect memories, places, encounters, and ideas. No two are alike — temporary, evolving, and deeply personal culinary experiences. A space to test ideas, collaborate with creatives, and celebrate whatever inspires us.',
    blocks: [
      {
        label: 'Seasonal',
        title: 'Of the Moment',
        description: 'Built around seasonal and local ingredients, each menu is a snapshot of a place, a memory, or an idea.',
      },
      {
        label: 'Collaborative',
        title: 'A Creative Space',
        description: 'A space to test ideas, collaborate with creatives, and celebrate whatever inspires us at the time.',
      },
      {
        label: 'Limited',
        title: 'Never the Same Twice',
        description: 'Temporary, evolving, and deeply personal — no two pop-ups are ever alike.',
      },
    ],
    cta: { label: 'Stay in the Loop', to: '/#order' },
  },
  {
    slug: 'product-line',
    tag: 'Product Line',
    cardTitle: 'Signature Products',
    title: 'Signature<br>Products',
    intro:
      'Development of signature products including spice blends, preserves, and specialty items for retail distribution — each one a distillation of the techniques, ingredients, and stories that define Doum Kitchen.',
    cardDescription:
      'Development of signature products including spice blends, preserves, and specialty items for retail distribution — each one a distillation of the techniques, ingredients, and stories that define Doum Kitchen.',
    blocks: [
      {
        label: 'Spice Blends',
        title: 'Crafted Flavor',
        description: 'House spice blends built from the techniques and ingredients at the heart of our cooking.',
      },
      {
        label: 'Preserves',
        title: 'Seasons, Bottled',
        description: 'Preserves that capture peak-season produce to be enjoyed long after the harvest.',
      },
      {
        label: 'Specialty',
        title: 'For Retail',
        description: 'Specialty items developed for retail distribution — a distillation of the stories that define Doum.',
      },
    ],
    cta: { label: 'Register Interest', to: '/#order' },
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)
