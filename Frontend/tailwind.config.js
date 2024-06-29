/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-blue': '#094ca0',
        'customOrange': '#ff4f1e',
        'custom-blue-footer': '#00224c'

      },
      transitionDelay: {
        '0': '0ms',
        '200': '200ms',
        '400': '400ms',
        // Add more custom delays as needed
      },
    },
  },
  plugins: [],
}