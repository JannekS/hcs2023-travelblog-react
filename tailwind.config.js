/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["open sans", "sans-serif"],
        ysbeau: ["Ysabeau", "sans-serif"],
        handwriting: ["Reenie Beanie", "cursive"],
        handwriting2: ["Nothing You Could Do", "cursive"],
        title: ["Amatic SC", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
