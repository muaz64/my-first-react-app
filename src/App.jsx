
import { useEffect , useState } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation';


function App() {
   
  const [allData, setAllData] = useState([]);


  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setAllData((data)))
  }, [])
    
  return (
   <div>
    <Navigation></Navigation>
     <h1> Data: {allData.length} </h1>
     {
      allData.map(singleData => <p> {singleData.name} </p>)
     }
    

     
   </div>
  )
}

export default App
