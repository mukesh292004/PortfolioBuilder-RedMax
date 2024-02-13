import About from './Pages/About'
import Home from './Pages/Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Portfolio from './Pages/Portfolio'
import Intermidiate from './Pages/Intermidiate'
import Skills from './portfolio/skills';
import Projects from './portfolio/Projects';
import Contact from './portfolio/Contact';
import Abouts from './portfolio/About';
import UserForm from './portfolio/UserForm'
import Dummy from './portfolio/Dummy'



function App() {
  return (
   <div className=' flex flex-col h-screen'>
    <Router>
      <Routes>
      
      <Route path='/*' element={<Intermidiate/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
         
        
       
    
      </Routes>

    </Router>
   

   
   
   </div>

  )
}

export default App
