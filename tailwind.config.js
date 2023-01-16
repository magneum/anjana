/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sacramento: ["Sacramento", "cursive"],
        major: ["Major Mono Display", "monospace"],
        maven: ["Maven Pro", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
