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
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
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
          mediumGray: '#404040',
          sage: '#000000',
          sageLight: '#333333',
          sageDark: '#000000',
          lightGray: '#e5e5e5',
          veryLightGray: '#f5f5f5',
          offWhite: '#fafafa',
          borderGray: '#d4d4d4',
        },
      },
    },
  },
  plugins: [],
};
