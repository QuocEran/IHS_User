const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#363853",
        primary: "#ffe3e3",
        green: "#67D4CA",
        red: "#F28080",
        secondary: "#FFF8F3",
      },
    },
    screens: {
      xs: "120px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {
      borderWidth: ["last", "hover"],
      borderRadius: ["hover"],
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
