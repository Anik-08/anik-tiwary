/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class", // Enables dark mode using the "class" strategy
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  