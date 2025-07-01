"use client";
import Lottie from "lottie-react";
import bearAnimation from "@/public/lottie/dog.json"; // ou o caminho correto para sua animação

export default function Bear() {
  return (
    <div className="fixed bottom-0 -right-8 w-32 h-32 z-50 pointer-events-none">
      <Lottie animationData={bearAnimation} loop={true} />
    </div>
  );
}
