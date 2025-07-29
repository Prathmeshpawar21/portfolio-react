const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

export default {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx,scss}",
    "./src/styles/**/*.{js,jsx,ts,tsx,scss}",
    "./src/app/**/*.{js,jsx,ts,tsx,scss}",
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },

    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#000000",
        purple: "#8b31ff",
        red: "#cf0000",
        green: "#00ac56",

        // Extend indigo with default plus your custom shades)
        indigo: {
          ...colors.indigo,         // includes default indigo shades (50,100,...900)
          light: "#9f55ff",         // your custom light shade
          dark: "#7000ff",          // your custom dark shade
        },
        

        // Extend gray colors 
        gray: {
          ...colors.gray,            // includes default grays (50,100,...900)
          light: {
            1: "#f0f0f0",
            2: "#dbdbdb",
            3: "#aaaaaa",
            4: "#8a8a8a",
          },
          dark: {
            1: "#323133",
            2: "#242225",
            3: "#1e1b20",
            4: "#1a171e",
            5: "#120e16",
          },
        },
      },

      fontFamily: {
        sans: ["var(--font-calibre)"],
        mono: ["var(--font-jetbrains-mono)"],
      },

      animation: {
        meteor: "meteor 5s linear infinite",
      },

      keyframes: {
        meteor: {
          "0%": {
            transform: "rotate(215deg) translateX(0)",
            opacity: 1,
          },
          "70%": {
            opacity: 1,
          },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
