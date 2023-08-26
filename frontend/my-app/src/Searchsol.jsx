import React from "react";
import "./blog.css";
import Searchcomp from "./Searchcomp";
import axios from "axios";
import { Params, useParams } from "react-router-dom";
export default function Searchsol(){
     const {item}=useParams();
     const [data,setdata]=React.useState([]);
     console.log("searched==",item);
     React.useEffect(()=>{
        async function ser(){
            try{
                const posts=await axios.post("http://localhost:3001/search",{searchTerm:item});
                setdata(posts.data);
                console.log(posts.data);
            }
            catch{
                console.error();
            }
        }
        ser();
     },[]);
    return (
        <div className="pblog">
            {data.length===0 && <h3 className="nf">Match not Found</h3> }
            {data.map((item)=>{return <Searchcomp item={item}/>})}
        </div>
    );
}