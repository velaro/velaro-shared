module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#A5C0E1",
          DEFAULT: "#4C75AB",
          dark: "#1B4982"
        },
        green: {
          light: "#89CA86",
          DEFAULT: "#38C14F",
          dark: "#2DA341"
        },
        "steel-blue": {
          500: "#4B75AB",
          600: "#3B5D88",
          900: "#22344d",
          //These are just colors I stole from v10
          1000: "#404b5a",
          1200: "#f7fafc"
        },
        "cornflower-blue": {
          100: "#EEF5FE",
          200: "#CEE2FC",
          400: "#6DA9F7",
          500: "#2D83F3"
        },
        crimson: {
          50: "#FEF2F2",
          100: "#FDE3E9",
          300: "#F7A5B8",
          500: "#EF476F",
          600: "#DF1344"
        },
        steel: {
          50: "#D5DFED",
          100: "#A6BCD8",
          300: "#7798C3",
          500: "#4B75AB",
          600: "#3B5D88",
          900: "#2C4564"
        },
        "sweet-orange": {
          500: "#FFBD22"
        },
        "slate-gray": {
          200: "#BDC6CC",
          400: "#84949F"
        }
      },
      fontFamily: {
        rubik: ["Rubik"]
      }
    }
  },
  plugins: []
};
