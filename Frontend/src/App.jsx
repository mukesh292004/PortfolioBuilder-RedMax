
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Portfolio from './Pages/Portfolio'


function App() {
  return (
   <div className=' flex flex-col h-screen'>
    <Router>
      <Routes>
      
      <Route path='/*' element={<Portfolio/>}/>
     
         
        
       
    
      </Routes>

    </Router>
   

   
   
   </div>

  )
}

export default App
