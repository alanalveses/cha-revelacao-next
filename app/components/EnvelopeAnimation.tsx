import { useEffect } from "react";

interface EnvelopeAnimationProps {
  onFinish: () => void;
}

export default function EnvelopeAnimation({ onFinish }: EnvelopeAnimationProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "inritel",
      }}
    >
      <img
        src="/stork-with-baby.gif" // Coloque a GIF na pasta public e ajuste o caminho
        alt="Envelope animado"
        style={{
          width: 200, // tamanho da imagem
          height: 200,
          borderRadius: "40%", // deixa redonda
          objectFit: "cover", // preenche e corta bordas
          boxShadow: "0 0 15px rgba(0,0,0,0.2)", // sombra opcional para destacar
        }}
      />
    </div>
  );
}
