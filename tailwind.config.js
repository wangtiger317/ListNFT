/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      black: {
        600:"#17171F"
      },
      primary: "#1A1D2D",
      white: "#FFF",
      secondary: "#252A3E",
      gray: {
        300: "#34394C",
        400:"#7C829F"
      },
      blue: {
        400:"#4A66C5"
      }

    }
  },
  plugins: [],
}
