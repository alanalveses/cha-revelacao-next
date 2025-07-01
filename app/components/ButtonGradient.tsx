"use client";

import Link from "next/link";

export default function GradientButton() {
  return (
    <Link
      href="/"
      className="relative flex items-center justify-center w-16 h-16 text-white text-sm rounded-full overflow-hidden group"
    >
      <span className="z-10 text-gray-700">Voltar</span>
      <span className="absolute inset-0 transition-all duration-700 group-hover:rotate-180 bg-animated-gradient"></span>
    </Link>
  );
}
