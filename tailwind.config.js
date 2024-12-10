/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#4A189F',
        'pink' : '#C56EFD'
      },
      backgroundImage: {
        'theme': "url('./src/assets/background.svg')",
        'pass': "url('./src/assets/classes/passBG.svg')",
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
    }
  },
  plugins: [],
}

