import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ScratchGame } from './components/ScratchGame'

function App() {

  return (
    <>
      <Header />
      <main>
        <ScratchGame />
      </main>
    <Footer />
    </>
  )
}

export default App
