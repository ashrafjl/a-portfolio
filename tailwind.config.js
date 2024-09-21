/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-heading-color':'#EAECEF',
        'light-black': '#576076',
        'dark-bg': '#0E1018',
        'light-bg': '#F0F2F5',
        primary:'#1a1f2c',
        secondary:'#576076',
        'senior-secondary':'#4770ff',
      },
      boxShadow:{
        'mini': '0 1px 2px 0 rgba(26, 31, 44, .25)'
      }
    },
  },
  plugins: [],
}