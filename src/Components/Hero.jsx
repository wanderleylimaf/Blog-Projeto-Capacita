import React from "react";
import bgImage from "../assets/bg-test.jpg"

export default function Hero() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay escura opcional para contraste */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Conteúdo centralizado */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Bem-vindo ao Nosso Site
        </h1>
        <p className="text-white text-lg md:text-xl max-w-2xl mb-6">
          Criamos experiências digitais impactantes e funcionais.
        </p>
        <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
          Saiba Mais
        </button>
      </div>
    </div>
  );
};


