/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class", // enables dark mode toggle
  theme: {
    extend: {
      colors: {
        primary: "#1B3A57",   // Deep Blue
        secondary: "#1C1C1C", // Black
        accent: "#FFFFFF",    // White
        highlight: "#2563EB", // Royal Blue
        background: "#F4F4F5" // Light Gray
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s ease forwards",
      },
    },
  },
  plugins: [],
}
