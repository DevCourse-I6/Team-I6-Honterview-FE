import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaries: {
          primary: "#0041C2",
          hover: "#00349B",
          active: "#004EE9",
        },
        secondary: {
          primary: "#3C3C3C",
          hover: "#303030",
          active: "#484848",
        },
        text: {
          100: "#000E28",
          80: "#404A5E",
          60: "#808693",
          40: "#BFC3C9",
          20: "#FFFFFF",
        },
        background: {
          20: "#F0F2F5",
        },
        white: "#FFFFFF",
        black: "#000000",
      },
      size: {
        extraSmall: "1.2rem",
        small: "1.4rem",
        medium: "1.6rem",
        large: "1.8rem",
        extraLarge: "2rem",
        doubleLarge: "3rem",
        tripleLarge: "3.6rem",
        quadrupleLarge: "4rem",
        full: "100%",
        half: "50%",
        none: "0%",
      },
      weight: {
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
        black: 900,
      },
      device: {
        mobile: { max: "480px" },
        tablet: { max: "768px" },
        laptop: { max: "1024px" },
      },
      opacity: {
        low: ".3",
        normal: ".5",
        high: ".7",
      },
      zIndex: {
        10: "1",
        20: "2",
        30: "3",
        40: "4",
        50: "5",
        60: "6",
        70: "7",
        80: "8",
        90: "9",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
