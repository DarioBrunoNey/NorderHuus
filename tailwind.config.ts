import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Markenfarben: Sand, Dunkelblau, Weiß
        sand: {
          50: '#FAF7F1',
          100: '#F3EEE3',
          200: '#EAE2D1',
          300: '#DCD0B8',
          400: '#C4B392',
          500: '#A8946F',
        },
        navy: {
          DEFAULT: '#18324E',
          light: '#2A4A6B',
          deep: '#0F2236',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '72rem',
      },
    },
  },
  plugins: [],
};

export default config;
