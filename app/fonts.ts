import { Pacifico, Quicksand } from 'next/font/google';

export const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico', // Definimos uma variável CSS para Pacifico
});

export const quicksand = Quicksand({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-quicksand', // Definimos uma variável CSS para Quicksand
});