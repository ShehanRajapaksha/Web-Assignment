const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require('tailwindcss/colors')

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    ".//@material-tailwind//*.{html,js,ts,jsx,tsx,mdx}"
  ],
  theme: {
     colors: {
      ...colors,
      'Red1': '#E12E02',
      'whiteshade1': '#FAF9F6',
      'black1': '#1F1F29',
      'g1': '#103CE7',
      'g2': '#64E9FF',
      'Red2' : '#cd4022'
    },
    extend: {
      animation: {
        'slide-in-right': 'slide-in-right 0.4s ease-in',
        'fade-out-right': 'fade-out-right 1.0s ease-out',
      },
      keyframes: {
        'slide-in-right': {
          'from': {
            transform: 'translateX(100%)',
            opacity: 0,
          },
          'to': {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
        'fade-out-right': {
          'from': {
            transform: 'translateX(0)',
            opacity: 1,
          },
          'to': {
            transform: 'translateX(100%)',
            opacity: 0,
          },
        },
      },
    },

  },
  plugins: [],
});
