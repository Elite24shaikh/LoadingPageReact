/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        satoshi: ["Satoshi", "sans-serif",],
        Panchang: ["Panchang", "sans-serif",],
        spaceGrotesk: ["Space Grotesk", "sans-serif",],

      }
    },
  },
  plugins: [],
}