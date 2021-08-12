const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        'gordita-bold': ['"Gordita Bold"', 'sans-serif'],
        'gordita-medium': ['"Gordita Medium"', 'sans-serif'],
        gordita: ['Gordita', 'sans-serif'],
      },
      fontSize: {
        'h40': ['40px','54px'],
        'text40': ['40px','43px'],
        'text20': ['20px','30px'],
        'text26': ['26px','36px']
      },
      colors: {
        '[muted]': '#848e9c',
        'color7-600': '#55667D',
        '[#6b7f9a]': '#6b7f9a',
        'color1': '#3B8CFF',
        'paragraph': '#636B75',
        'color7': '#354051',
        'color6-light': '#F8F9FA',
        'color6-dark': '#E0E6EA'
      },
      textColor: {
        '[muted]': '#848e9c',
        '[color7-600]': '#55667D',
        '[#6b7f9a]': '#6b7f9a',
        '[color1]': '#3B8CFF',
        '[color7]': '#354051',
      },
      backgroundColor: {
        '[success]': '#36c451',
        '[color10]': '#7560DF',
        '[#edf0f5]': '#edf0f5',
        '[#e0e6ea]': '#e0e6ea',
        'color6': '#eff2f4',
        '[color7]': '#354051',
        'orange-300': '#FFD480',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  purge: [
    // Use *.tsx if using TypeScript
    './pages/**/*.js',
    './components/**/*.js'
  ]
}