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
      }
    },
  },
  plugins: [],
}
