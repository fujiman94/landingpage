import { Clients } from "./components/Clients"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Reviews } from "./components/Reviews"
import { Services } from "./components/Services"
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
      <Services/>
      <Footer/>
    </div>
  )
}

export default App
