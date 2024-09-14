
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'



function App() {
   

    
  return (
   <div>
    <h1>Hello guys</h1>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
  
   </div>
  )
}

export default App
