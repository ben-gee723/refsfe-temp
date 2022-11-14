/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-yellow': 'rgba(252, 241, 194, 1)',
        'pastel-green': 'rgba(165, 213, 204, 1)',
        'pastel-blue': 'rgba(164, 199, 235, 1)'
      }
    },
  },
  plugins: [],
}
