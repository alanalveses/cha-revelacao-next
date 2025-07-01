// components/FloatingBalloons.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const NUM_BALLOONS = 10;

export default function FloatingBalloons() {
  const [balloons, setBalloons] = useState<
    { id: number; left: number; delay: number; isPink: boolean }[]
  >([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBalloons((prev) => {
        const newBalloon = {
          id: Date.now(),
          left: Math.random() * 90, // posição horizontal
          delay: Math.random() * 3, // atraso até 3s
          isPink: Math.random() > 0.5,
        };

        return [...prev, newBalloon].slice(-NUM_BALLOONS); // mantém os mais recentes
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {balloons.map((balloon) => (
        <Image
          key={balloon.id}
          src={balloon.isPink ? "/balloon-pink.png" : "/balloon-blue.png"}
          alt="Balão"
          width={60}
          height={90}
          className="absolute animate-rise-smooth"
          style={{
            left: `${balloon.left}%`,
            bottom: "-100px",
            animationDelay: `${balloon.delay}s`,
            animationDuration: "12s",
          }}
        />
      ))}
    </div>
  );
}
