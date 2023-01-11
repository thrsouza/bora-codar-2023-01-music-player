/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cinder: {
          50: '#f5f4f9',
          100: '#dfdceb',
          200: '#bfb9d6',
          300: '#998eba',
          400: '#75679a',
          500: '#5c4d7f',
          600: '#493c65',
          700: '#3d3352',
          800: '#342c43',
          900: '#0f0d13',
        },
        martinique: {
          50: '#f2f1fc',
          100: '#e5e5fa',
          200: '#d2d0f5',
          300: '#b7b3ee',
          400: '#a194e5',
          500: '#8f79db',
          600: '#805fcc',
          700: '#6f4fb3',
          800: '#5a4291',
          900: '#2a2141',
        },
        smoky: {
          50: '#f7f7f8',
          100: '#efedf1',
          200: '#d9d8df',
          300: '#b9b5c4',
          400: '#928da3',
          500: '#756f88',
          600: '#5e586f',
          700: '#4e495b',
          800: '#433f4d',
          900: '#3a3743',
        },
      }
    },
  },
  plugins: [],
}
