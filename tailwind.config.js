module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        aeonik: ['Aeonik', 'sans-serif'],
        sans: ['Aeonik', 'sans-serif'],
      },
      colors: {
        'yellow': '#ffce34',
        'navy': '#00043d',
        'blue': '#00aae7',
        'red': '#ed1b2f',
        'dark-grey': '#4b4b4b',
        'light-grey': '#efefef',
      }
    },
  },
};