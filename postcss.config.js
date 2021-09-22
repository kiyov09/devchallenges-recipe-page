module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-font-magician': {
      variants: {
        'Playfair Display': {
          '700': [],
          '400 italic': [],
        },
        'Montserrat': {
          '400': [],
          '500': [],
          '700': [],
          '400 italic': [],
          '500 italic': [],
        },
        'Material Icons': {
          '400': []
        }
      },
      foundries: ['google']
    },
  },
}
