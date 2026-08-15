/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Master Soft Performance Luxury Color System
        graphite: {
          DEFAULT: '#111418', // Deep Graphite
          deep: '#0D0F12',
          surface: '#1C2126', // Secondary Graphite
        },
        charcoal: {
          DEFAULT: '#2A3036', // Soft Charcoal
          soft: '#343B42',
          muted: '#1E2328',
        },
        surface: {
          DEFAULT: '#F5F7F8', // Pearl White
          pure: '#FFFFFF',    // Pure White
          soft: '#EBEFF2',
          warm: '#F0F3F5',
        },
        // Accents
        ice: {
          DEFAULT: '#BFDCEB', // Ice Blue
          soft: '#D6EAF5',
          glow: 'rgba(191, 220, 235, 0.25)',
        },
        mist: {
          DEFAULT: '#AFC4D1', // Mist Blue
          deep: '#8FAAB9',
        },
        sage: {
          DEFAULT: '#C7D5CC', // Sage Mist
        },
        lavender: {
          DEFAULT: '#D0CDD8', // Lavender Grey
        },
        champagne: {
          DEFAULT: '#D8CCB8', // Soft Champagne
        },
        steel: {
          50: '#F2F6F9',
          100: '#E2ECF2',
          200: '#C5D9E5',
          300: '#AFC4D1', // Mist Blue
          400: '#8FAFC2', // Soft Steel Blue Primary Accent
          500: '#7295AA',
          600: '#587A8E',
          700: '#415E6F',
        },
        titanium: {
          DEFAULT: '#C8D0D5', // Titanium Silver
          light: '#DEE4E8',
          dark: '#9BA7AF',
        },
        primary: '#171A1D',
        secondary: '#5F6C76',
        muted: '#8A97A0',
        border: '#DEE4E8',
        'border-soft': '#E8EDF0',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['SF Mono', 'JetBrains Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 4px 20px rgba(17, 20, 24, 0.04)',
        'premium': '0 12px 35px rgba(17, 20, 24, 0.08)',
        'deep': '0 24px 60px rgba(0, 0, 0, 0.45)',
        'ice-glow': '0 0 25px rgba(191, 220, 235, 0.25)',
        'steel-glow': '0 0 25px rgba(143, 175, 194, 0.25)',
      },
      borderRadius: {
        'card': '16px',
        'card-lg': '24px',
        'modal': '24px',
        'btn': '10px',
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      }
    },
  },
  plugins: [],
}
