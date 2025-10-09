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

// FORA DO COMPONENTE
const RECORD_KEY = 'highScoreDoMeuJogo';

// Função para carregar o recorde de forma segura
const loadHighScore = () => {
  try {
    const storedScore = localStorage.getItem(RECORD_KEY);
    return storedScore ? parseInt(storedScore, 10) : 0;
  } catch (error) {
    console.error("Erro ao carregar o recorde:", error);
    return 0;
  }
}; 

function GameBiblia() {
  const [gameStage, setGameStage] = useState(stages[0])
  const [dataBiblia] = useState(DataBibliaList)


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
const [highScore, setHighScore] = useState(loadHighScore)
// function que busca a categoria e a palavra aleatoria 
  const pickedBibliandcategory = useCallback(  () => {
    const categories = Object.keys(dataBiblia)
       const category = categories[Math.floor(Math.random() * categories.length)]
  // function que desestrutura a palavra em letras
  
  const letterPrincipal = dataBiblia[category][Math.floor(Math.random() * dataBiblia[category].length)]
  
    let letterDestructured = letterPrincipal.split("")
    letterDestructured = letterDestructured.map((l) => l.toLowerCase())
    

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

  const skipQuestion = () => {
    // 1. Punição: Reduz palpites (Exemplo: 2 palpites a menos por pular)
    setGuesses((actualGuesses) => actualGuesses - 1); 
    
    // 2. Limpa as letras da tela (erro e acerto)
    clearLetterStates(); 
    
    // 3. Carrega a próxima palavra e categoria
    pickedBibliandcategory(); 
    
    window.alert("Você pulou a pergunta! Cuidado, você perdeu 1 tentativa.")
};

const notifyGame = () => {
  window.alert("No Jogo Bíblico, você pode ganhar pontos acertando as palavras ou perder pontos errando a mesma. Você conseguirá Pular algumas perguntas, porém isso lhe custará 1 tentativa futura.");
}

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
    const finalScore = score; 
    if (finalScore > highScore) {
      try {
        // Salva no localStorage (Persistência)
        localStorage.setItem(RECORD_KEY, finalScore.toString());
        
        // Atualiza o estado do React (Exibição)
        setHighScore(finalScore);
        
      } catch (error) {
        console.error("Erro ao salvar o recorde:", error);
      }
    }
    
    setScore(0)        
    setGuesses(10)     
    setGameStage(stages[0])
  }
  return (
    <>
    <HeaderGame />
 { gameStage.name === "start" && <StartScreean 
 StartGameOn={StartGameOn}
 notifyGame={notifyGame}

 />}
 
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
    highScore={highScore}
    skipQuestion={skipQuestion}
   notifyGame={notifyGame}
   
 
    />}

   { gameStage.name === "end" && <GameOverBiblia retryGame={retryGame} score={score} highScore={highScore} />}

    <FooterGame />

    </>
  )
}

  export default GameBiblia
