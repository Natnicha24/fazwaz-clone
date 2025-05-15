/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        custom_blue:"#006CE3",
        custom_red:"#DC4C4C"
      },
      screens:{
        custom_1308_bp:"1308px",
        custom_810_bp:"810px"
      },
    },
  },
  plugins: [require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide")
  ],
}

