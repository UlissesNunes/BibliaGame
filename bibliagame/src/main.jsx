import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GameHome from './GameHome.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameHome />
  </StrictMode>,
)
