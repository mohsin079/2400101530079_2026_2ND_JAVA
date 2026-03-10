import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Demo2 } from './Component/appliexportcom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Mohsin</h1>
 
   <Emp></Emp>
   <Branch></Branch>
   <Demo2></Demo2>
    </div>
  )
}

function Emp(){
  return(
    <h2>Mohsin Mahfooz</h2>
  )
}

function Branch(){
  return(
    <h3>AIML</h3>
  )
}

export default App
