/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: 'oklch(0.55 0.19 262)',
        'bg-light': 'oklch(0.99 0 0)',
        'bg-dark': 'oklch(0.15 0 0)',
        'text-light': 'oklch(0.25 0 0)',
        'text-dark': 'oklch(0.92 0 0)'
      },
      animation: {
        fade: 'fade 0.3s ease-in-out',
      },
      keyframes: {
        fade: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
