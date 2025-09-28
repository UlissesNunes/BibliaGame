
//css
import './GameBibliaGlobal.css'
//data
import {DataBibliaList} from "./data/DataBiblia"
// react hooks
import { useState } from 'react'
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
 
  const StartGameOn = () => {
    setGameStage(stages[1])
  }

  const LetterVerify = () => {
    setGameStage(stages[2])
  }

  const retryGame = () => {
    setGameStage(stages[0])
  }
  return (
    <>
    <HeaderGame />
 { gameStage.name === "start" && <StartScreean StartGameOn={StartGameOn}/>}
 
  { gameStage.name === "game" && <GameOn LetterVerify={LetterVerify} />}

   { gameStage.name === "end" && <GameOverBiblia retryGame={retryGame} />}

    <FooterGame />

   

    </>
  )
}


export default GameBiblia
