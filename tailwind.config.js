/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/**/*.{html,js}"],
    theme: {
      extend: {
        colors:{
          'gurey':'#2c2c32',
          'dark':'#25252b',
          'light': '#ffffff',
          'asul':'#0066b8',
        },
  
      },
    },
    plugins: [],
  }