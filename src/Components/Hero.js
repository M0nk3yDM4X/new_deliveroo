import React from "react";

const Hero = props => {
  return (
    <div className="Hero">
      <div className="wrapper">
        <div className="restaurantandpicture">
          <div className="restaurant_infos">
            <h1 className="restaurant_title">{props.name}</h1>
            <p className="restaurant_description">{props.description}</p>
          </div>
          <div className="restaurant_picture">
            <img
              className="hero_image"
              src={props.picture}
              alt="image_description"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
