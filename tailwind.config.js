/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C084FC",
        secondary: "#60A5FA",
        dark: "#09090F",
        card: "#111118",
      },
    },
  },
  plugins: [],
};