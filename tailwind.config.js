import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "line-seed-en": ["var(--font-line-seed-en)"],
        "line-seed-th": ["var(--font-line-seed-th)"],
        "line-seed-jp": ["var(--font-line-seed-jp)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
