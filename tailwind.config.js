/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./templates/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#ff5722',
          navy: '#0B0F19'
        }
      }
    },
  },
  plugins: [],
}
