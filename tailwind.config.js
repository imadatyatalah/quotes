const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#067354",
          200: "#078b66",
          300: "#08a478",
          400: "#09bc8a",
          500: "#0ad49c",
          600: "#0bedae",
          700: "#1df4b8",
        },
      },

      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
