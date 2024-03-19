/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
       container: '1604px',
      },
      fontFamily: {
        'dmsans': ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        'color_1': '#262626',
        'color_2': '#767676',
        'color_3': '#6D6D6D',
      },
    },
  },
  plugins: [],
}