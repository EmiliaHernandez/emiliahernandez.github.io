/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors: {
        'zip-poncho': 'rgb(249 236 170)',
        'zip-blue': '#751A46',
        'rata-eyeliner':'rgb(13 18 37)'
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

