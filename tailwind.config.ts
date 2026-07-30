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

        "tnc-red": "#c8102e",
        "tnc-red-dark": "#9c0d24",
        "tnc-navy": "#47101b",
        "tnc-ink": "#2a2226",
        "tnc-muted": "#7a7378",
        "tnc-line": "#eae5e6",
        "tnc-bg": "#faf7f7",
        "tnc-white": "#ffffff",
        "tnc-green": "#0e7c4a",
        "tnc-green-bright": "#2fbf7f",
        "tnc-green-text": "#7fe6b6",
        "tnc-red-text": "#ff9aa8",
      },
    },
  },
  plugins: [],
} satisfies Config;
