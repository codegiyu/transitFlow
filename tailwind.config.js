/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
        gradient: "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 50.75%, #FFD7A6 102.71%)"
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

