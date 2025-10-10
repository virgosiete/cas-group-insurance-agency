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
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        brand: {
          black: '#000000',
          darkTeal: '#0f766e',
          sage: '#000000',
          sageLight: '#14b8a6',
          sageDark: '#000000',
          lightTeal: '#ccfbf1',
          offWhite: '#f0fdfa',
        },
      },
    },
  },
  plugins: [],
};
