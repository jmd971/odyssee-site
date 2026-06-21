import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sable: '#F5EDD6',
        'sable-light': '#FDFAF4',
        dore: '#C9A84C',
        'dore-dark': '#A8892E',
        tropical: '#2D6A4F',
        terracotta: '#C45B3A',
        charcoal: '#2C2C2C',
        'warm-white': '#FDFAF4',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxury: '0.2em',
        wide: '0.1em',
      },
    },
  },
  plugins: [],
}
export default config