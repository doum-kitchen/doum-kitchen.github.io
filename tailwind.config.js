/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        doum: {
          green:       '#4A5A2E',
          'green-dark':'#3A4723',
          'green-mid': '#5C7139',
          cream:       '#EDE5D0',
          'cream-dark':'#DDD3B8',
          brown:       '#A4664A',
          'brown-light':'#A05A2A',
        },
      },
      fontFamily: {
        serif: ['"Amatic SC"', 'Georgia', 'serif'],
        sans:  ['"Josefin Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        ultra: '0.35em',
      },
    },
  },
  plugins: [],
}
