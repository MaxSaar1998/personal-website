/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}'
  ],

  theme: {
    extend: {
      fontFamily: {
        ssans3: ['SourceSans3Regular', 'sans-serif'],
        ssans3bold: ['SourceSans3Bold', 'sans-serif'],
      }
    },
    /*fontFamily: {
      sans: ['SourceSans3Regular', 'sans-serif'],
    }*/
    /*colors: {
      extend: {
        primary: '#6f73d2',
        background: '#262730',
        foreground: '#9b9b93'
      }
    }*/
  }
}

