module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // can be 'false', 'media', or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat, sans-serif",
        sans: "Source Sans Pro, sans-serif",
      },
      colors: {
        navy: "#2B257E",
        black: "#000000",
        white: "#ffffff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
