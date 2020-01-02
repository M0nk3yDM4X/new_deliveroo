import React from "react";
import LunchItem from "./Lunch-Component/Lunch-Item.js";
import Basket from "./Basket.js";

const Lunch = props => {
  return (
    <div className="wrapper-content">
      <Basket
        basket={props.basket}
        // products={props.products}
        add={props.add}
        remove={props.remove}
        showModal={props.showModal}
      />
      <div>
        {Object.keys(props.menu).map((category, index) => {
          const categoryKey = props.menu[category];

          return (
            <div key={index} className="menu">
              {categoryKey.length > 0 ? (
                <h2 className="category_title">{category}</h2>
              ) : null}

              <LunchItem
                menu={props.menu}
                category={category}
                add={props.add}
                setShowModal={props.setShowModal}
                // addToModal={props.addToModal}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Lunch;
