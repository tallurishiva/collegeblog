import Hcomp from "./Hcomp";
import Hcompp from "./Hcompp";
import Slide from "./Slide";
import React from "react";
//import {useGc} from "./Contex";
//import { AppContext } from './AppContext';
export default function Home(){
    
  //const [eid,seteid]=useGc();
  //setUserLoggedIn("shiva");
  
    return (
        <div>
            <Slide/>
            <Hcomp typ="Collegestories"/>
            <Hcompp typ="Ideas"/>
            <Hcomp typ="News"/>
        </div>
    );
}