/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Premium warm surface backgrounds */
        surface: {
          DEFAULT: '#F7F7F5',
          warm: '#FCFCFA',
          soft: '#F1F2F0',
        },
        /* Deep charcoal darks */
        charcoal: {
          DEFAULT: '#202326',
          deep: '#151719',
        },
        /* Primary red accent system */
        brand: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#D94B4B',
          500: '#C62828',
          600: '#B71C1C',
          700: '#9F2020',
          800: '#7F1D1D',
          900: '#601414',
          dark: '#151719',
        },
        /* Warm metallic gold accents */
        metallic: {
          DEFAULT: '#B08D57',
          light: '#D0B37A',
        },
        /* Semantic text colors */
        primary: '#17191B',
        secondary: '#6F7479',
        muted: '#969B9F',
        /* Borders */
        border: {
          DEFAULT: '#E4E6E4',
          soft: '#ECEDEB',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 35px rgba(20, 25, 30, 0.06)',
        'premium-hover': '0 18px 45px rgba(20, 25, 30, 0.10)',
        'premium-lg': '0 25px 60px rgba(20, 25, 30, 0.12)',
      },
      borderRadius: {
        'card': '18px',
        'card-lg': '22px',
        'btn': '10px',
        'input': '12px',
        'modal': '20px',
      },
    },
  },
  plugins: [],
};
