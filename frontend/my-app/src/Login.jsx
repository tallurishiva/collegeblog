import React from "react";
import image from "./andrew-neel-cckf4TsHAuw-unsplash.jpg";
import './login.css';
import Cookies from 'js-cookie';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { updateuid } from "./blogSlice";
export default function Login(){
  //const { userLoggedIn, setUserLoggedIn } = React.useContext(AppContext);
    //console.log("login--",userLoggedIn);
    var [err,seterr]=React.useState(false);
    var [name,setname]=React.useState("");
    const sessionCookie = Cookies.get('uid');
    console.log("in login-",sessionCookie);
    // var [posted,setposted]=React.useState(false);
     var [password,setpassword]=React.useState("");
     //var [err,seterr]=React.useState(false);
     const nav=useNavigate();
     const dispatch = useDispatch();
     async function sud(e){
         //preventdefault()
         //setposted(true);
         e.preventDefault();
         try {
           var res= await axios.post("http://localhost:3001/login", { userid: name, password: password });
           console.log(res.data);
           if(res.data==="success"){
             //seteid(name);
            //setUserLoggedIn(name);
            Cookies.set('uid', name, { expires: 7 });
            dispatch(updateuid(name));
            nav("/");
         }
         else{
             seterr(true);
         }
         } catch (error) {
           console.error("Error occurred while sending the request:", error);
         }
         //console.log("hlo");
         //console.log("name:"+name+"  password:"+password);
     }
    return (
        <div className="login">
            <div className="login-container">
      <h2 className="login-header">Login</h2>
      <form className="login-form" onSubmit={sud}>
    <input type="text" placeholder="username" className="login-input" autoComplete="none" value={name} onChange={(e)=>setname(e.target.value)} />
        <input type="password" placeholder="Password" className="login-input" value={password} onChange={(e)=>setpassword(e.target.value)} />
        <div className="login-forgot">
          <a href="#" className="login-forgot-link">Forgot password?</a>
        </div>
        {err && <em>userName and password doesn't match</em>}
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
    <div className="imag"><img src={image} className="img" style={{height:715,width:800}}></img></div>
        </div>
    );
}