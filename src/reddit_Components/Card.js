import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <span className="letter">SuperMan</span>

      <div className="card-header">
      
        <div className="profile">
          <div className="profile-icons">
            <span className="upvote-icon">&#9650;</span>
            <span className="coin-icon">&#x1F4B0;</span>
            <span className="downvote-icon">&#9660;</span>
          </div>
        </div>
        <div className="card-title-group">
          <h2 className="card-title">{props.Mname}</h2>
        </div>
      </div>
      <img className="card-image" src={props.imgUrl} alt="Logo" />
      <div className="card-text">{props.Hcolor}</div>
    </div>
  );
}