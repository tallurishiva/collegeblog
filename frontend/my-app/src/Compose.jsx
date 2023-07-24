import React from "react";
import './compose.css';
export default function Compose(){
    return (
        <div className="compose">
            <div className="mb-3 col">
        <label htmlFor="exampleFormControlInput1" className="form-label">Enter Title</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="pic creater" />
      </div>
            <div className="mb-3 col">
        <label htmlFor="exampleFormControlInput1" className="form-label">Enter subtitle</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="new Ai tool" />
      </div>
      <div className="mb-3 col">
        <label htmlFor="exampleFormControlInput1" className="form-label">Select Category</label>
        <div class="form-check">
  <input className="form-check-input" type="radio" name="News" id="flexRadioDefault1"/>
  <label className="form-check-label" for="flexRadioDefault1">
    News
  </label>
</div>
<div class="form-check">
  <input className="form-check-input" type="radio" name="Ideas" id="flexRadioDefault1"/>
  <label className="form-check-label" for="flexRadioDefault1">
    Ideas
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="College Stories" id="flexRadioDefault2" checked/>
  <label className="form-check-label" for="flexRadioDefault2">
    College Stories
  </label>
</div>
      </div>
      <div className="mb-3 col">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
      </div>
      <button type="button" class="btn btn-success">Sudmit</button>
    </div>
    );
}