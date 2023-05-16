/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
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
    },
    lineHeight: {
      main: "1.29",
    },
  },

  plugins: [],
};
