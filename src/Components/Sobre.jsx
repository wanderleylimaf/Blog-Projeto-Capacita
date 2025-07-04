import React from "react";

export function Sobre() {
  return (
    <div className="bg-[#181818] py-16 px-6 flex justify-center items-center">
      <div className="flex flex-wrap items-center gap-8 max-w-5xl">
        <img
          src="https://cdn.pixabay.com/photo/2024/04/29/10/26/gaming-8727562_640.jpg"
          alt="Sobre imagem"
          className="w-full max-w-sm rounded-lg"
        />

        <div className="text-gray-100 max-w-xl">
          <h2 className="text-3xl font-bold mb-4">Game Station</h2>
          <p className="text-base leading-relaxed">
            Aqui você encontra notícias, reviews, dicas, vídeos e muita inspiração gamer.
            <br className="hidden md:block" />
            Explore conteúdos feitos por quem entende de verdade sobre esse mundo!
          </p>
        </div>
      </div>
    </div>
  );
};


