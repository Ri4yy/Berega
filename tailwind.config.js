/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./*.{html,js}",
    "./pages/*.{html,js}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'lightBlue':'#ECF2F8',
        'mainOrange':'#FF8336',
      },
      fontFamily: {
        
      },
    },
    container: {
      padding: {
        DEFAULT: '20px',
        center: true
      },
    }
  },
  plugins: [],
}
