/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "sm": "576px",
      "md": "768px",
      "lg": "992px",
      "xl": "1200px",
      "xxl": "1480px",
    },
    extend: {
      colors: {
        gold: "#FFBE34",
        blue: "#091242",
        blue25: "#09124225",
        blue91: "#09124291",
        secondary: "#F4F4F4",
        htext: "#1C1F35",
        ptext: "#666C89"
      },
      backgroundImage: {
        gradient: "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 50.75%, #FFD7A6 102.71%)",
        teamGradient: "linear-gradient(4.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)",
        clientGrad: "linear-gradient(0deg, #111C54 0%, #111C5400 98.72%)",
        projectGrad: "linear-gradient(0deg, #091242 14.34%, rgba(60, 60, 60, 0) 43.86%)"
      },
      fontFamily: {
        rubik: ["'Rubik'", "sans-serif"],
        krub: ["'Krub'", "sans-serif"],
        spartan: ["'League Spartan'", "sans-serif"],
      }
    },
  },
  plugins: [],
}

