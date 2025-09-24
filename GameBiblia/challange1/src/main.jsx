import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GameBiblia from './GameBiblia.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameBiblia />
  </StrictMode>,
)
