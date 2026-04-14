import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)     
  const [data ,setdata] = useState("OFF")
  function fun(){
    setdata("ON");
  }
  return(
    <>
      <h1>State of variable</h1>
      <h1>{data}</h1>
      <button onClick={fun}>Toggle</button>
    </>
    

  )
}


export default App
