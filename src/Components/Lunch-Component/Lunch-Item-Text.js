import React from "react";

const LunchItemText = props => {
  return (
    <div className="text">
      <h4 className="title-item">{props.title}</h4>
      <p className="description">{props.description}</p>
      <div className="card-footer">
        <span className="footer-item">{props.price} €</span>
        <span className="fav-item">
          {props.popular === true ? "⭑ Populaire" : ""}
        </span>
      </div>
    </div>
  );
};

export default LunchItemText;
