/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial-small":
          "radial-gradient(ellipse 110% 80% at center, var(--tw-gradient-stops) 50%)",
        "gradient-radial-large":
          "radial-gradient(circle at center, var(--tw-gradient-stops) 150%)",
      },
      colors: {
        darkBlue: "rgb(25, 35, 48)",
        niceBlack: "rgb(23, 24, 26)",
      },
    },
  },
  plugins: [],
};
