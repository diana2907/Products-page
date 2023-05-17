/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/js/fetch.js", "./src/js/toggleSlide.js"],
  theme: {
    fontFamily: {
      main: ["Space Grotesk"],
      logo: ["Roboto"],
      footer: ["Space Mono"],
    },
    backgroundColor: {
      main: "#FCF7E6",
      button: "#000000",
      accent: "#ED5E21",
      footer: "#ffffff",
    },
    colors: {
      mainText: "#000000",
      secondaryText: "#FFFFFF",
      lightColor: "#FCF7E6",
      hoverColor: "#5a1b1b",
    },
    lineHeight: {
      main: "1.3",
      footer: "1.5",
    },
  },

  plugins: [],
};
