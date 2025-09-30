import { useState, useRef } from "react"
function GameOn({LetterVerify,
  pickedList, pickedCategory, letters, wrongLetters, guessedLetters, guesses, score
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
      <span className=" text-green-950 text-sm mb-10 p-3">Pontuação: {score}</span>
      <h1 className=" flex text-slate-600 text-2xl p-2">Quem sou eu?</h1>
      <h3 className="flex text-green-950 text-sm mb-4 italic "
      >Dica sobre a palavra:<span className="text-green-700 pl-3">{pickedCategory }</span></h3>
      <p>Você ainda tem {guesses} tentativa(s)</p>
      <section className="flex flex-wrap text-uppercase text-3xl mb-4 gap-2 bg-gradient-to-b from-white  to-green-50 border-4 border-green-900 p-8 rounded-lg 
      ">
       {letters.map((letter, i) => (
        guessedLetters.includes(letter) ? (
          <span key={i} className="border-4 border-green-900 w-10 h-14 text-center text-black">{letter} </span>
        ) : (
          <span key={i} className="border-4 border-green-900 w-10 text-center"> </span>
        )
       ))} 
      </section>

    <section className=" mb-40 p-4">
  <p className="text-green-900 font-mono w-auto text-sm mb-4 font-bold">
    Tente acertar uma letra da palavra:
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
      className="border border-green-300 rounded-md px-2 w-20 text-black"
    />
    <button
      className="bg-green-300 rounded-md px-5 py-2 text-green-900 font-bold hover:bg-green-400 transition duration-300"
      onClick={LetterVerify}
    >
      Jogar!
    </button>
    </form>
  </div>
  <p>letras já utilizadas:</p>
  {wrongLetters.map((letter, i) => (
    <span key={i} className="text-red-600 text-xl mr-2">{letter}, </span>
  ))}
   <img src="src/assets/FUNDOVERDE.png" alt="" className="h-54 w-72  p-7"/>

</section>

    </main>
     </>
  )
}

export default GameOn