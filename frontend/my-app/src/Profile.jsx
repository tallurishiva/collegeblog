import React from "react";
import "./profile.css";
import { useNavigate } from 'react-router-dom';
import Blog from "./Blog";
export default function Profile(){
    var nav=useNavigate();
    return (
        <div className="profile">
            <h1 style={{textAlign:"center"}}>Name</h1>
            <div className="fcount">
            <div className="cf">
            <h6 className="count">123</h6>
            <h6>followers</h6>
            </div>
            <div className="cf">
            <h6 className="count">23</h6>
            <h6>following</h6>
            </div>
            </div>
            <button className="create" onClick={()=>{nav("/Compose")}}>create new blog</button>
            <hr/>
            <h2>your blogs</h2>
            <hr/>
            <div>
                <Blog/>
                <Blog/>
            </div>
        </div>
    );
}
