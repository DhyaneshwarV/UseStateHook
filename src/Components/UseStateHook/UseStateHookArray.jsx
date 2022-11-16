import React,{useState} from 'react'
const UseStateHookArray = () => {
    const [Items, setItems] = useState([]);
    const removeItems=()=>{
      setItems(prevItems=>{
        const result=[...Items]
        result.splice(Items.indexOf(prevItems),1)
        return result
      })
      
    }
  return (
    <div>
      <button onClick={()=>{setItems([...Items,{id:Items.length,value: Math.floor(Math.random()*10)+1}])}}>AddItems</button>
      <button onClick={removeItems}>RemoveItems</button>
      {console.log(Items)}
      <ul>
        {Items && Items.map(item=>(
            <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  )
}

export default UseStateHookArray
