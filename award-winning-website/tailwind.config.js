/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
      colors: {
        blue: {
          50: "#FFE5CC",
          75: "#FFD9B3",
          100: "#FFF5EB",
          200: "#010101",
          300: "#FF8C42",
        },
        violet: {
          300: "#ff6600",
        },
        yellow: {
          100: "#ff8800",
          300: "#ffaa00",
        },
      },
    },
  },
  plugins: [],
};
