import React from "react";
import './compose.css';
import axios from "axios";
export default function Compose(){
    //console.log("composing=",userLoggedIn);
    var [title,settitle]=React.useState("");
    var [subtitle,setsubtitle]=React.useState("");
    var [Category,setcategory]=React.useState("");
    var [cont,setcont]=React.useState("");
    console.log(Category);
    async function sud(event){
      event.preventDefault();
      //console.log("name:"+name+"  password:"+password +" email:"+email);
      /*try{
      var find= await axios.post("http://localhost:3001/blog",{eid:userLoggedIn,title:title,subtitle:subtitle,Category:Category,cont:cont});
      alert(find.data);
    }
      catch(error){
          console.error();
      }*/
  }  
    return (
        <div className="compose">
        <form onSubmit={sud}>
            <div className="mb-3 col">
        <label htmlFor="exampleFormControlInput1" className="form-label" >Enter Title</label>
        <input type="text" className="form-control" required id="exampleFormControlInput1" onChange={(e)=>{settitle(e.target.value)}} placeholder="pic creater" />
      </div>
            <div className="mb-3 col">
        <label htmlFor="exampleFormControlInput1" className="form-label" >Enter subtitle</label>
        <input type="text" className="form-control"  id="exampleFormControlInput1" onChange={(e)=>{setsubtitle(e.target.value)}} placeholder="new Ai tool" />
      </div>
      <div className="mb-3 col">
        <label htmlFor="exampleFormControlInput1" className="form-label" >Select Category</label>
        <div class="form-check">
  <input className="form-check-input" type="radio" name="News" checked={Category === 'News'} id="flexRadioDefault1" onClick={(e)=>{setcategory("News")}}/>
  <label className="form-check-label" for="flexRadioDefault1">
    News
  </label>
</div>
<div class="form-check">
  <input className="form-check-input" type="radio" name="Ideas" id="flexRadioDefault1" checked={Category === 'Ideas'}  onClick={(e)=>{setcategory("Ideas")}}/>
  <label className="form-check-label" for="flexRadioDefault1">
    Ideas
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="College Stories" id="flexRadioDefault2" checked={Category==="collegestories"} onClick={(e)=>{setcategory("Collegestories")}}/>
  <label className="form-check-label" for="flexRadioDefault2">
    College Stories
  </label>
</div>
      </div>
      <div className="mb-3 col">
        <label htmlFor="exampleFormControlTextarea1" className="form-label" >Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" required rows="10" onChange={(e)=>{setcont(e.target.value)}}></textarea>
      </div>
      <button type="submit"  class="btn btn-success">Submit</button>
      </form>
    </div>
    );
}