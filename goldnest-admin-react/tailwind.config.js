/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FBF8F1',
          100: '#F7F0E3',
          200: '#EFE0C7',
          300: '#E7D0AB',
          400: '#DFC08F',
          500: '#D4AF37',
          600: '#B8962C',
          700: '#8A7021',
          800: '#5C4B16',
          900: '#2E250B',
        },
        luxury: {
          cream: '#F8F6F2',
          charcoal: '#2D2D2D',
          dark: '#111111',
          matte: '#1A1A1A',
          pearl: '#F5F0E8',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 60px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(212, 175, 55, 0.1)',
        'gold': '0 10px 40px -8px rgba(212, 175, 55, 0.3)',
        'inner-gold': 'inset 0 2px 4px 0 rgba(212, 175, 55, 0.06)',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #B8962C 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1A1A1A 0%, #111111 100%)',
        'gradient-luxury': 'linear-gradient(135deg, #F8F6F2 0%, #F5F0E8 100%)',
      }
    },
  },
  plugins: [],
}