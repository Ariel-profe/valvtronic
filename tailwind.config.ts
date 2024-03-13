import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{ts,tsx,mdx}',
    './app/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#0f172a',
        'primary-blue': '#4A53A0',
        'primary-purple': '#852A9B',
        'primary-yellow': '#BFB826',
        'primary-dark-grey': '#616160',
        'primary-red': '#E21936',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    }
  },
  plugins: [],
  darkMode: 'class'
}
export default config