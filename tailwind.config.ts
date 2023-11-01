import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'inter': ['var(--font-inter)'],
      'poppins': ['var(--font-poppins)']
    },
    extend: {
      maxWidth: {
        '8xl': '1440px'
      },
      colors: {
        'main': {
          100: 'hsl(var(--100) / <alpha-value>)',
          200: 'hsl(var(--200) / <alpha-value>)',
          300: 'hsl(var(--300) / <alpha-value>)',
          400: 'hsl(var(--400) / <alpha-value>)',
          500: 'hsl(var(--500) / <alpha-value>)',
          600: 'hsl(var(--600) / <alpha-value>)',
          700: 'hsl(var(--700) / <alpha-value>)',
        }
      }
    },
    fontSize: {
      sm: '0.75rem', //10px
      base: '0.875rem', //14px
      xl: '1.125rem', //18px
      '2xl': '1.25rem', //20px
      '3xl': '2.375rem', //38px
      '4xl': '3.125rem', //50px
    },
    container: {
      center: true,
    }


  },
  plugins: [],
}
export default config
