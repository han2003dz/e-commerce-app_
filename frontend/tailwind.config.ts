import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        playfair: ['"Playfair Display"', "serif"],
      },
      backgroundImage: {
        "custom-gradient-bg-primary":
          "linear-gradient(to right, #fff7e6, #ffe3c9)",
        "custom-gradient-bg-pink":
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(253,222,222,1) 0%, rgba(255,255,255,1) 100%);",
      },
      colors: {
        primary: "#58360D",
      },
    },
  },
  plugins: [],
} satisfies Config;
