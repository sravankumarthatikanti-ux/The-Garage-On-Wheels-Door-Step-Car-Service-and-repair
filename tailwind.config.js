/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Master Premium Dark Automotive System
        bg: {
          primary: '#080A0D',   // Primary Dark Background
          secondary: '#101419', // Secondary Dark Background
          card: '#181E24',      // Card Dark Surface
          cardHover: '#1F2730', // Card Hover Surface
          border: '#252C33',    // Master Border Color
        },
        graphite: {
          DEFAULT: '#080A0D',
          deep: '#050709',
          surface: '#101419',
        },
        charcoal: {
          DEFAULT: '#181E24',
          soft: '#252C33',
          muted: '#101419',
        },
        surface: {
          DEFAULT: '#080A0D',
          secondary: '#101419',
          card: '#181E24',
          border: '#252C33',
        },
        // Premium Automotive Accents
        ice: {
          DEFAULT: '#8FD8FF', // Primary Ice Blue
          bright: '#B8EAFF',  // Primary Hover
          glow: 'rgba(143, 216, 255, 0.4)',
        },
        cyan: {
          DEFAULT: '#9DE7E5', // Cyan Mist
          glow: 'rgba(157, 231, 229, 0.4)',
        },
        aqua: {
          DEFAULT: '#8EDDD0', // Aqua
          glow: 'rgba(142, 221, 208, 0.4)',
        },
        lavender: {
          DEFAULT: '#C7C0E8', // Soft Lavender (Luxury)
          glow: 'rgba(199, 192, 232, 0.4)',
        },
        lime: {
          DEFAULT: '#C8E6B8', // Soft Lime (Sport)
          glow: 'rgba(200, 230, 184, 0.4)',
        },
        champagne: {
          DEFAULT: '#DCC9A6', // Soft Champagne (Premium)
          glow: 'rgba(220, 201, 166, 0.4)',
        },
        titanium: {
          DEFAULT: '#C9D1D6',
          light: '#F1F3F5',
          muted: '#A7ADB4',
          dark: '#6F7780',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#22c55e',
          glow: 'rgba(37, 211, 102, 0.35)',
        },
        text: {
          white: '#FFFFFF',
          secondary: '#F1F3F5',
          muted: '#A7ADB4',
          dark: '#6F7780',
        },
      },
      fontFamily: {
        heading: ['Outfit', 'Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
        display: ['Syne', 'Outfit', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 4px 20px rgba(0, 0, 0, 0.4)',
        'premium': '0 12px 35px rgba(0, 0, 0, 0.6)',
        'card': '0 10px 30px rgba(0, 0, 0, 0.5)',
        'ice-glow': '0 0 25px rgba(143, 216, 255, 0.4)',
        'cyan-glow': '0 0 25px rgba(157, 231, 229, 0.4)',
        'aqua-glow': '0 0 25px rgba(142, 221, 208, 0.4)',
        'lavender-glow': '0 0 25px rgba(199, 192, 232, 0.4)',
        'lime-glow': '0 0 25px rgba(200, 230, 184, 0.4)',
        'whatsapp-glow': '0 0 25px rgba(37, 211, 102, 0.35)',
      },
      borderRadius: {
        'card': '18px',
        'card-lg': '22px',
        'modal': '24px',
        'btn': '14px',
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
