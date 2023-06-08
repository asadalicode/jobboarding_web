/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 3px 41px #00000008",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      colors: {
        white: "#fff",
        yellow: "#C59D1A",
        "yellow-secondary": "#FFAF3C",
        black: "#211D1D",
        "black-secondary": "#181313",
        "dark-gray": "#4C4949",
        gray: "#747474",
        red: "#CC1E1E",
        green: "green",
        blue: "#006AB5",
        "yellow-gradient": "#FFF4CB",
        "bluish-gradient": "#00355B3D",
        "gray-light": "#F4F4F4",
        "pink-light": "#CC1E1E",
        "green-light": "#58D439",
        transparent: "transparent",
      },
      width: {
        128: "32rem",
      },
      screens: {
        sm: { min: "10px", max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }
        md: { min: "768px", max: "975px" },
        lg: "976px",
        xl: "1440px",
      },
      // gridTemplateColumns: {
      //   'card': '200px minmax(100px, 1fr) 100px',
      // }
    },
  },
  plugins: [],
});
