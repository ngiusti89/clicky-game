import React from "react";
import "./card.css";

const Card = props => (
  <div className="card">
    <img
      alt={props.name}
      src={props.image}
      id={props.id}
      onClick={() => props.clickShuffle(props.id)}
    />
  </div>
);

export default Card;
