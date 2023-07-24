import React from "react";
import './hcomp.css';
import Cont from "./Cont";
export default function Hcomp(){
       return (
        <div className="hcomp">
            <h6 className="title">Top News:</h6>
            <div className="content">
            <Cont/>
            <Cont/>
            <Cont/>
            <Cont/>
            <Cont/>
            <Cont/>
            <Cont/>
            <Cont/>
            </div>
            <p className="title2"><p>get more...</p></p>
        </div>
       )
}