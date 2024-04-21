/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight-blue': '#293356',
        'slate-blue': '#848EAD',
        'white': '#FFF',
        'StrongCyan': 'hsl(174, 86%, 45%)',
        'LightestGrayishBlue': "hsl(223, 50%, 87%)",
        'LightGrayishRed': '#FEEDE8',
        'MediumGrayishRed': '#FF8D68',
        'baby-blue': '#ECF0FB',
        'navy-blue': '#BECDFF',
        'button-hover': '#7AEADF'
      },
      boxShadow: {
        'section': '0px 20px 30px -5px rgba(127, 137, 185, 0.15)'
      }
    },
  },
  plugins: [],
}
