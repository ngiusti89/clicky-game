import React from "react";
import "./score.css"

const Score = props => (
  <div className="gameScore">
    <h2 className="score">Your Score: {props.total}</h2>
    <h1 className="status">{props.status}</h1>
  </div>
);

export default Score;
