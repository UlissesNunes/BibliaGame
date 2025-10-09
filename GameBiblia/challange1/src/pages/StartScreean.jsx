import { FaComments } from 'react-icons/fa';

function StartScreean({StartGameOn, notifyGame}) {
  return (
    
<>
  <main className="flex flex-col  items-center justify-start h-screen 
  bg-gradient-to-b from-green-50  to-green-100 xl:align-middle xl:items-center">
    <h1 className="pt-6 pl-2 pr-2 text-center text-sm font-bold text-green-950  sm:text-lg md:text-lg md:w-4/5 lg:text-base lg:px-44 lg:m-1 xl:px-44 xl:py-10 xl:align-middle xl:text-2xl  2xl:text-2xl 2xl:pt-24 2xl:px-40 2xl:mb-1">
      DESAFIO: Garanta a maior pontuação, são perguntas bíblicas onde você deverá preencher o quadro com letras para formar a palavra de acordo com a dica fornecida.
    </h1>
    <p className='flex m-3 text-sm justify-center font-semibold text-green-900'>clique em  <span className="flex mx-2 text-base items-center text-green-700 cursor-pointer " onClick={notifyGame} ><FaComments /></span>  e saiba mais</p>
    <button onClick={StartGameOn} className="mt-8 w-32 bg-green-800 text-green-50 hover:text-green-100 py-2 px-4 rounded-md cursor-pointer hover:bg-green-900 transition duration-300 font-bold md:w-44 md:py-3 md:px-6 md:text-lg lg:w-44  lg:mt-7 2xl:px-4 2xl:w-60 2xl:text-xl">
      Iniciar jogo
    </button>

    <img src="/assets/fundoverde.png" alt="img" className="w-auto mt-10 p-3 md:px-32 md:m-0 lg:m-0 lg:px-80 lg:pb-0
    xl:h-80 xl:justify-center flex  2xl:px-96 2xl:mt-10 2xl:mb-1 2xl:h-80 2xl:w-auto
     "/>

    <p className="text-green-950 w-34 p-1 text-xs  text-center md:text-sm md:justify-center md:text-center  lg:text-sm xl:mb-20 xl:text-base   2xl:hidden">Tudo posso naquele que me fortalece - <br/><strong>Filipenses 4:13</strong></p>
   
   
  </main>
</> 
  )
}

export default StartScreean