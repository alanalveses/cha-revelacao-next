// src/app/layout.tsx
import "./globals.css";
import { quicksand, pacifico } from "./fonts"; // Importa as fontes

export const metadata = {
  title: "Convite Chá de Fralda e Revelação - Manuella ou Marcos",
  description:
    "Venha celebrar esse momento especial com a gente! Confirme sua presença no Chá de Fralda e Revelação.",
  openGraph: {
    title: "Chá de Fralda e Revelação - Manuella ou Marcos",
    description:
      "Venha celebrar esse momento especial com a gente! Confirme sua presença no Chá de Fralda e Revelação.",
      icons: {
          icon: '/favicon.ico',
        },
    url: "https://cha-revelacao-manuellamarcos.vercel.app/",
    images: [
      {
        url: "https://cha-revelacao-manuellamarcos.vercel.app/bg.jpeg", // Cuidado: Use a URL completa para OG
        width: 1200,
        height: 630,
        alt: "Imagem de fundo do convite",
        
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chá de Fralda e Revelação - Manuella ou Marcos",
    description:
      "Venha celebrar esse momento especial com a gente! Confirme sua presença no Chá de Fralda e Revelação.",
    images: ["https://cha-revelacao-manuellamarcos.vercel.app/bg.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${quicksand.variable} ${pacifico.variable}`}>
      <body className="font-quicksand" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
