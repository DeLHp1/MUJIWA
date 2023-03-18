const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './resources/views/**/*.{vue,blade.php}'
  ],
  theme: {
    extend: {
        fontFamily: {
            inter: ['Inter', ...defaultTheme.fontFamily.sans]
        },
        colors: {
            discord: '#5865F2'
        },
        typography: {
            DEFAULT: {
                css: {
                    maxWidth: '100ch',
                }
            }
        }
    },
  },
  plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('@headlessui/tailwindcss')
  ],
}
