const theme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      'resources/js/**/*.{jsx,tsx,js,ts}',
      'resources/views/**/*.blade.php',
      'resources/vendor/**/*.blade.php'
  ],
  theme: {
    extend: {
        colors: {
            brand: '#0099FF',
        },
        fontFamily: {
            inter: ['Inter', ...theme.fontFamily.sans]
        }
    },
  },
  plugins: [
      require('@headlessui/tailwindcss')
  ],
}
