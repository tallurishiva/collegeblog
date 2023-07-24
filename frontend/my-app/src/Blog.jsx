import React from "react";
import "./blog.css";
export default function Blog(){
    return (
        <div className="pblog">
            <div className="ntitle">
                 <h3>title</h3>
                 <div className="buttons">
                 <button type="button" class="btn btn-secondary">Edit</button>
                 <button type="button" class="btn btn-light">delete</button>
                 </div>
            </div>
            <div className="conte">
            <div>
            <h4>subtitle</h4>
            <p>content</p>
            </div>
            
            <p className="timestamp">date</p>
            </div>
        </div>
    );
}