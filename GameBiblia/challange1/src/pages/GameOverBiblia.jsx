import AboutDev from "./AboutDev"



function GameOverBiblia({retryGame, score,}) {
  return (
      <>
    <main className="flex flex-col items-center h-screen bg-gradient-to-b from-green-50  to-green-200 ">
        <h1 className="flex justify-center p-5 text-3xl text-green-900">Fim de Jogo</h1>
        
        <p className="text-center text-sm text-green-800">Leia mais a Bíblia!</p>
        <h2 className="text-center text-green-900 text-2xl p-2 m-2 ">Sua pontuação foi: <strong>{score}</strong></h2>
       
        <button onClick={retryGame} className=" flex justify-center text-center mt-2 bg-green-300 rounded-md px-5 py-2 text-green-900 font-bold hover:bg-green-400 transition duration-300">Jogar Novamente!</button>

        <img src="/assets/fundoverde.png" alt="" className="h-52 w-full  md:max-w-lg md:h-60 p-10"/>
       
<p className="text-green-950 w-30 p-1 text-xs  text-center md:text-sm md:justify-center md:text-center  lg:text-sm ">Tudo posso naquele que me fortalece - <br/><strong>Filipenses 4:13</strong></p>
    
     
    </main>
    <section className="mx-auto bg-gradient-to-b from-green-200  to-green-400">
      
    
    </section>
  <AboutDev />
     </>
  )
}

export default GameOverBiblia