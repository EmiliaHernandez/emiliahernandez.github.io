/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors: {
        'zip-poncho': '#CDF9AA',
        'zip-blue': '#751A46',
        'rata-eyeliner':'#1D1E23'
      }
    },
    fontFamily: {
      Daruma: ["Darumadrop One", "sans-serif"],
      RedHat: ["Red Hat Text", "sans-serif"]
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

