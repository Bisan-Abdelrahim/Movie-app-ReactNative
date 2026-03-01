/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#0d0914",
        secondary: "#321f38",
        accent: "#b68dc4",
        light: {
          100: "#f0f0f0",
          200: "#d9d9d9",
          300: "#c2c2c2",
        },
        dark: {
          100: "#1a1a1a",
          200: "#0d0d0d",
          300: "#000000",
        },
      },
    },
  },
  plugins: [],
}