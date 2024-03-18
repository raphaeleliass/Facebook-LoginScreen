/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}'
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    },
    
    extend: {
      colors:{
        'fb-blue': '#0866ff',
        'fb-bg': '#f0f2f5',
        'fb-green': '#36a420',
        'fb-black': '#1c1e21',
      },
    },
  },
  plugins: [],
}

