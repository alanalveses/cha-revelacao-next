"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";
import Image from "next/image";
import GradientButton from "../components/ButtonGradient";
import FloatingBalloons from "../components/FloatingBalloons";
import Head from "next/head";

export default function Confirmation() {
  useEffect(() => {
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br text-center px-6 py-16">
        <div className="bg-white/90 border-4 border-pink-300 shadow-xl rounded-xl max-w-md w-full p-8 animate-fade-in">
          <h1 className="text-3xl font-[Pacifico] text-pink-300 mb-6 animate-fade-in-up">
            🎉 Presença{" "}
            <span className="text-blue-300 animate-fade-in-up">
              confirmada!
            </span>{" "}
            🎉
          </h1>
          <p className="text-xl text-gray-700 mb-4">
            Agora é só entrar em contato pelo WhatsApp através do ícone abaixo,
            que eu te recomendarei o tamanho ideal da fralda para o(a) nosso(a)
            pequeno(a). 😊
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Te esperamos lá para celebrar esse momento especial! 😉
          </p>

          <div className="flex justify-center items-center gap-6 transition duration-300 animate-pulse">
            <a
              href="https://api.whatsapp.com/send?phone=557791287659&text=Confirmo%20minha%20presen%C3%A7a%2C%20qual%20o%20tamanho%20ideal%20de%20fralda%20para%20presentear%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/whatsapp.png"
                alt="WhatsApp"
                width={64}
                height={64}
                className="hover:scale-105 transition-transform "
              />
            </a>
            <GradientButton />
          </div>
        </div>
        <FloatingBalloons />
      </main>
    </>
  );
}
