/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#222436",
      secondary: "#c3e88d",
      accent: "#ff757f",
      base: "#c8d3f5",
    },
    fontFamily: {
      mono: ["JetBrains Mono"],
    },
  },
  plugins: [],
};
