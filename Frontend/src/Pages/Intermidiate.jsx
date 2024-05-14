import { Route, Routes } from "react-router-dom";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import UserForm from "../portfolio/UserForm";
import UserData from "./UserData";
import SigninModel from "./SigninModel";
import Login from "./Login";
import { UseAuthContext } from "../context/useAuthcontext";

const Intermidiate = () => {
  const { user } = UseAuthContext();

  return (
    <>
      <Navigationbar />
      <Footer />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/UserData" element={<UserData />} />
        <Route path="/Signin" element={<SigninModel />} />
        <Route path="/Login" element={<Login />} />
         <Route path="/userform" element={user?<UserForm />:<Login />} />
      </Routes>
    </>
  );
};

export default Intermidiate;
