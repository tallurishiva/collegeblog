import React from "react";
import './maincont.css';
import Related from "./Related";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Comment from "./Comment";
import { Params, useParams } from "react-router-dom";
import axios from "axios";
//import { set } from "mongoose";
export default function Maincont(){
    const userid=useSelector(store=>store.blog.userid); 
    const {id}=useParams();
    const [comts,setcmts]=React.useState([]);
    const [isf,setisf]=React.useState(false);
    const [date,setdate]=React.useState("");
    const [time,settime]=React.useState("");
    const [load,setload]=React.useState(true);
    const [cmt,setcmt]=React.useState("");
    const [fc,setfc]=React.useState(0);
    const [data,setdata]=React.useState([]);
    React.useEffect(()=>{
        async function data1(){
            try{
            const posts=await axios.post("http://localhost:3001/blogid",{withCredentials: true,id:id});
            setdata(posts.data);
            console.log("ccc===",data);
            setdate(data.createdat.substring(0,10));
            settime(data.createdat.substring(12,16));
            const ffc = await axios.post("http://localhost:3001/followingcount", { id:data.userid });
            setfc(ffc.data.count);
            const isfo = await axios.post("http://localhost:3001/isfol", { id:data.userid,uid:userid});
            setisf(isfo.data.count);
            
            console.log("isfo==",isfo.data);
            console.log("ccc===", data);
            setload(false);
        }
        catch{
            console.error();
        }
        }
        data1();
    },[]);
    
    React.useEffect(()=>{
        async function data2(){
            try{
                const allcomments=await axios.post("http://localhost:3001/cmts",{id:id});
                console.log(allcomments.data);
                setcmts(allcomments.data);
            }
            catch{
                console.error();
            }
        }
        data2();
    },[]);
    function forfollow(){
        async function fol(){
            try{
                await axios.post("http://localhost:3001/follow",{ flid:data.userid,flrid:userid,sts:"1"});
                setisf(true);
            }
            catch{
                console.error();
            }
        }
        fol();
    }
    function forunfollow(){
        async function unfol(){
            try{
                await axios.post("http://localhost:3001/follow",{ flid:userid,flrid:data.userid,sts:"0"});
                setisf(false);
            }
            catch{
                console.error();
            }
        }
        unfol();
    }
    function comment(){
        async function cmting(){
            try{
                await axios.post("http://localhost:3001/comment",{ bid:id,uid:userid,comment:cmt});
                setcmt("");
                alert("posted successfully");
            }
            catch{
                console.error();
            }
        }
        cmting();
    }
    return (
        <div className="main">
            <div className="aprofile"><div><h6 style={{margin:0,padding:0}}>{data.userid}</h6><p style={{margin:0,padding:0}}>{fc}</p></div>
            {userid!="nli" &&  isf==0  && <button type="button" onClick={forfollow} class="btn btn-dark" >follow</button>}
            {userid!="nli" &&  isf!=0 && <button type="button" onClick={forunfollow} class="btn btn-light">following</button>}
            </div>
            <h1>{data.Title}</h1>
            <h3>{data.subtitle}</h3>
            <p>
             {data.cont}
            </p>
            <p>posted on- {date}  {time}</p>
            {userid==="nli" && <h6>Login to comment</h6>}
            {userid!="nli" && <h6>Enter your comment</h6>}
            {userid!="nli" && <textarea type="text" placeholder="comment" rows={2} onChange={(e)=>{setcmt(e.target.value)}}></textarea>}
            {userid!="nli" && <button type="button" class="btn btn-success" onClick={comment} disabled={cmt==""} style={{width:90,marginTop:20,marginLeft:0}}>post</button>}
            <h6>comments:</h6>
             {comts.length==0 && <div>No Comments</div>}
            {comts.map(item=>{return <Comment item={item}/>})}
        </div>
    );
}