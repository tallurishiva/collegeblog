import logo from './logo.svg';
import './App.css';
import './Slide'
import Home from './Home';
import Signin from './Signin';
import Hcomp from './Hcomp';
import Hcompp from './Hcompp';
import Footer from './Footer'
import './Create.jsx'
import Nav from './Nav';
import Maincont from './Maincont';
import Slide from './Slide';
import Compose from './Compose';
import Create from './Create.jsx';
import Login from './Login';
import Profile from './Profile';
import Searchsol from './Searchsol';
import Rout from './Rout';
//import AppContext,{useGc} from './Contex';
//import AppContext, { useGc } from './Contex';
import { AppProvider } from './AppContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
function App() {
  //const { eid,seteid}=useGc();
  //console.log("eid=",eid);
  return (
    <div className="App">
      
     
      <Rout/>
      
      
    </div>
  );
}

export default App;
