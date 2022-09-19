module.exports = {
  plugins: [require('flowbite/plugin')],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'libre-franklin': ['Libre Franklin', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        white: '#ffffff',
        black: '#000000',
        smoke: '#f2f0f0',
        magnolia: {
          DEFAULT: '#ddc8f8',
          light: '#f1eafa',
          overlap: '#c55fd0',
        },
        orchid: {
          DEFAULT: '#e479d6',
          light: '#f4c9f0',
          overlap: '#de0a11',
        },
        scarlet: {
          DEFAULT: '#f81514',
          light: '#faa2a0',
        },
        malibu: {
          DEFAULT: '#50aef8',
          light: '#b8ddfa',
          dark: '#224664',
        },
        charcoal: '#151212',
      },
    },
    configViewer: {
      fonts: [
        'https://fonts.googleapis.com/css2?family=Libre+Franklin&display=swap',
        'https://fonts.googleapis.com/css2?family=Syne&display=swap', // <- only 500 will be used
      ],
    },
  },
};
