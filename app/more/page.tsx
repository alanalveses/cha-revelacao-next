"use client";

import Image from "next/image";
import GradientButton from "../components/ButtonGradient";
import Bear from "../components/Bear";

export default function More() {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center min-h-screen bg-gradient-to-br text-center px-6 py-16">
      <div className="bg-white/90 border-4 border-pink-300 shadow-xl rounded-xl max-w-md w-full p-8 animate-fade-in">
        <h1 className="text-3xl font-[Pacifico] text-pink-300 mb-6 animate-fade-in-up">
          Um bebê está a caminho para{" "}
          <span className="text-blue-300">
            encher nossas vidas de amor e alegria!
          </span>
        </h1>

        <p className="text-xl text-gray-700 mb-4 animate-fade-in-up-low">
          Te vemos lá para celebrar esse momento especial. 😉
        </p>

        <p className="text-lg text-gray-700 animate-fade-in-up-low">
          Aqui estão as sugestões de fraldas para presente: 🎁
        </p>

        <div className="flex justify-center items-center gap-4 mb-8 xs:gap-2 flex-wrap">
            <div className="pampers">
              <Image
                src="/pampers.png"
                alt="Logo Pampers"
                width={160}
                height={100}
                className="w-24 h-auto lg:w-28 md:w-24 sm:w-20 xs:w-16 xxs:w-12" 
              />
            </div>
            <div className="huggies">
              <Image
                src="/huggies.png"
                alt="Logo Huggies"
                width={160}
                height={100}
                className="w-24 h-auto lg:w-28 md:w-24 sm:w-20 xs:w-16 xxs:w-12"
              />
            </div>
            <div className="babysec">
              <Image
                src="/babysec.png"
                alt="Logo BabySec"
                width={160}
                height={100}
                className="w-24 h-auto lg:w-28 md:w-24 sm:w-20 xs:w-16 xxs:w-12"
              />
            </div>
          </div>

        <p className="text-base text-gray-600 mb-6 animate-fade-in-up-low">
          Após confirmar sua presença, enviaremos a numeração da fraldinha!
        </p>

        <div className="flex justify-center items-center gap-6 animate-fade-in-up-low transition duration-300 animate-pulse">
          <a
            href="https://api.whatsapp.com/send?phone=557791287659&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informações%20sobre%20o%20evento!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/whatsapp.png"
              alt="WhatsApp"
              width={64}
              height={64}
              className="hover:scale-105 transition-transform"
            />
          </a>
          <GradientButton/>
        </div>
      </div>
       <Bear/>
    </main>
  );
}
