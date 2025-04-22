import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B41B2A",
        secondary: "#1C1B1F",
        tertiary: "#6C6B6F",
        quaternary: "#045cb4",
        "prime-red": "#B41B2A",
        "prime-light-blue": "#4054B2",
        "prime-dark-blue": "#0d2252",
        "second-red": "#C1282A",
        "second-blue": "#408BD1",
        light: "#CECECE",
        bg1: "#F1F7ED",
      },
    },
  },
  plugins: [],
} satisfies Config;
