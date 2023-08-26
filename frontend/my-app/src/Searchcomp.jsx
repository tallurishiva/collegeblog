import React from 'react';
import { useNavigate } from 'react-router-dom';
import './cont.css';
const Cont = (props) =>{
   const nav=useNavigate();
   var cont=(props.item.cont).substring(0,700);
   function nave(){
    var id="/Maincont/"+props.item._id;
    nav(id);
   }
  return (
    <div className="card" style={{ width: '94%' }}>
      <div className="card-body">
       <h4 className="card-title">{props.item.Title}</h4>
        <h6 className="card-subtitle mb-2 text-body-secondary">{props.item.subtitle}</h6>
        <p className="card-text">{cont}</p>
        <a  className="card-link" style={{cursor:"pointer"}} onClick={nave}>Read more...</a>
        <p className='author'>-by {props.item.userid}</p>
      </div>
    </div>
  );
};

export default Cont;
