import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from "./Components/Home/component"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/:Uid" element={ <Home/> } />
      </Routes>
    </div>
  )
}

export default App
