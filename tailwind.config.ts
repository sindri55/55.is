import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#0D0E10',
          secondary: '#15171C',
          tertiary: '#1C1F26',
        },
        border: {
          DEFAULT: '#2A2D35',
        },
        brand: {
          cyan: '#00FFC2',
          purple: '#8E6EFF',
          blue: '#00B8FF',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
