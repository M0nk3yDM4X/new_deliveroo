import React from "react";
import LunchItemText from "./Lunch-Item-Text.js";
import LunchItemImage from "./Lunch-Item-Image.js";

const LunchItem = props => {
  return (
    <div className="wrap_cards">
      {props.menu[props.category].map(meal => {
        return (
          <div
            key={meal.id}
            className="card"
            onClick={() => {
              props.add(meal);
              // props.setShowModal(true);
            }}
          >
            <LunchItemText
              title={meal.title}
              description={meal.description}
              price={meal.price}
              popular={meal.popular}
            />
            <LunchItemImage image={meal.picture} />
          </div>
        );
      })}
    </div>
  );
};

export default LunchItem;
