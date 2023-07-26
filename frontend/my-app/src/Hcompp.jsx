import React from "react";
import './hcomp.css';
import axios from "axios";
import Cont from "./Cont";
export default function Hcompp(props){
    const init={
        Title:"Loading",
        cont:"Loading....."
   }
    const [data,setdata]=React.useState([init]);
    
    React.useEffect(
        ()=>{
            async function data(){
                try{
                var posts=await axios.post("http://localhost:3001/typee",{typ:props.typ});
                console.log(posts.data);
                setdata(posts.data);
            }
                catch{
                    console.error();
                }
            }
            data();
        }
    ,[])
       return (
        <div className="hcomp" style={{backgroundColor:"rgb(160, 191, 224)"}}>
            <h6 className="title">Explore New ideas</h6>
            <div className="content">
             {data.map((item)=>{return <Cont item={item}/>})}
            </div>
            <p className="title2"><p>get more...</p></p>
        </div>
       )
}