import React from "react";
import './comment.css';
export default function(props){
    console.log(props);
    const date=(props.item.createdat).substring(0,10);
    return (
        <div className="comment">
            <div className="time">
                <div style={{margin:10}}>{props.item.userid}</div>
                <em style={{margin:10}}>{date}</em>
            </div>
            <hr/>
            <div style={{margin:10}}>
                {props.item.cmt}
            </div>
        </div>
    );
}