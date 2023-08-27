import React from "react";
import './hcomp.css';
import Cont from "./Cont";
import axios from "axios";
export default function Hcomp(props){
        const init={
             Title:"Loading",
             cont:"Loading....."
        }
        const [loading,setloading]=React.useState(true);
        const [data,setdata]=React.useState([init]);
        var title="Top News";
        if(props.typ!=="News"){
            title="New College Stories";
        }
        React.useEffect(
            ()=>{
                async function data(){
                    try{
                    var posts=await axios.post("http://localhost:3001/typee",{typ:props.typ});
                    console.log(posts.data);
                 setdata(posts.data);}
                    catch{
                        console.error();
                    }
                }
                data();
            }
        ,[])
       return (
        <div className="hcomp">
            <h6 className="title">{title}</h6>
            <div className="content">
            {data.map((item)=>{return <Cont item={item}/>})}
            </div>
            
        </div>
       )
}