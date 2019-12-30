import React from "react";
import LunchItem from "./Lunch-Component/Lunch-Item.js";
import Basket from "./Basket.js";

const Lunch = props => {
  return (
    <div className="wrapper-content">
      <Basket product={props.products} add={props.add} remove={props.remove} />
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
                // setShowModal={props.setShowModal}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Lunch;
