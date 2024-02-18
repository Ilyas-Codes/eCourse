import customize from "./customize.json";
import typography from "@tailwindcss/typography";

const { colors } = customize;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "4xl": { max: "2400px" },
      "3xl": { max: "1920px" },
      "2xl": { max: "1536px" },
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
      xs: { max: "400px" },
      "2xs": { max: "350px" },
    },
    extend: {
      colors: {
        main: `${colors.main}`,
        dark: `${colors.dark}`,
      },

      fontFamily: {
        circular: ["circular", "sans-serif"],
      },

      fontSize: {
        "50px": "rfs(50px)",
        "40px": "rfs(40px)",
        "30px": "rfs(30px)",
        "25px": "rfs(25px)",
        "20px": "rfs(20px)",
        "18px": "rfs(18px)",
      },
    },
  },
  plugins: [typography],
};
