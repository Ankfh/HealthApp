/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#3d928a",
        customRed: "#F95700FF",
      },
    },
  },
  plugins: [],
};
