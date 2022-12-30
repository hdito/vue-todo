/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { inter: ["InterVariable", "sans-serif"] },
    },
  },
  plugins: [],
};
