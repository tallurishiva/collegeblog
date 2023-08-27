import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Login from './Login';
import Signin from './Signin';
import Cat from './Cat';
import Footer from './Footer';
import Compose from './Compose'
import Searchsol from './Searchsol';
import Profile from './Profile';
import Maincont from './Maincont';
import Error from './Error';
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
            <Route path="/category/:item" element={<Cat/>}/>
            <Route path="/Compose" element={<Compose/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
          <Footer/>
         
        </Router>
        
      </div>
    );
  }