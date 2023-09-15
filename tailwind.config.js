/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        texto: "#131629",
        fondo_botones: "#D5FF7B",
        fondo_servicio: "#D1C2E1",
        nav_footer: "#C6D7EA"
      }
    },
    fontFamily: {
      brice: ['Brice Semi Bold Condensed'],
      ptsans: ['PT Sans']
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '130px',
      'xxl': '160px',
      'yyl': '95px',
      tablet: '100px',
      movil: '58px',
    },
  },
  
  plugins: [],
}
