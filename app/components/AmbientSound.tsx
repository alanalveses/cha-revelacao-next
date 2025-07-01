"use client";
import { useEffect, useRef } from "react";

export default function AmbientSound() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      // Tentativa de tocar automaticamente
      audio.volume = 0.3;
      const play = () => {
        audio.play().catch(() => {
          // Alguns navegadores bloqueiam autoplay sem interação
        });
      };

      // Tenta tocar após qualquer clique
      window.addEventListener("click", play, { once: true });
    }
  }, []);

  return (
    <audio ref={audioRef} src="/ambiente.mp4" loop preload="auto" />
  );
}
