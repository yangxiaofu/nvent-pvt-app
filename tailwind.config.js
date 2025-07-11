/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nvent-red': '#c4262e',
        'nvent-yellow': '#ffed46',
      },
    },
  },
  plugins: [],
}