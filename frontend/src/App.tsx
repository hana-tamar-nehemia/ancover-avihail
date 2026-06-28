import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Process } from './components/sections/Process'
import { Products } from './components/sections/Products'
import { Risk } from './components/sections/Risk'
import { Reviews } from './components/sections/Reviews'
import { CtaBanner } from './components/sections/CtaBanner'
import { WhatsAppFloat } from './components/ui/WhatsAppFloat'
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
        <Risk />
        <Reviews />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
