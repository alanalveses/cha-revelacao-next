"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import EnvelopeAnimation from "./components/EnvelopeAnimation";
import Diaper from "./components/Diaper";

export default function Home() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  // Estado para controlar a animação
  const [showAnimation, setShowAnimation] = useState(true);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xkgbqggl", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        window.location.href = "/confirmation";
      } else {
        setFormStatus("error");
        alert("Erro ao enviar o formulário. Tente novamente.");
      }
    } catch (error) {
      setFormStatus("error");
      alert("Erro de conexão. Verifique sua internet.");
      console.error(error);
    }
  };

  return (
    <>
      {showAnimation ? (
        <EnvelopeAnimation onFinish={() => setShowAnimation(false)} />
      ) : (
    <main className="min-h-screen flex flex-col items-center pt-8 md:pt-16 pb-8 px-4 md:px-8">
      <h1 className="font-pacifico text-principal-rosa text-4xl md:text-5xl lg:text-6xl text-shadow-md mb-0 leading-tight animate-fade-in-up">
        Chá Revelação
      </h1>
      <h2 className="font-pacifico text-principal-azul text-4xl md:text-5xl lg:text-6xl mb-0 leading-tight">
        e
      </h2>
      <h2 className="font-pacifico text-principal-azul text-4xl md:text-5xl lg:text-6xl mt-0 mb-8 md:mb-10 animate-fade-in-up">
        Fralda!
      </h2>

      <div
        className="relative bg-white bg-opacity-90 p-8 md:p-10 rounded-2xl shadow-xl border-4 border-principal-rosa max-w-lg w-full aspect-[500/707] mb-10 md:mb-16"
        style={{
          backgroundImage: "url('/bg.jpeg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 px-4 ">
          {/* Nuvem 1 */}
          <div
            className="relative w-32 h-20 bg-center bg-contain bg-no-repeat flex items-center justify-center animate-float animate-float-pink"
            style={{ backgroundImage: "url('/nuvem-pink.png')" }}
          >
            <Link
              href="https://api.whatsapp.com/send?phone=557791287659&text=..."
              target="_blank"
              className="relative z-10 text-[0.6rem] font-bold text-gray-700 text-center px-2"
            >
              Confirmar no WhatsApp
            </Link>
          </div>

          {/* Nuvem 2 */}
          <div
            className="relative w-32 h-20 bg-center bg-contain bg-no-repeat flex items-center justify-center animate-float animate-float-blue"
            style={{ backgroundImage: "url('/nuvem-blue.png')" }}
          >
            <Link
              href="https://maps.app.goo.gl/zZfusRABMvtctRGZ9"
              target="_blank"
              className="relative z-10 text-[0.6rem] font-bold text-gray-700 text-center px-2"
            >
              Ver Localização
            </Link>
          </div>

          {/* Nuvem 3 */}
          <div
            className="relative w-32 h-20 bg-center bg-contain bg-no-repeat flex items-center justify-center animate-float animate-float-random"
            style={{ backgroundImage: "url('/nuvem-pink.png')" }}
          >
            <Link
              href="/more"
              className="relative z-10 text-[0.6rem] font-bold text-gray-700 text-center px-2"
            >
              Saiba Mais
            </Link>
          </div>
        </div>
      </div>

      <div
        id="form-section"
        className="bg-white bg-opacity-90 p-8 md:p-10 rounded-2xl shadow-xl border-4 border-principal-rosa max-w-lg w-full text-left mb-10 md:mb-16 animate-fade-in-up"
      >
        <h4 className="font-quicksand text-principal-rosa text-3xl md:text-4xl lg:text-5xl mb-6 text-center">
          Confirme sua Presença!
        </h4>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label htmlFor="nome" className="font-bold mb-1 block">
            Seu Nome:
          </label>
          <input
            type="text"
            id="nome"
            name="Nome"
            required
            className="w-full p-3 border border-gray-300 rounded-lg text-base"
          />

          <label htmlFor="convidados" className="font-bold mb-1 block">
            Quantas pessoas irão com você? (Incluindo você)
          </label>
          <input
            type="number"
            id="convidados"
            name="Numero de Convidados"
            min="1"
            defaultValue="1"
            required
            className="w-full p-3 border border-gray-300 rounded-lg text-base"
          />

          <p className="font-bold text-lg mt-4 mb-2">
            Sugestões de marcas que gostamos 💕
          </p>
          <Diaper/>

          <button
            type="submit"
            disabled={formStatus === "submitting"}
            className="mt-6 px-6 py-3 bg-botao-form text-white font-bold text-lg rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 self-center w-fit"
          >
            {formStatus === "submitting" ? "Enviando..." : "Enviar Confirmação"}
          </button>
        </form>
      </div>

      <footer className="mt-8 text-sm text-gray-600 mb-5">
        Esperamos você para celebrar esse momento único!
      </footer>
    
    </main>
    )}
    </>
  );
}
