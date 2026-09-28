/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{json,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        vazir: ['Vazirmatn', 'sans-serif'],
      },
      colors: {
        surface: {
          DEFAULT: '#131315',
          dim: '#131315',
          bright: '#39393b',
          lowest: '#0e0e10',
          low: '#1b1b1d',
          base: '#201f21',
          high: '#2a2a2c',
          highest: '#353437',
        },
        'on-surface': '#e5e1e4',
        'on-surface-variant': '#d8c3ad',
        primary: {
          DEFAULT: '#ffc174',
          container: '#f59e0b',
          dim: '#ffb95f',
          fixed: '#ffddb8',
        },
        secondary: {
          DEFAULT: '#ef4444',
          container: '#a40217',
          soft: '#ffb3ad',
        },
        tertiary: {
          DEFAULT: '#ffc32d',
          container: '#e0a800',
        },
        snappfood: '#FF00A6',
        call: '#22C55E',
      },
      boxShadow: {
        'ember-glow': '0 4px 20px -4px rgba(245, 158, 11, 0.25)',
        'amber-pill': '0 2px 12px 0 rgba(245, 158, 11, 0.35)',
        'fab-pink': '0 8px 24px -2px rgba(255, 0, 166, 0.45)',
        'fab-green': '0 8px 24px -2px rgba(34, 197, 94, 0.45)',
        'card-glow': '0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.2)',
      }
    },
  },
  plugins: [],
}
