/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Multi-Color Sophisticated Automotive Palette
        graphite: {
          DEFAULT: '#11151A', // Main dark background
          deep: '#0B0E12',
          surface: '#1A2026',
        },
        charcoal: {
          DEFAULT: '#252C34',
          soft: '#323B44',
          muted: '#1B2127',
        },
        surface: {
          DEFAULT: '#F5F7F8', // Pearl White main light background
          pure: '#FFFFFF',
          soft: '#EDF1F4',
          warm: '#E8EDF2',
        },
        // Energetic Automotive Light Accents
        ice: {
          DEFAULT: '#8FD8FF', // Electric Ice Blue
          soft: '#C2EBFF',
          glow: 'rgba(143, 216, 255, 0.35)',
        },
        cyan: {
          DEFAULT: '#9DE7E5', // Cyan Mist
          soft: '#CEF5F4',
          glow: 'rgba(157, 231, 229, 0.35)',
        },
        aqua: {
          DEFAULT: '#8EDDD0', // Aqua
          soft: '#C4F1E9',
          glow: 'rgba(142, 221, 208, 0.35)',
        },
        lime: {
          DEFAULT: '#C8E6B8', // Soft Lime
          soft: '#E4F5DC',
          glow: 'rgba(200, 230, 184, 0.35)',
        },
        lavender: {
          DEFAULT: '#C7C0E8', // Lavender
          soft: '#E3E0F5',
          glow: 'rgba(199, 192, 232, 0.35)',
        },
        violet: {
          DEFAULT: '#B8B4D8', // Cool Violet
          soft: '#DCDAEB',
          glow: 'rgba(184, 180, 216, 0.35)',
        },
        champagne: {
          DEFAULT: '#DCC9A6', // Soft Champagne
          soft: '#EFE6D5',
          glow: 'rgba(220, 201, 166, 0.35)',
        },
        titanium: {
          DEFAULT: '#C9D1D6', // Titanium Silver
          light: '#E2E7EA',
          dark: '#9EABB3',
        },
        primary: '#11151A',
        secondary: '#55626C',
        muted: '#82909A',
        border: '#DCE3E8',
        'border-soft': '#E7EDF1',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['SF Mono', 'JetBrains Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 4px 20px rgba(17, 21, 26, 0.04)',
        'premium': '0 12px 35px rgba(17, 21, 26, 0.08)',
        'ice-glow': '0 0 25px rgba(143, 216, 255, 0.35)',
        'cyan-glow': '0 0 25px rgba(157, 231, 229, 0.35)',
        'aqua-glow': '0 0 25px rgba(142, 221, 208, 0.35)',
        'lavender-glow': '0 0 25px rgba(199, 192, 232, 0.35)',
        'lime-glow': '0 0 25px rgba(200, 230, 184, 0.35)',
      },
      borderRadius: {
        'card': '18px',
        'card-lg': '24px',
        'modal': '24px',
        'btn': '12px',
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
