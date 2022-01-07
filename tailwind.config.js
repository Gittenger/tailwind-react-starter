// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    // enabled: true,
    // content: ['./src/**/*.jsx', './src/**/*.css'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        'custom': ['Georama'],
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['focus'],
      borderColor: ['active'],
      backgroundColor: ['active'],
      fill: ['hover'],
      fontWeight: ['dark'],
      textColor: ['visited'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
