/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coksu: {
          50: '#FBF7F2',
          100: '#F5EDE2',
          200: '#E8D5BE',
          300: '#D9BC97',
          400: '#C79E70',
          500: '#B6844F',
          600: '#A06E3F',
          700: '#835734',
          800: '#6B462B',
          900: '#5A3A24',
          950: '#3D2618',
        },
        cream: '#FAF6F0',
        beige: '#F0E8DC',
        offwhite: '#FDFAF6',
        charcoal: '#2B2018',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
