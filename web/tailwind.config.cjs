/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    './src/**/*.tsx',
    './index.html',

  ],
  theme: {
    extend: {
     
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        'nlw-gradient': 'linear-gradient(88.38deg, #9572FC 17.62%, #43E7AD 52.65%, #E1D55D 98.8%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
      }
    },
  },
  plugins: [],
}
