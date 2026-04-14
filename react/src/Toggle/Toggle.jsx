import { useState } from "react";

function Toggle() {  
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

export default Toggle