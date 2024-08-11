/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        intro_card_gradient:
          "linear-gradient(to bottom, rgb(34 197 94) 40%, #ffffff 0%)",
      },
      colors: {
        'apple-green': '#7CB518',
        'brownish-yellow': '#f9bc60',
        'dark-gray': '#011936',
      },
    },
  },
  plugins: [],
};
