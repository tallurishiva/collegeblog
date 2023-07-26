import React from "react";
import "./blog.css";
import axios from "axios";
export default function Blog(props){
    var [deleted,setdeleted]=React.useState(false);
    function delet(){
        
        async function del(){
            try{
            var res=await axios.post("http://localhost:3001/delet",{id:props.item._id});
            if(res.data=="success"){
                setdeleted(true);
                props.fun();
            }
            alert("success");
        }
        catch(err){
            console.error();
        }
        }
        del();
    }
    if(deleted) return (<></>);
    return (
        <div className="pblog">
            <div className="ntitle">
                 <h3>{props.item.Title}</h3>
                 <div className="buttons">
                 <button type="button" class="btn btn-secondary">Edit</button>
                 <button type="button" onClick={delet} class="btn btn-light">delete</button>
                 </div>
            </div>
            <div className="conte">
            <div>
            <h4>{props.item.subtitle}</h4>
            <p>{props.item.cont}</p>
            </div>
            
            <p className="timestamp">{props.item.createdat}</p>
            </div>
        </div>
    );
}