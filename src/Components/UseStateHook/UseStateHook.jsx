import React,{useState} from 'react'
import "./UseStateHook.module.css"
const UseStateHook = () => {
    const [Increment, setIncrement] = useState(0);
  return (
  <div>
    <h1>Increment and Decrement</h1>
    <button onClick={()=>setIncrement(prevState=>prevState+1)}>Increment </button>
    <p>{Increment}</p>
    <button onClick={()=>setIncrement(prevState=>prevState-1)}>Decrement </button>
  </div>
  )
}

export default UseStateHook
