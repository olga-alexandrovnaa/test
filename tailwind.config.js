const tailwindcss = require('tailwindcss');

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
       wait: 'wait',
      text: 'text',
       move: 'move',
      'not-allowed': 'not-allowed',
       crosshair: 'crosshair',
       'zoom-in': 'zoom-in',
    }
  },
  variants: {},
  plugins: [
    tailwindcss('./tailwind.config.js'),
    require('autoprefixer'),
  ],
}
