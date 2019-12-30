import React from "react";

const LunchItemImage = props => {
  return (
    <div className="container-image">
      {props.image === undefined ? null : (
        <img src={props.image} alt="plat" className="image_item" />
      )}
    </div>
  );
};

export default LunchItemImage;
