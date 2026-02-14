/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#E5D7C4", // Bone
        primary: "#4C1D95",    // Deep Purple
        surface: "#E6E6FA",    // Lavender
        accent: "#4C3D19",     // Dark Brown/Black text
      },
    },
  },
  plugins: [],
};