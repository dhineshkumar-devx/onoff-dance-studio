/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#070709',
          900: '#0D0D11',
          850: '#131318',
          800: '#1A1A22',
          750: '#22222C',
          700: '#2C2C38',
        },
        orange: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
          950: '#431407',
        },
        copper: {
          DEFAULT: '#F97316',
          light: '#FB923C',
          dark: '#EA580C',
          glow: 'rgba(249, 115, 22, 0.35)',
        },
        silver: {
          DEFAULT: '#E2E8F0',
          light: '#F8FAFC',
          muted: '#94A3B8',
          dark: '#64748B',
        }
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        luxury: ['Cinzel', 'serif'],
        mono: ['"Space Grotesk"', 'monospace'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'orange-sm': '0 0 15px rgba(249, 115, 22, 0.25)',
        'orange-md': '0 4px 25px rgba(249, 115, 22, 0.35)',
        'orange-lg': '0 8px 40px rgba(249, 115, 22, 0.45)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        'orange-gradient': 'linear-gradient(135deg, #FB923C 0%, #EA580C 50%, #C2410C 100%)',
        'orange-gradient-soft': 'linear-gradient(135deg, rgba(251, 146, 60, 0.15) 0%, rgba(234, 88, 12, 0.05) 100%)',
        'silver-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 50%, #94A3B8 100%)',
        'dark-gradient': 'linear-gradient(180deg, rgba(13,13,17,0) 0%, #0D0D11 100%)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      }
    },
  },
  plugins: [],
}
