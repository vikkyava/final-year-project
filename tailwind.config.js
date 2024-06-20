/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'intro_card_gradient': 'linear-gradient(to bottom, #00ff00 40%, #ffffff 0%)'
      }
    }
  },
  plugins: [],
}

