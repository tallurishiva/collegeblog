import React from "react";
import "./profile.css";
//import  {AppContext}  from "./AppContext";
import { useNavigate } from 'react-router-dom';
import Blog from "./Blog";
import Cookies from 'js-cookie';
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateuid } from "./blogSlice";
export default function Profile(){
    var nav=useNavigate();
    //const { userLoggedIn, setUserLoggedIn } = React.useContext(AppContext);
    //console.log(userLoggedIn);
    const [data,setdata]=React.useState([]);
    const [del,setdel]=React.useState(0);
    const [fc,setfc]=React.useState(-1);
    const [ffc,setffc]=React.useState(-1);
    const dispatch = useDispatch();
    function dele(){
        setdel(del-1);
    }
    async function logout(){
        await axios.post("http://localhost:3001/logout", { });
        Cookies.remove('uid');
        dispatch(updateuid("nli"));
        nav("/");
    }
    React.useEffect(()=>{
        /*async function data1(){
            /*try{
            const posts=await axios.post("http://localhost:3001/myblogs",{id:userLoggedIn});
            setdata(posts.data);
            setdel(posts.data.length);
            const ffc = await axios.post("http://localhost:3001/followingcount", { id:userLoggedIn });
            setfc(ffc.data.count);
            const ff = await axios.post("http://localhost:3001/followcount", { id:userLoggedIn });
            console.log("ff==",ff.data.count);
            setffc(ff.data.count);
            console.log("ccc===",posts.data);
        }
        catch{
            console.error();
        }
        }
        data1();*/
    },[del]);
    return (
        <div className="profile">
            <h1 style={{textAlign:"center"}}>userLoggedIn</h1>
            <div className="fcount">
            <div className="cf">
            <h6 className="count">{fc}</h6>
            <h6>followers</h6>
            </div>
            <div className="cf">
        <h6 className="count">{ffc}</h6>
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
            <hr/>
            <button className="lo" onClick={logout}>LOG OUT</button>
        </div>
    );
}
