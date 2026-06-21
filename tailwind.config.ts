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
        noir: '#1A1A1A',
        'noir-alt': '#2A2A2A',
        or: '#C9A84C',
        'or-clair': '#E8C870',
        creme: '#F8F3EC',
        'blanc-casse': '#FDFAF4',
        orange: '#E8572A',
        rose: '#D63578',
        magenta: '#C4359A',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxury: '0.2em',
        wide: '0.1em',
      },
      backgroundImage: {
        'gradient-odyssee': 'linear-gradient(135deg, #E8572A 0%, #D63578 50%, #C4359A 100%)',
        'gradient-odyssee-h': 'linear-gradient(90deg, #E8572A 0%, #D63578 50%, #C4359A 100%)',
      },
    },
  },
  plugins: [],
}
export default config
