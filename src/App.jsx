
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App() {
const [count, setCount] = useState(0);

  useEffect( () =>{
    alert('Welcome')
  } ,[])

  const updateCounter = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  useEffect( () => {
    alert('Changed');
  }, [count])
    
  return (
   <div>
     <h1>Steps: {count} </h1>
    <button onClick={updateCounter}>Steps</button>

     
   </div>
  )
}

export default App
