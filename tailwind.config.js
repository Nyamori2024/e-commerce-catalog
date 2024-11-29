// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode using class strategy
  content: [
    './index.html', // Make sure to include your HTML entry file
    './src/**/*.{js,jsx,ts,tsx}', // Add all relevant file types in the 'src' folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}