/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#f9fafc",
        btnColor: "#4263eb",
        orange: "#fe7f3d",
        dark:"#363941"
      },
      fontSize: {
        xxs: '0.5rem',
      }
    },

  },
  plugins: [],
}