

function StartScreean({StartGameOn}) {
  return (
<>
  <main className="flex flex-col items-center justify-start h-screen bg-green-50">
    <h1 className="pt-6 pl-2 pr-2 text-center text-sm font-bold text-green-950">
      DESAFIO: Garanta a maior pontuação no jogo, são perguntas bíblicas onde você deverá preencher o nome de acordo com a dica fornecida.
    </h1>
    <button onClick={StartGameOn} className="mt-6 w-24 bg-green-800 text-green-50 hover:text-green-100 py-2 px-4 rounded-md cursor-pointer hover:bg-green-900 transition duration-300 font-bold">
      Iniciar
    </button>

    <img src="src/assets/FUNDOVERDE.png" alt="" className="w-auto mt-10 p-4"/>

    <p className="text-green-950 w-34 p-5 text-sm">Tudo posso naquele que me fortalece - <br /><strong>Filipenses 4:13</strong></p>
   
   
  </main>
</> 
  )
}

export default StartScreean