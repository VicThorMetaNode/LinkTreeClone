/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontSize: {
      sm: '0.8rem',
      md: '0.9rem',
      base: '1rem',
      lg: '1.15rem',
      xl: '1.25rem',
    },
    colors: {
      transparent: 'transparent',
      'main': {
        //si tu ne déclares pas une couleur, Tailwind va utiliser la couleur 'deafult' commme propriété. 
        DEFAULT:'#3A506B',
        light: '#668EBE',
    },
      'noir': '#1C1C1C',
      'turquoise': '#44ccec',
      'rose': '#D2295A',
      'blanc': '#FFFFFF',
      'alt-blanc': '#FEFEFE',
      'bleu': '#242244',
      'alt-bleu': '#292562',
      'gris': '#242238',
      'alt-gris': '#242244',
      'icon-gris': '#2A324B',
      'active': '#ACACE6',
      'disabled': '#46405f',
    },
    fontFamily: {
      main: ['Metrophobic', 'sans-serif'],
      sub: ['Red Hat Mono', 'monospace'],
    },
    
  },
 
  plugins: [
  ],
},
}


