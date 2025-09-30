

function AboutDev() {
  return (
    <section className=" p-5 bg-green-50 border-t-4 border-green-700 shadow-lg rounded-lg mx-auto max-w-lg">
      
     
      <h2 className="text-center text-2xl font-extrabold text-green-900 mb-4 border-b-2 border-green-200 pb-2">
        Sobre o Jogo
      </h2>

      {/* Área da Informação do Autor */}
      <div className="flex flex-col items-center text-center">
        
        {/* Imagem de Perfil (Substitua por uma imagem real se tiver!) */}
        <div className="w-20 h-20 rounded-full bg-green-300 flex items-center justify-center mb-4 border-4 border-green-600">
          <span className="text-white "><img src="/src/assets/eu.png" alt="" className="rounded-full " /></span>
        </div>
        
        {/* Nome e Descrição */}
        <p className="text-lg font-semibold text-green-900">
          Feito por Ulisses
        </p>
        <p className="text-xs text-green-950 mt-2 max-w-xs">
          Um projeto React desenvolvido com a missão de tornar o aprendizado sobre a Bíblia divertido e desafiador.
          Obrigado por jogar.
        </p>
      </div>

      {/* Redes Sociais */}
      <div className="mt-6 flex justify-center space-x-4">
        
        <a 
          href="https://www.linkedin.com/in/ulisses-nunes-9155ab298/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-500 hover:text-blue-600 transition duration-300 transform hover:scale-110"
          title="LinkedIn"
        >
          {/* Ícone fictício de LinkedIn (usar um ícone real como Heroicons/FontAwesome é melhor) */}
          <img className="w-6 h-6 fill-current" alt="LinkedIn"
            src="https://svgsilh.com/svg_v2/2446228.svg"/>
        </a>

        <a 
          href="https://github.com/UlissesNunes" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-500 hover:text-gray-900 transition duration-300 transform hover:scale-110"
          title="GitHub"
        >
            <img className="w-6 h-6 fill-current" alt="LinkedIn"
            src="https://pngimg.com/uploads/github/github_PNG20.png"/>
        
        </a>
      </div>
    </section>
  )
}

export default AboutDev