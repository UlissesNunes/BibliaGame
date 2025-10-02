
//css
import './GameBibliaGlobal.css'
//data
import {DataBibliaList} from "./data/DataBiblia"
// react hooks
import { useState, useEffect, useCallback,} from 'react'
//pages
import HeaderGame from './pages/HeaderGame'
import FooterGame from './pages/FooterGame'
import StartScreean from './pages/StartScreean'
import GameOn from './pages/GameOn'
import GameOverBiblia from './pages/GameOverBiblia'

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]

function GameBiblia() {
  const [gameStage, setGameStage] = useState(stages[0])
  const [dataBiblia] = useState(DataBibliaList)
  console.log(dataBiblia)

//pickdlist = palavra
//pickdCategory = categoria
//letters = letras da palavra desestruturada em array
  const [pickedList, setPickedList] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([]) 

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(10)
  const [score, setScore] = useState(0)

// function que busca a categoria e a palavra aleatoria 
  const pickedBibliandcategory = useCallback(  () => {
    const categories = Object.keys(dataBiblia)
       const category = categories[Math.floor(Math.random() * categories.length)]
    console.log(category)
  // function que desestrutura a palavra em letras
  
  const letterPrincipal = dataBiblia[category][Math.floor(Math.random() * dataBiblia[category].length)]
console.log(letterPrincipal)

    


  console.log(letterPrincipal, category)
  
    let letterDestructured = letterPrincipal.split("")
    letterDestructured = letterDestructured.map((l) => l.toLowerCase())
    console.log(letterDestructured)

    setPickedList( letterPrincipal) 
    setPickedCategory( category)
    setLetters( letterDestructured)
}
, [dataBiblia]);


const StartGameOn = () => {

  pickedBibliandcategory();

  setGuessedLetters([])
  setWrongLetters([])
  setGuesses(10)
  setScore(0)

    setGameStage(stages[1])
  }


const LetterVerify = (letter) => {
  // Se a 'letter' não for uma letra, ele ignora.
  if (typeof letter !== 'string' || letter.length !== 1) {
      return;
  }
  
  const normalizedLetter = letter.toLowerCase()

  //verifica se a letra já foi utilizada
  if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
    return
  }

//coloca a letra na lista de certas ou erradas
  if(letters.includes(normalizedLetter)){
    setGuessedLetters((actualGuessedLetters) => [
      ...actualGuessedLetters, normalizedLetter])
    setScore((actualScore) => actualScore + 100)
  } else {
    setWrongLetters((actualWrongLetters) => [
      ...actualWrongLetters, normalizedLetter])
    setGuesses((actualGuesses) => actualGuesses - 1)
  }
  }
  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }
   useEffect(() => {
    if (guesses <= 0) {
      clearLetterStates();
      // Transiciona para a tela de 'end' (game over)
      setGameStage(stages[2]); 
    }
  }, [guesses]);


  useEffect(() => {
    const LettersÚnicos = [...new Set(letters)]
    //condição de vitoria
    if(guessedLetters.length === LettersÚnicos.length){
      //adiciona pontos
      setScore((actualScore) => actualScore += 100)
      //reinicia o jogo com uma nova palavra
      pickedBibliandcategory()
      clearLetterStates()
    }
  }, [guessedLetters, letters, pickedList , pickedBibliandcategory ])



  
    
  const retryGame = () => {

    setScore(0)
    setGuesses(10)
    setGameStage(stages[0])
  }

  return (
    <>
    <HeaderGame />
 { gameStage.name === "start" && <StartScreean StartGameOn={StartGameOn}/>}
 
  { gameStage.name === "game" && 
  <GameOn
  LetterVerify={LetterVerify} 
  pickedList={pickedList}
   pickedCategory={pickedCategory} 
   letters={letters}
   wrongLetters={wrongLetters}
   guessedLetters={guessedLetters}
    guesses={guesses} 
    score={score}
    />}

   { gameStage.name === "end" && <GameOverBiblia retryGame={retryGame} score={score} />}

    <FooterGame />

   

    </>
  )
}

  export default GameBiblia


