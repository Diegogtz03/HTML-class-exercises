import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      willChange: {
        'filter': 'filter',
      },
      dropShadow: {
        'vite': '0 0 2em #646cffaa',
        'react': '0 0 2em #61dafbaa'
      },
      keyframes: {
        logoSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config