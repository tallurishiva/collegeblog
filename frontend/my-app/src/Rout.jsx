import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Login from './Login';
import Signin from './Signin';
//import AppContext,{ useGc } from './Contex';
import Footer from './Footer';
import Compose from './Compose'
import Profile from './Profile';
import { AppProvider } from './AppContext';
export default function Rout() {
  //const { userLoggedIn, toggleUserLoggedIn } = React.useContext(AppContext);
    //const [eid,seteid]=useGc();
    //console.log("eid=",userLoggedIn);
    return (
      <div>
        <Router>
        <AppProvider>
          <Nav/>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Profile" element={<Profile/>} />
            <Route path="/Signin" element={<Signin/>}/>
            <Route path="/Compose" element={<Compose/>}/>
          </Routes>
          <Footer/>
          </AppProvider>
        </Router>
      </div>
    );
  }