import React,{useState} from 'react'
const UseStateHookObject = () => {
    const [name, setName] = useState({firstname:" ",lastname:" "});
  return (
    <div>
      <h1>Targeting Input</h1>
      <input type="text" placeholder='Enter your firstname' value ={name.firstname} onChange={(event)=>setName({...name,firstname:event.target.value})} />
      <input type="text" placeholder='Enter your lastname' value={name.lastname}onChange={(event)=>setName({...name,lastname:event.target.value})} />
      <h1>Your first name is {name.firstname}</h1>
      <h1>Your last name is {name.lastname}</h1>
    </div>
  )
}

export default UseStateHookObject
