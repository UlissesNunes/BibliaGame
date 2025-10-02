import AboutDev from "./AboutDev"



function GameOverBiblia({retryGame, score}) {
  return (
      <>
    <main className="flex flex-col items-center h-screen bg-gradient-to-b from-green-50  to-green-200 ">
        <h1 className="flex justify-center p-5 text-3xl text-green-900">Fim de Jogo</h1>
        <p className="text-center text-sm text-green-800">Leia mais a Bíblia!</p>
        <h2 className="text-center text-green-900 text-2xl p-2 m-2 ">Sua pontuação foi: <strong>{score}</strong></h2>
        <button onClick={retryGame} className=" flex justify-center text-center mt-2 bg-green-300 rounded-md px-5 py-2 text-green-900 font-bold hover:bg-green-400 transition duration-300">Jogar Novamente!</button>

        <img src="src/assets/FUNDOVERDE.png" alt="" className="h-52 w-full  md:max-w-xl md:h-64 lg:max-w-1xl xl:max-w-3xl xl:h-2/5 mb-1  p-1 mt-10"/>
       

     
    </main>
    <section className=" w-full   mx-auto bg-gradient-to-b from-green-200  to-green-300">
      <AboutDev />
    </section>

     </>
  )
}

export default GameOverBiblia