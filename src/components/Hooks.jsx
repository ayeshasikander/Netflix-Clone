// import React from 'react';
import { useState,React } from 'react';
const Hooks = () => {
  const [color, setColor] = useState("red");
    const [show,setShow]=useState(0);
    function updateShow(){
        setShow(show+1)
    }

  return (
    <div>
      <h1>hooks in react js {color}</h1>

      <button type='button' onClick={()=>setColor("blue")}>blue</button>
      <h1> {show}</h1>
      <button onClick={updateShow}>update me</button>
    </div>
  )
}

export default Hooks
