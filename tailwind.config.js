/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/**/*.{html,js}"],
    theme: {
      extend: {
        colors:{
          'gurey':'#2c2c32',
          'dark':'#25252b',
          'light': '#ffffff',
          'lasalle':'#006341',
        },
        backgroundImage:{
          'star':"url('./img/starng pasko.svg')"
        },
      },
    },
    plugins: [],
  }