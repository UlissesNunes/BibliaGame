import SecaoModule from '/componets/SecaoModule'
import Adicaomodule from '/componets/Adicaomodule'

import Header from '/componets/Header'

import { useState } from 'react'

import './App.css'

function App() {
 
const [data , setData] = useState(10)

console.log(data)

// O useState é um Hook do React que permite adicionar o estado a um componente funcional.

const carro = "Fusca 1970"



//retorna um array com dois elementos: o valor atual do estado e uma função para atual
const [lista2] = useState([{id: 1, nome: "João da Silva" , age: 29}, {id: 2, nome: "Maurício alencar" , age: 34}, {id: 3, nome: "Joselino barbosa" , age: 45}])


const [cont, setCont] = useState(0)  
const click = () => {
  setCont (prev => prev + 1);
  setCont (prev => prev + 1);
}
 
 
  return (
    <>
   <Header />
       <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold text-blue-600">DIFICINNN MAS TAILWIND COM REACT É REALIDADEEEEE!</h1> </div>
      
   <div>
    <p className='p-2 m-3 bg-slate-300 text-fuchsia-950'>Essa é a variável inicial <strong className='ml-4 '>{data}</strong></p>
    
    <button className='bg-gray-900 text-neutral-300 p-2 mb-14 min-w-max h-12'  onClick={() => setData(data + 1)}> Alterar por useState</button>
   </div>

   

   <ul>
    {lista2.map((item) => (
      <li key={item.id} className='bg-slate-400 flex justify-center items-center p-2 m-3 text-fuchsia-950'>
        {item.nome} - {item.age}</li>
    ))}
   </ul>
 {/* VDOM OU VIRTUAL DOCUMENT OBJECT MODEL */}
   <p>{cont}</p>
   <button onClick={click}>CLIQUE </button>






<p>Como é o seu carro:<strong>  É um {carro}</strong>  </p>







    </>
  )
}

export default App
