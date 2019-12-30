import React from "react";

const modalMeal = props => {
  return (
    <>
      {props.showModal === true && (
        <div style={{ display: "flex" }}>
          <div className="modal">
            <span> + </span>
            <span
              onClick={() => {
                props.setShowModal(false);
              }}
            >
              Bye bye >>>> X{" "}
            </span>
            <span> - </span>
          </div>
        </div>
      )}
    </>
  );
};

export default modalMeal;
