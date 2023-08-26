import React from 'react';
import { useNavigate } from 'react-router-dom';
import {FcSearch} from "react-icons/fc";
import {VscAccount} from "react-icons/vsc";
import Cookies from 'js-cookie';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import './nav.css';
import { updateuid } from "./blogSlice";
const Nav = (props) =>{
    const userid=useSelector(store=>store.blog.userid);
    const [search,setsearch]=React.useState("");
    var nav=useNavigate();
    console.log(props);
    const dispatch = useDispatch();
    React.useEffect(()=>{
      const sessionCookie = Cookies.get('uid');
      console.log("in nav-",sessionCookie);
      if(sessionCookie){
      dispatch(updateuid(sessionCookie));}
    },[])
    //const userLoggedIn="srk";
    //const { userLoggedIn, setUserLoggedIn } = React.useContext(AppContext);
    //console.log("id=",userLoggedIn);
    var [show,setshow]=React.useState(true);
    var [show1,setshow1]=React.useState(true);
    function sign(){
      nav("/Signin");
      
    }
    function log(){
      nav("/Login");
    }
    function searchsol(){
      let s="/Search/"+search;
      nav(s);
    }
  return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="" onClick={()=>{nav("/")}} >Creative Blog</a>
        <form className="d-flex ser" role="search">
            <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success " type="submit">Search</button>
          </form>
        <button className="navbar-toggler" type="button" onClick={()=>setshow(false)} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="" onClick={()=>{nav("/")}}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">News</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">updates</a>
              
            </li>
            <li className="nav-item">
              <a className="nav-link"  href="#">college stories</a>
            </li>

          </ul>
          { show && <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{setsearch(e.target.value)}} />
            <button className="btn btn-outline-success" type="submit" disabled={search===""} onClick={searchsol}><FcSearch/></button>
          </form>}

          {userid!="nli" && show  && <VscAccount cursor="pointer" className='icon' onClick={()=>{nav("/Profile")}} size={25}/> }
          {userid==="nli" && show  && <button onClick={sign} type="button" style={{marginLeft:20}}  class="btn btn-light">sign in</button>}
          {userid==="nli" && show &&<button onClick={log} type="button" style={{marginLeft:20}} class="btn btn-primary">Log in</button>}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
