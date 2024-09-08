/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
          lightGray: '#D3D3D3',
          purple:'#6842EF',
          primaryorange: '#FF5722',
          primaryColor: "#8873ef",
          headingcolor: "#081e21",
          smallTextColor: "#193256",
          primary: '#14b8a6',
          secondary: '#64748b',
          dark: '#0f172a',
      }
    },
  },
  plugins: [],
}