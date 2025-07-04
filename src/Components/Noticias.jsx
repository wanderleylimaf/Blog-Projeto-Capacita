import React from "react";

const noticias = [
  {
    id: 0,
    titulo: "<strong>CyberCity 2099</strong> ganha atualização secreta com cidade submersa jogável.",
    imagem: "https://media.sketchfab.com/models/3b61335c2a004a9ea31c8dab59471222/thumbnails/db08242aa53d43e096c136a681e83eb5/015c1e9eec23449c9432c27402216dd3.jpeg",
  },
  {
    id: 1,
    titulo: "Personagem enigmático aparece em <strong>Elder Blades Online</strong> e ninguém sabe como desbloqueá-lo.",
    imagem: "https://images.ctfassets.net/rporu91m20dc/4xdVNt0y1ik2Is6CEiaeKq/27fddb5035db3a00a4f8481cb50a60a2/Blades_05CuttingEdge_600x337-01.jpg",
  },
  {
    id: 2,
    titulo: "Jogo de tiro com IA adaptativa revoluciona o gênero: inimigos aprendem seus padrões!",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRsfcj8nE68H26vyi1s4lkdeAfOapsO621OQ&s",
  },
  {
    id: 3,
    titulo: "Game indie de pixel art mistura RPG tático e culinária mágica — e está fazendo sucesso!",
    imagem: "https://preview.redd.it/canvas-size-and-assets-v0-iow1atzockyb1.jpg?width=1080&crop=smart&auto=webp&s=043133a83b642a13d03821e2285b5bd9491c10e1",
  },
];

const Noticia = () => {
  return (
    <div className="py-16 px-6 text-center bg-black text-white">
      <h2 className="text-3xl font-bold mb-2">Últimas notícias</h2>
      <p className="text-gray-300 mb-10">Notícias mais recentes sobre o universo tech gamer</p>

      <div className="flex flex-wrap justify-center gap-6">
        {noticias.map((noticia) => (
          <div
            key={noticia.id}
            className="group relative w-[250px] bg-[#1e1e1e] rounded-lg p-4 text-white shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:bg-gradient-to-br from-[#d6ffed] to-[#b3ffda] hover:text-black"
          >
            {/* Efeito brilho (pseudo-elemento substituído via span animado) */}
            <span className="absolute inset-0 before:content-[''] before:absolute before:top-0 before:left-[-75%] before:w-1/2 before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:skew-x-[-20deg] group-hover:before:animate-[shine_1s_forwards] pointer-events-none z-0" />

            <img src={noticia.imagem} alt="Notícia" className="w-full rounded-md relative z-10" />
            <p
              className="mt-4 mb-4 text-sm relative z-10"
              dangerouslySetInnerHTML={{ __html: noticia.titulo }}
            />
            <button className="relative z-10 bg-[#43CD80] text-white font-bold py-2 px-4 rounded shadow-md hover:bg-[#2F8B57] hover:shadow-lg transition">
              Leia mais
            </button>
          </div>
        ))}
      </div>

      {/* Animação personalizada no Tailwind */}
      <style>{`
        @keyframes shine {
          0% {
            left: -75%;
          }
          100% {
            left: 125%;
          }
        }
      `}</style>
    </div>
  );
};

export default Noticia;
