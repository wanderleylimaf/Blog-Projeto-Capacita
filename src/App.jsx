import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Page from './Components/Page'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Noticia from './Components/Noticias'
import { Sobre } from './Components/Sobre'
import Footer from './Components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Hero/>
     <Noticia/>
     <Sobre/>
     <Footer/>
    </>
  )
}

export default App
