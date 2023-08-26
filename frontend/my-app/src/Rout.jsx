import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Login from './Login';
import Signin from './Signin';
import Footer from './Footer';
import Compose from './Compose'
import Searchsol from './Searchsol';
import Profile from './Profile';
import Maincont from './Maincont';
export default function Rout(){
    return (
      <div> 
        <Router>
          <Nav/>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Profile" element={<Profile/>} />
            <Route path="/Signin" element={<Signin/>}/>
            <Route path="/Maincont/:id" element={<Maincont />}/>
            <Route path="/Search/:item" element={<Searchsol/>}/>
            <Route path="/Compose" element={<Compose/>}/>
          </Routes>
          <Footer/>
         
        </Router>
        
      </div>
    );
  }