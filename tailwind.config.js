// eslint-disable-next-line no-undef
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope-Medium', 'sans-serif'],
        display: ['Manrope-Medium', 'sans-serif'],
        body: ['Manrope-Medium', 'sans-serif'],
      },
      // Tu configuración de colores y otros extendidos
      colors: {
        "kp-primary": {
          500: '#f2f1f4',
          600: '#e4e2e8',
          700: '#c8c5d1',
          800: '#908ba3',
          DEFAULT: '#201646',
        },
        "kp-secondary": {
          500: '#f8f6fc',
          600: '#f1edf9',
          700: '#e3dbf2',
          800: '#c7b7e4',
          DEFAULT: '#8E6EC8',
        },
        "kp-tertiary": {
          500: '#fdfff2',
          600: '#fbfee4',
          700: '#f6fcc9',
          800: '#edf993',
          DEFAULT: '#DBF227',
        },
        title: '#3A3A3A',
        text: '#4F4F4F',
        white: '#FFFFFF',
        black: '#000000',
        placeholder: '#626262',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  variants: {
    extend: {
      
    },
  },
 
  plugins: [],
}
