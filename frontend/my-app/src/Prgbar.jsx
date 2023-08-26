import React from "react";
import "./prgbar.css";
export default function Prgbar(){
    return (
        <div className="prgbar">
            <div className="success">✔</div>
            <div className="bar"></div>
            <div className="node">2</div>
            <div className="bar"></div>
            <div className="node">3</div>
        </div>
    );
}