/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f9f9f9',
          100: '#f5f5f5',
          200: '#e8e8e8',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        brand: {
          black: '#000000',
          darkGray: '#1a1a1a',
          sage: '#000000',
          sageLight: '#333333',
          sageDark: '#000000',
          lightGray: '#E8E8E8',
          offWhite: '#F5F5F5',
        },
      },
    },
  },
  plugins: [],
};
