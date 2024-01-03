module.exports = {
  content: [
    "./index.html",
    "./node_modules/@velaro/**/*",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Open Sans",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji"
        ],
        rubik: ["Rubik", "sans-serif"]
      },
      colors: {
        "steel-blue": {
          50: "#F9FAFC",
          100: "#D5E0ED",
          200: "#B2C5DD",
          300: "#8EAACE",
          400: "#6B8FBE",
          500: "#4B75AB",
          600: "#3B5D88",
          700: "#36557C",
          800: "#2C4464",
          900: "#22344C"
        },
        grape: {
          50: "#F9F8FB",
          100: "#DDD6EA",
          200: "#C1B4D9",
          300: "#A591C9",
          400: "#896FB8",
          500: "#6E51A3",
          600: "#5F468C",
          700: "#4F3A76",
          800: "#402F5F",
          900: "#312448"
        },
        "cornflower-blue": {
          50: "#EEF4FD",
          100: "#CFE2FA",
          200: "#AFCFF8",
          300: "#90BCF5",
          400: "#629FF0",
          500: "#3383EC",
          600: "#1670E7",
          700: "#1361C8",
          800: "#1052A9",
          900: "#0D438A"
        },
        "success-green": {
          50: "#F1FCF6",
          100: "#C8F2DB",
          200: "#9FE7C0",
          300: "#77DDA6",
          400: "#4ED38B",
          500: "#2FBF71",
          600: "#28A461",
          700: "#228851",
          800: "#1B6D41",
          900: "#145230"
        },
        "sweet-orange": {
          50: "#FFFAEE",
          100: "#FFF0CC",
          200: "#FFE6AA",
          300: "#FFDB88",
          400: "#FFCC55",
          500: "#FFBD22",
          600: "#FFB300",
          700: "#DD9B00",
          800: "#BB8300",
          900: "#996B00"
        },
        "crimson-red": {
          50: "#FEF3F6",
          100: "#FBD4DD",
          200: "#F9B4C5",
          300: "#F695AC",
          400: "#F26688",
          500: "#EE3763",
          600: "#EB184B",
          700: "#CF123F",
          800: "#B00F36",
          900: "#910C2C"
        },
        "slate-gray": {
          50: "#F7F8F8",
          100: "#DADFE2",
          200: "#BDC6CC",
          300: "#A1ADB6",
          400: "#84949F",
          500: "#697B87",
          600: "#53616A",
          700: "#444F57",
          800: "#353E44",
          900: "#262D31"
        },
        stone: {
          100: "#4B4B4B",
          200: "#383838",
          300: "#2F2F2F",
          400: "#272727",
          500: "#232323",
          600: "#121212"
        },
        success: {
          500: "#2FBF71"
        },
        danger: {
          500: "#EB184B"
        }
      }
    }
  },
  plugins: []
};
