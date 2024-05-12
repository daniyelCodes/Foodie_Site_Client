/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gmain": "#FFD700",
        "gsecond": "#FFA500",
        "bgPrimary": "#FCFCFC",
      },
      fontFamily: {
        "inter": ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
}

