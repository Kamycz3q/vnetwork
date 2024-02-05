import type { Config } from 'tailwindcss'
const defaultTheme = require("tailwindcss/defaultTheme")

const config: Config = {
  content: [
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/*.{js,ts,jsx,tsx,mdx}',
    './src/app/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        "starkiller": ["starkiller", 'Arial', 'sans-serif'],
        "norwester": ["norwester", 'Arial', 'sans-serif'],
        "imperfect": ["imperfect", 'Arial', 'sans-serif'],
        "quantum": ["quantum", 'Arial', 'sans-serif'],

      }
    },
  },
  plugins: [],
  important: true 
}
export default config
