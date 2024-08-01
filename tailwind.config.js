/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      yellow: "#ffe000",
      black: "#000000",
    },
    fontFamily: {
      Roboto: ["var(--font-roboto)"],
      SpaceMono: ["var(--font-spacemono)"],
    },
    extend: {
      fontSize: {
        base: "18px",
      },
    },
  },
  plugins: [],
};
