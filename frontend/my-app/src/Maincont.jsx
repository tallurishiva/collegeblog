import React from "react";
import './maincont.css';
import Related from "./Related";
import { Params, useParams } from "react-router-dom";
import axios from "axios";
//import { set } from "mongoose";
export default function Maincont(){
    const {id}=useParams();
    const [date,setdate]=React.useState("");
    const [time,settime]=React.useState("");
    const [load,setload]=React.useState(true);
    const [fc,setfc]=React.useState(0);
    const [data,setdata]=React.useState([]);
    React.useEffect(()=>{
        async function data1(){
            try{
            const posts=await axios.post("http://localhost:3001/blogid",{id:id});
            setdata(posts.data); 
            console.log("ccc===",data);
            setdate(data.createdat.substring(0,10));
            settime(data.createdat.substring(12,16));
            const ffc = await axios.post("http://localhost:3001/followingcount", { id:data.userid });
            setfc(ffc.data);
            console.log("ccc===", data);
            setload(false);

        }
        catch{
            console.error();
        }
        }
        data1();
    },[]);
    
    return (
        <div className="main">
            <div className="aprofile"><div><h6 style={{margin:0,padding:0}}>{data.userid}</h6><p style={{margin:0,padding:0}}>follow count</p></div><button type="button" class="btn btn-light">follow</button></div>
            <h1>{data.Title}</h1>
            <h3>{data.subtitle}</h3>
            <p>
             {data.cont}
            </p>
            
            <p>posted on- {date}  {time}</p>
            <h6>Enter your comment</h6>
            <input type="text" placeholder="comment"></input>
            <p>-show comments</p>
        </div>
    );
}