import { useState, useRef } from "react"
function GameOn({LetterVerify,
   pickedCategory, letters, wrongLetters, guessedLetters, guesses, score
})

{ 
  const [letter, setLetter] = useState("")

  const letterInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    LetterVerify(letter)
    setLetter("")

    letterInputRef.current.focus()
  }
  return (
    <>
    <main className="flex flex-col items-center h-screen bg-gradient-to-b from-green-50  to-green-200">
      <span className=" text-green-900 text-sm mb-10 p-3 font-medium">Pontuação: <strong>{score}</strong></span>
      <h1 className=" flex text-green-900 text-4xl p-2 mb-3 font-bold">Quem sou eu?</h1>
      <h3 className="flex text-green-950 text-sm mb-4 italic "
      >Dica sobre a palavra:<span className="text-green-700 pl-1"><strong className="font-sans">{pickedCategory }</strong></span></h3>
      <p className="p-2 text-green-900 ">Você tem <strong>{guesses}</strong> tentativa(s)</p>
      <section className="flex flex-wrap text-uppercase text-3xl mb-3 gap-2 bg-gradient-to-b from-white  to-green-50 border-4 border-green-900 p-8 rounded-lg 
      ">
       {letters.map((letter, i) => (
        guessedLetters.includes(letter) ? (
          <span key={i} className="flex justify-center items-center w-10 h-10 font-mono text-xl 
                    border-4 border-green-950 font-bold uppercase bg-white"><strong>{letter}</strong> </span>
        ) : (
          <span key={i} className=" flex justify-center items-center w-10 h-10 font-mono text-xl 
                    border-4 border-green-950 font-bold uppercase bg-white"> </span>
        )
       ))} 
      </section>

    <section className=" p-2">
  <p className="text-green-900 font-mono w-auto text-sm mb-2 font-bold">
   Adicione uma letra na caixa:
  </p>

  <div className="flex justify-center gap-2">
    <form onSubmit={handleSubmit} className="flex gap-2">
    <input
      type="text"
      name="letters"
      required
      maxLength="1"
      onChange={(e) => setLetter(e.target.value)}
      value={letter}
      ref={letterInputRef}
      className=" rounded-md text-center font-bold w-20 text-green-950"
    />
    <button
      className="bg-green-300 rounded-md px-5 py-2 text-green-900 font-bold hover:bg-green-400 transition duration-300"
      
    >
      Jogar!
    </button>
    </form>
  </div>
  <p className="text-green-900 flex justify-center p-3 mt--3">letras já utilizadas :</p>
  {wrongLetters.map((letter, i) => (
    <span key={i} className="text-red-600 text-xl align-middle font-bold p-1 ">{letter}, </span>
  ))}
   

</section>

    </main>
     </>
  )
}

export default GameOn