module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        neutra: ['Neutra', 'sans-serif'],
        sans: ['Ubuntu', 'sans-serif'],
      },
      colors: {
        'yellow': '#FFE261',
        'light-yellow': '#FFF9EA',
        'accent-purple': '#E5D8F6',
        'purple': '#793AD7',
        'light-purple': '#F4ECFF',
        'dark-purple': '#5F29B2',
        'dark': '#2C2C2C',
      }
    },
  },
};