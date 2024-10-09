/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        agb: "'Agbalumo', system-ui",
        lobster: "'Lobster', cursive",
        nos: "'Nosifer', san-serif",
      },
    },
  },
  plugins: [],
};
