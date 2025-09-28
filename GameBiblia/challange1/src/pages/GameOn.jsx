
function GameOn({LetterVerify}) {
  return (
    <>
    <main className="flex flex-col items-center justify-center h-screen bg-green-50">
      <h1 className=" flex text-slate-600 text-2xl">GAME</h1>
      <form >
        <input type="text" name="letters" required placeholder="Qual palavra?" />
      </form>
      <button className=" bg-green-300 p-2 rounded-md " onClick={LetterVerify}>Jogar</button>
    </main>

     </>
  )
}

export default GameOn