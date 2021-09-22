module.exports = {
  mode: 'jit',
  purge: ['./index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        playfair: 'Playfair Display, serif',
        montserrat: 'Montserrat, sans-serif',
      },
      fontSize: {
        '3xs': '.50rem',
        '2xs': '.625rem'
      },
      dropShadow: ['hover', 'focus'],
        boxShadow: {
            allBorders: '0px 0px 20px rgba(0,0,0,0.1)'
        }
    },
  },
  plugins: [],
}
