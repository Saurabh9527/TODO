/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        customColor1: '#6C6FC3',
        customColor2: '#C9D7E9',
      },
    },
  },
  variants: {},
  plugins: [],
};
