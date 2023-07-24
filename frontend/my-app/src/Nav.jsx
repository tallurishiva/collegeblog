import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './AppContext';
import './nav.css';
const Nav = () => {
    var nav=useNavigate();
    const { userLoggedIn, setUserLoggedIn } = React.useContext(AppContext);
    console.log("id=",userLoggedIn);
    var [show,setshow]=React.useState(true);
    var [show1,setshow1]=React.useState(true);
    function sign(){
      nav("/Signin");
      
    }
    function log(){
      nav("/Login");
    
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
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>}

          {userLoggedIn!=="srk" && show  &&<svg onClick={()=>{nav("/Profile")}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" style={{marginLeft:20,cursor:"pointer"}} fill="currentColor" className="bi bi-person-workspace" viewBox="0 0 16 16">
  <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
  <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"/>
  </svg>}
          {userLoggedIn=="srk" && show  && <button onClick={sign} type="button" style={{marginLeft:20}}  class="btn btn-light">sign in</button>}
          {userLoggedIn=="srk" && show &&<button onClick={log} type="button" style={{marginLeft:20}} class="btn btn-primary">Log in</button>}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
