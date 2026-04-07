import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const [count, setCount] = useState(0)

function callfun()
        {
            alert("Function call");
        }
function apple()
        {
            alert("Click on Apple button");
        }
function banana()
        {
            alert("Click on Banana button");
        }

let data="Demo"
function update()
{
  data="Example"
  alert(data);
}        

  return(
    <div>
      <>
        <h1>state in react</h1>
        <h1>{data}</h1>
        <button onClick={update}>click to change value</button>

      </>
       <button onClick={callfun}> OK </button><br></br>
      <button onClick={apple}> Apple </button><br></br>
      <button onClick={banana}> Banana</button>
    </div>
  )
}


export default App
