import React from "react";
import "./profile.css";
import  {AppContext}  from "./AppContext";
import { useNavigate } from 'react-router-dom';
import Blog from "./Blog";
import axios from "axios";
export default function Profile(){
    var nav=useNavigate();
    const { userLoggedIn, setUserLoggedIn } = React.useContext(AppContext);
    console.log(userLoggedIn);
    const [data,setdata]=React.useState([]);
    const [del,setdel]=React.useState(0);
    function dele(){
        setdel(del-1);
    }
    React.useEffect(()=>{
        async function data1(){
            try{
            const posts=await axios.post("http://localhost:3001/myblogs",{id:userLoggedIn});
            setdata(posts.data);
            setdel(posts.data.length);
            console.log("ccc===",posts.data);
        }
        catch{
            console.error();
        }
        }
        data1();
    },[del]);
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
                {data.map((item)=>{return <Blog item={item} fun={dele}/>})}
            </div>
        </div>
    );
}
