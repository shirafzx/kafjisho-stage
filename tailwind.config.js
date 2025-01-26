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
        inter: ["var(--font-inter)"],
        notoSerifThai: ["var(--font-notoSerifThai)"],
        notoSerifJP: ["var(--font-notoSerifJP)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
