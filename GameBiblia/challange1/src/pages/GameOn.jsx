import { useState, useRef } from "react"
import { FaTrophy } from 'react-icons/fa';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { FaComments } from 'react-icons/fa';  
function GameOn({LetterVerify,
   pickedCategory, letters, wrongLetters, guessedLetters, guesses, score, highScore, skipQuestion, notifyGame,  })

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
      <span className=" text-green-900 text-sm w-full flex justify-center mb-1 p-3 font-semibold lg:text-lg lg:p-4"><p>Pontuação: </p> <strong className="ml-1" > {score}</strong> <span className="flex ml-4 text-lg text-green-400 items-center cursor-pointer" onClick={notifyGame}><FaComments/></span></span>
       <div className="
            mt-0 mb-0 flex items-center space-x-2 
            bg-green-900 
            text-yellow-500 
            border border-green-950 
            px-3 py-1
            rounded-full 
            shadow-lg 
            text-xs font-semibold
        ">
            
            {/* Ícone do Troféu */}
            <FaTrophy className="text-base" />
            
            {/* Texto do Recorde */}
            <span>Recorde: {highScore}</span>
        </div>
        
      <h1 className=" flex text-green-900 text-4xl p-2 mb-3 font-bold lg:text-5xl lg:p-3">Quem sou eu?</h1>
      <h3 className="flex text-green-950 text-sm mb-3 font-light lg:text-lg lg:p-2 "
      >Dica sobre a palavra:<span className="text-green-600  pl-1 lowercase font-normal lg:text-lg lg:pl-"><strong className="font-sans">{pickedCategory }</strong></span></h3>
      <p className="p-2 text-green-900 lg:text-xl lg:p-2">Você tem <strong>{guesses}</strong> tentativa(s)</p>
      <section className="flex flex-wrap text-uppercase text-3xl mb-3 gap-2 bg-gradient-to-b from-white  to-green-50 border-4 border-green-900 p-4 rounded-lg lg:gap-4 lg:mb-0 lg:justify-center lg:rounded-xl 2xl:text-3xl 2xl:gap-6 2xl:p-1 2xl:mb-1 2xl:border-12 2xl:rounded-2xl 
      "> 
       {letters.map((letter, i) => (
        guessedLetters.includes(letter) ? (
          <span key={i} className="flex justify-center items-center w-10 h-10 font-mono text-xl 
                    border-4 border-green-950 font-bold uppercase bg-white lg:text-4xl lg:w-14 lg:h-14"><strong>{letter}</strong> </span>
        ) : (
          <span key={i} className=" flex justify-center items-center w-10 h-10 font-mono text-xl 
                    border-4 border-green-950 font-bold uppercase bg-white lg:text-4xl lg:w-14 lg:h-14"> </span>
        )
       ))} 
      </section>

    <section className=" p-2">
  <p className="text-green-900 justify-center flex font-light w-auto text-sm mb-5  lg:text-base lg:p-2">
   Adicione uma letra na caixa:
  </p>

  <div className="flex justify-center gap-2 p-1">
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
    <button className="bg-green-300 rounded-md px-3 py-1 text-green-900 font-extrabold hover:bg-green-400 transition duration-300" onClick={skipQuestion}> <FaAngleDoubleRight className="text-green-800"/> </button>
    
    </form>

  </div>
  <div className="  ">
    <p className="text-green-900 font-normal flex justify-center p-4 mt-0 lg:text-base  lg:p-3">letras já utilizadas:</p>
    {wrongLetters.map((letter, i) => (
      <span key={i} className="text-red-500  text-base align-middle font-bold p-1 ">{letter}, </span>
  
  ))}
   </div>

</section>

    </main>
     </>
  )
}

export default GameOn