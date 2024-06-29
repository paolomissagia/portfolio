/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#212737",
      secondary: "#EAEDF3",
      accent: "#AB4B08",
    },
    fontFamily: {
      mono: ["JetBrains Mono"],
    },
  },
  plugins: [],
};
