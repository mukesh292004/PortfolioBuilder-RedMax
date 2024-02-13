import { Route, Router, Routes } from "react-router-dom"
import Navigationbar from "./Navigationbar"
import Footer from "./Footer"
import Home from "./Home"
import About from "./About"

import UserForm from "../portfolio/UserForm"
import UserData from "./UserData"
import SigninModel from "./SigninModel"
import Login from "./Login"


const Intermidiate = () => {
  return (
    <>
      
        <Navigationbar/>
        <Footer/>
        <Routes>
        
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='UserForm' element={<UserForm/>}/>
         <Route path='/UserData' element={<UserData/>}/> 
         <Route path='/Signin' element={<SigninModel/>}/> 
         <Route path='/Login' element={<Login/>}/> 
        
        </Routes>
        
        
    </>
  )
}

export default Intermidiate