/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "product-green": "#095D6A",
        "product-orange": "#FE7B30",
        "product-yellow": "#FBBC58",
      },
    },
  },
  plugins: [],
}