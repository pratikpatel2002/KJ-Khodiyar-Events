/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffbf0',
          100: '#fff7e0',
          200: '#ffedb3',
          300: '#ffe380',
          400: '#ffd94d',
          500: '#ffd700',
          600: '#e6c200',
          700: '#ccad00',
          800: '#b39900',
          900: '#998500',
        },
        maroon: {
          50: '#f5e6e6',
          100: '#e6cccc',
          200: '#cc9999',
          300: '#b36666',
          400: '#994d4d',
          500: '#800020',
          600: '#66001a',
          700: '#4d0013',
          800: '#33000d',
          900: '#1a0006',
        },
        royal: {
          50: '#e6f0ff',
          100: '#b3d9ff',
          200: '#80c2ff',
          300: '#4dabff',
          400: '#1a94ff',
          500: '#002366',
          600: '#001f52',
          700: '#001a3d',
          800: '#001429',
          900: '#000f14',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}



