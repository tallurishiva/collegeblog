import React from "react";
import "./blog.css";
import Searchcomp from "./Searchcomp";
import axios from "axios";
import { Params, useParams } from "react-router-dom";
export default function Cat(){
     const {item}=useParams();
     const [data,setdata]=React.useState([]);
     console.log("searched==",item);
     React.useEffect(()=>{
        async function ser(){
            try{
                const posts=await axios.post("http://localhost:3001/cat",{cat:item});
                setdata(posts.data);
                console.log(posts.data);
            }
            catch{
                console.error();
            }
        }
        ser();
     },[item]);
    return (
        <div className="pblog">
            
            {data.map((item)=>{return <Searchcomp item={item}/>})}
        </div>
    );
}