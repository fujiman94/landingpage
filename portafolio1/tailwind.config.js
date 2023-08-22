/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         primary: '#706fe5',
         secondary: '#eaeaf9',
      },
    },
  },
  plugins: [],
}