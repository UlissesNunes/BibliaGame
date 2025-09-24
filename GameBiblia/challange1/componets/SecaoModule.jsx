import City from '/src/assets/react.svg';

function SecaoModule() {
  return (
    <>  
     <header className="bg-slate-700 w-screen h-96 "  >
        <h1 className="text-red-500">Test Software</h1>
        <nav>
            <ul>

            </ul>

        </nav>
        </header>
        <main className="bg-slate-300 text-indigo-900 w-screen h-96">
            <h2 className="text-center text-2xl font-bold">Bem-vindo ao nosso site!</h2>
            <p className="text-center">Aqui você encontrará uma variedade de produtos e serviços.</p>
            <a href="https://github.com/UlissesNunes"> LINK GITHUB</a>
            </main>

         

            <div className='flex items-center justify-center w-64 h-64 bg-black'>
               <p>PRECISAMOS FALAR DE REACT.JS</p>
               <img className='w-24 h-auto' src={City} alt="Ícone" />
            </div>
    </>
   
  )
}

export default SecaoModule