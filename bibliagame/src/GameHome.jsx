
import Header from './pages/header.jsx'
import Footer from './pages/footer.jsx'
import './GameGlobal.css'

function GameGlobal() {
 

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          {/* Conteúdo principal da página */}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default GameGlobal
