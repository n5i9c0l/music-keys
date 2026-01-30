/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        press: ["'Press Start 2P'", "cursive"],
        pixel: ["'Pixelify Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
