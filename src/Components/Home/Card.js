import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <img className="card-splash-image" src={props.image} alt="blank"></img>
      <div className="card-title">
        <h3 className="card-title-text">{props.title}</h3>
        <p className="card-subtitle-text">{props.subtitle}</p>
      </div>
      <div className="card-description">
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
