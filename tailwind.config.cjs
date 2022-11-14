/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-red': 'rgba(242, 146, 157, 1)',
        'pastel-orange': 'rgba(246, 196, 162, 1)',
        'pastel-yellow': 'rgba(252, 241, 194, 1)',
        'pastel-green': 'rgba(165, 213, 204, 1)',
        'pastel-blue': 'rgba(164, 199, 235, 1)'
      }
    },
  },
  plugins: [],
}
