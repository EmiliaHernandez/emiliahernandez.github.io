/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html',
    'index.html',
  ],
  theme: {
    extend: {
      colors: {
        'zip-poncho': 'rgb(249 236 170)',
        'zip-blue': '#751A46',
        'rata-eyeliner':'#000000',
        'cream':'#FFFAEF',
        'darkness':'#202020'
      }
    },
    fontFamily: {
      Daruma: ["Darumadrop One", "sans-serif"],
      RedHat: ["Red Hat Text", "sans-serif"],
      sansita: ['"Sansita One"', 'sans-serif'],
      poppins: ["Poppins", 'sans-serif']
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

