/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../assests/mechanical.gif')",
        "footer-texture": "url('../assests/mechanical.gif')",
      },
    },
  },
  plugins: [],
};
