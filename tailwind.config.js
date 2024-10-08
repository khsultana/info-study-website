/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Jakarta: "'Plus Jakarta Sans', sans-serif",
        Montserrat:"'Montserrat', sans-serif",
        Poppins:"'Poppins', sans-serif"
      },
      
      
    },
  },
    plugins: [
    require('daisyui'),
  ],
}

