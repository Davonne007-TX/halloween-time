/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arch: "'Archivo Black', san-serif",
        lobster: "'Lobster', cursive",
        nos: "'Nosifer', san-serif",
      },
    },
  },
  plugins: [],
};
