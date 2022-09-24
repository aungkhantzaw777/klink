/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    
    colors: {
      'app': {
        primary: '#151D72',
        primarylight: '#2E3EA1',
        gold: '#FEC84B',
        darkgray: '#939DD4',
      },
      'primary': {
        25: '#EEF1FF',
        600: '#2E3EA1 '
      },
      'gray': {
        100: '##f1f5f9',
        500: '#667085',
        700: '#344054', 
        900: '#101828'
      },
      'white': '#fff',
      'normal': '#344054',
      'black': '#000',
      'blue': '#2E3EA1 ',
      'lightgray': '#667085',
      'darkgray': '#939DD4'
    }
  },
  plugins: [],
}
