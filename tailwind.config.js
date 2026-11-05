/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          deep: '#061B2C',
          midnight: '#071426',
          blue: '#0B3552',
          surface: '#12436D',
          foam: '#A5D8F3',
        },
        gold: {
          treasure: '#D6AF62',
          bright: '#F3CF7A',
          dark: '#9A7836',
          amber: '#F59E0B',
        },
        parchment: {
          DEFAULT: '#E9D4A6',
          antique: '#C8A66A',
          light: '#F5EADB',
          dark: '#8D6E3F',
        },
        pirate: {
          black: '#111111',
          crimson: '#B91C1C',
          marine: '#1E3A8A',
        },
        cloud: {
          white: '#F4F1E8',
        },
        sunset: {
          orange: '#E78B45',
          glow: '#FF7E36',
        },
      },
      fontFamily: {
        pirate: ['Cinzel Decorative', 'Pirata One', 'serif'],
        heading: ['Cinzel', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['Fira Code', 'Courier New', 'monospace'],
      },
      animation: {
        'wave-slow': 'wave 12s ease-in-out infinite',
        'bob-slow': 'bob 4s ease-in-out infinite',
        'compass-spin': 'compassSpin 8s ease-in-out infinite',
        'float-gentle': 'float 5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1deg)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-6px) rotate(-1.5deg)' },
          '75%': { transform: 'translateY(5px) rotate(1.2deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        compassSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'rotate(25deg)' },
          '40%': { transform: 'rotate(-15deg)' },
          '60%': { transform: 'rotate(10deg)' },
          '80%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 10px rgba(214, 175, 98, 0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 25px rgba(214, 175, 98, 0.8))' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'parchment-pattern': "radial-gradient(#E9D4A6 2px, transparent 2px), radial-gradient(#C8A66A 2px, #E9D4A6 2px)",
        'ocean-gradient': 'linear-gradient(180deg, #071426 0%, #061B2C 50%, #0B3552 100%)',
        'gold-foil': 'linear-gradient(135deg, #F3CF7A 0%, #D6AF62 50%, #9A7836 100%)',
      },
    },
  },
  plugins: [],
}

