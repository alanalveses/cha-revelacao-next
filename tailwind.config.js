const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['var(--font-pacifico)', ...fontFamily.sans],
        quicksand: ['var(--font-quicksand)', ...fontFamily.sans],
      },
      colors: {
        'rosa-convite': '#FFD1DC',
        'azul-convite': '#ADD8E6',
        'rosa-convite-fuchsia': '#FF00FF',
        'azul-convite-navy': '#000080',
        'principal-rosa': '#d66088',
        'principal-azul': '#6a9acb',
        'botao-whatsapp': '#25D366',
        'botao-mapa': '#4285F4',
        'botao-form': '#F4B400',
      },
      
    },
    screens: {
      xxs: '240px',
      xs: '380px',
      ps: '440px', 
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
}