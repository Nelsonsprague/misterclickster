import React from "react";
import "./style.css";

function KeanuCard(props) {
  console.log(props)
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} key={props.id} id={props.id} onClick={()=>props.onClick(props.id, props.clicked)}/>
      </div>
     
    </div>
  );
}

export default KeanuCard;
