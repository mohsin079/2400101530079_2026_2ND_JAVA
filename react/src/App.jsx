import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const name="Mohsin";
  let x=20;
  let y=10;
  function Name(){
    return "Mohsin";
    }

  function sum(a,b){
    return a+b;
  }
  return (
    <div>
      <h1>Project run</h1>
      <h3>Name is {name}</h3>
      <h3>{x}</h3>
      <h4>{Name()}</h4>
      <h2>parametrized {sum(10,40)}</h2>
    </div>
  )
}


export default App
