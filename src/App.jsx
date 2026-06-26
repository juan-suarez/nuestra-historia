import './App.css'
import Hero from './sections/Hero'
import Inicio from './sections/Inicio'
import Leningrado from './sections/Leningrado'
import Nala from './sections/Nala'
import Roma from './sections/Roma'
import Navidad from './sections/Navidad'
import Europa from './sections/Europa'
import Presente from './sections/Presente'
import Futuro from './sections/Futuro'
import Propuesta from './sections/Propuesta'
import Divider from './components/Divider'

export default function App() {
  return (
    <main>
      <Hero />
      <Inicio />
      <Divider />
      <Leningrado />
      <Divider variant="flame" />
      <Nala />
      <Divider />
      <Roma />
      <Divider variant="flame" />
      <Navidad />
      <Divider />
      <Europa />
      <Divider variant="flame" />
      <Presente />
      <Divider />
      <Futuro />
      <Propuesta />
    </main>
  )
}
