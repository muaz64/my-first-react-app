
import './App.css'
import Footer from './components/Footer/Footer'
import HeroArea from './components/HeroArea/HeroArea'
import MainSection from './components/MainSection/MainSection'
import Navigation from './components/Navigation/Navigation'
import Products from './components/Products/Products'
import Services from './components/Services/Services'

function App() {

  return (
   <div>
     <Navigation></Navigation>
     <HeroArea></HeroArea>
     <MainSection>
      <Products></Products>
     </MainSection>
     <Footer></Footer>
     
   </div>
  )
}

export default App
