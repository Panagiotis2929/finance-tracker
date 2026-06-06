/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        ink: {
          50:  '#f4f3f0',
          100: '#e8e6e1',
          200: '#cfc9bf',
          300: '#b0a898',
          400: '#918472',
          500: '#7a6d5e',
          600: '#645a4e',
          700: '#4e4640',
          800: '#2e2a26',
          900: '#1a1714',
          950: '#0d0b09',
        },
        sage: {
          400: '#7aad8c',
          500: '#5a9970',
          600: '#3f7d55',
        },
        rose: {
          400: '#e07070',
          500: '#c95555',
          600: '#a83e3e',
        },
        gold: {
          400: '#d4a843',
          500: '#c09030',
        }
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
