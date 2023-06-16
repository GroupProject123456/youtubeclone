/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        '2': '0.5rem', // Equivalent to p-2
      },
      borderRadius: {
        'full': '9999px', // Equivalent to rounded-full
      },
      colors: {
        'gray-100': '#f0f0f0',
        'gray-300': '#dbdbdb',
        'gray-700': '#242424',
        'gray-900': '#242424',
      },
    },
  },
  plugins: [],
};