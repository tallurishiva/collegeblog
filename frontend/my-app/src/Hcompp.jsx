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
        <div className="hcomp" style={{backgroundColor:"rgb(245, 245, 245)"}}>
            <h6 className="title">Explore New ideas</h6>
            <div className="content">
             {data.map((item)=>{return <Cont item={item}/>})}
            </div>
           
        </div>
       )
}