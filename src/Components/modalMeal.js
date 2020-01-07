import React from "react";
import {
  Close,
  AddCircleOutline,
  RemoveCircleOutline
} from "@material-ui/icons";

const modalMeal = ({
  add,
  addToBasket,
  del,
  deleteAll,
  showModal,
  setShowModal,
  element
}) => {
  const calculateTotal = () => {
    let total = 0;
    total = total + element.price * element.quantity;
    return total;
  };

  return (
    <>
      {showModal === true && (
        <div className="backgroundModal">
          <div className="modalCard">
            <div className="modalHeader">
              <span className="modalText">{element.title}</span>
              <Close
                className="modalClose"
                onClick={() => {
                  deleteAll(element.id);
                  setShowModal(false);
                }}
              />
            </div>
            <div className="modalMainBlock">
              <div className="modalQuantity">
                <RemoveCircleOutline
                  className="moreOrLess"
                  onClick={() => {
                    if (element.quantity > 1) {
                      del(element);
                    }
                  }}
                />

                <span className="modalText">{element.quantity}</span>
                <AddCircleOutline
                  className="moreOrLess"
                  onClick={() => {
                    add(element);
                  }}
                />
              </div>
              <div className="modalFooter">
                <div
                  className="footerCancelButton"
                  onClick={() => {
                    deleteAll(element.id);
                    setShowModal(false);
                  }}
                >
                  <span className="footerCancelText">Annuler</span>
                </div>
                <div
                  className="footerTotalButton"
                  onClick={() => {
                    addToBasket();
                  }}
                >
                  <span className="footerTotalText">Total </span>
                  <span className="footerTotalText">
                    {calculateTotal().toFixed(2)} €
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default modalMeal;
