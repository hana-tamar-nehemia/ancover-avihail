import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Process } from './components/sections/Process'
import { Products } from './components/sections/Products'
import { Works } from './components/sections/Works'
import { Risk } from './components/sections/Risk'
import { Reviews } from './components/sections/Reviews'
import { CtaBanner } from './components/sections/CtaBanner'
import './styles/globals.css'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Process />
        <Products />
        <Works />
        <Risk />
        <Reviews />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}

export default App
