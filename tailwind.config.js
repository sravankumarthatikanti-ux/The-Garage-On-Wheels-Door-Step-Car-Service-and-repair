/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Deep Graphite (#111418) */
        graphite: {
          DEFAULT: '#111418',
          deep: '#0E1013',
          dark: '#111418',
          light: '#1A1E24',
        },
        /* Soft Charcoal (#252A30) */
        charcoal: {
          DEFAULT: '#252A30',
          deep: '#111418',
          soft: '#2E343B',
          muted: '#1E2227',
        },
        /* Pearl White (#F5F6F7) and light surfaces */
        surface: {
          DEFAULT: '#F5F6F7',
          warm: '#FFFFFF',
          soft: '#EDEFF1',
        },
        pearl: '#F5F6F7',
        /* Soft Steel Blue (#8FAFC2) - Primary Accent */
        steel: {
          DEFAULT: '#8FAFC2',
          50: '#F0F5F8',
          100: '#DCE7EE',
          200: '#BCD2DF',
          300: '#A3C0D2',
          400: '#8FAFC2',
          500: '#7599AF',
          600: '#5C8197',
          700: '#48687B',
          800: '#344C5A',
          900: '#252A30',
        },
        brand: {
          50: '#F0F5F8',
          100: '#DCE7EE',
          200: '#BCD2DF',
          300: '#A3C0D2',
          400: '#8FAFC2',
          500: '#7599AF',
          600: '#5C8197',
          700: '#48687B',
          800: '#344C5A',
          900: '#111418',
          dark: '#111418',
        },
        /* Titanium Silver (#C7D0D6) */
        titanium: {
          DEFAULT: '#C7D0D6',
          light: '#E2E8EC',
          border: '#C7D0D6',
          dark: '#3A4148',
        },
        /* Metallic details */
        metallic: {
          DEFAULT: '#C7D0D6',
          light: '#E5EBEF',
        },
        /* Semantic text colors */
        primary: '#171A1D',
        secondary: '#66717A',
        muted: '#8E98A0',
        /* Borders */
        border: {
          DEFAULT: '#E1E6EA',
          soft: '#EDEFF1',
          titanium: '#C7D0D6',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px rgba(17, 20, 24, 0.05)',
        'premium-hover': '0 16px 40px rgba(17, 20, 24, 0.08)',
        'premium-lg': '0 25px 60px rgba(17, 20, 24, 0.12)',
        'steel-glow': '0 0 25px rgba(143, 175, 194, 0.25)',
      },
      borderRadius: {
        'card': '16px',
        'card-lg': '20px',
        'btn': '8px',
        'input': '10px',
        'modal': '18px',
      },
    },
  },
  plugins: [],
};
