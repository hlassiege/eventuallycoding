module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      spacing: {
        '76': '17rem',
        '124': '36rem',
        '128': '40rem',
      },
      height: {
        '124': '36rem',
        '128': '40rem',
      }
    }
  },
  plugins: [require("@tailwindcss/typography")],
};
