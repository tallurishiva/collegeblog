import React from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import image from "./andrew-neel-cckf4TsHAuw-unsplash.jpg";
import './Signin.css';

export default function Signin(){
    const nav=useNavigate();
    var [err,seterr]=React.useState(false);
    var [uerr,setuerr]=React.useState(false);
    var [name,setname]=React.useState("");
    var [email,setemail]=React.useState("");
    var [password,setpassword]=React.useState("");
    var [number,setnumber]=React.useState("");
    async function sud(event){
      event.preventDefault();
      try{
      var find= await axios.post("http://localhost:3001/signup",{name:name,email:email,password:password,number:number})
      }//var data=await find.data();}
      catch(error){
          console.error();
      }
      console.log("find:"+find.data);
      if(find.data=="success"){
        nav("/Login");
    }
      if(find.data=="uexists"){setuerr(true)};
      if(find.data=="exists"){seterr(true)};
  }
    return (
        <div className="login">
        <div className="signin-container">
      <h2 className="signin-header">Sign In</h2>
      <form className="signin-form" onSubmit={sud}>
      <input type="text" placeholder="Name" value={name} className="signin-input" onChange={(e)=>setname(e.target.value)} />
        <input type="email" placeholder="Email"value={email} className="signin-input" onChange={(e)=>setemail(e.target.value)} />
        <input type="password" placeholder="Password"value={password} className="signin-input" onChange={(e)=>setpassword(e.target.value)} />
        <input type="tel" placeholder="Phone Number" value={number} className="signin-input" onChange={(e)=>setnumber(e.target.value)}/>
        {uerr && <em>username is already in use</em>}
        {err && <em>email already in existance</em>}
        <button type="submit" className="signin-button">Sign In</button>
      </form>
    </div>
            <div className="imag"><img src={image} className="img" style={{height:715,width:800}}></img></div>
        </div>
    );
}