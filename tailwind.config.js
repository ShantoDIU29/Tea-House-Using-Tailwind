/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'dm-sans': ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}