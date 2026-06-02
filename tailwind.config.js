{import('tailwindcss').Config} 

export default {
    darkMode: 'class',
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        lg : "1280",
        md : "890",
        sm : "base"
      }
    },
  },
  plugins: [],
};