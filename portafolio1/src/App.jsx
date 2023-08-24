import { Clients } from "./components/Clients"
import { Header } from "./components/Header"
import { Reviews } from "./components/Reviews"
import { Works } from "./components/Works"
import { Hero } from "./components/hero"


function App() {

  return (
    <div>
      <Header/>
      <Hero/>
      <Clients/>
      <Works/>
      <Reviews/>
    </div>
  )
}

export default App
