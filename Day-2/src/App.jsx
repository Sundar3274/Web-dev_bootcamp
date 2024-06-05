import Header from "../src/header.jsx"
import './App.css'
import Contrender from "./contrender.jsx"
import Render from "./render.jsx"
import State from "./state.jsx"


function App() {
  return (
  <div>
      <Header player = "virat kohli"  country='india' title='king kohli' />
      <Header player = "abd"  country='south africa' title='mr.360'/>
      <Contrender/>
      <Render/>
      <State/>
  </div>
      
     
  )
}

export default App
