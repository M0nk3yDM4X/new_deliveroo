import React from "react";

const modalMeal = ({
  add,
  addToBasket,
  del,
  delAll,
  products,
  showModal,
  setShowModal
}) => {
  const calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total = total + products[i].price * products[i].quantity;
    }
    return total;
  };

  return (
    <>
      {showModal === true && (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: "0",
            left: "0",
            position: "fixed",
            background: "rgba(0, 0, 0, 0.6)"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              height: "40%",
              width: "40%",
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)"
            }}
          >
            {products.map((element, index) => {
              // console.log("Ceci est products.map >>> ", products);
              return (
                <div
                  key={element.id}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "red",
                    width: "100%",
                    height: "100%",
                    padding: "5px"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      backgroundColor: "blue",
                      width: "100%"
                    }}
                  >
                    <span>{element.title}</span>

                    <span
                      onClick={() => {
                        setShowModal(false);
                      }}
                    >
                      X
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      backgroundColor: "yellow",
                      justifyContent: "center"
                    }}
                  >
                    <span
                      onClick={() => {
                        if (element.quantity > 1) {
                          del(element);
                        }
                      }}
                    >
                      -
                    </span>
                    <span>{element.quantity}</span>
                    <span
                      onClick={() => {
                        add(element);
                      }}
                    >
                      +
                    </span>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        delAll();

                        setShowModal(false);
                        // console.log(
                        //   "products après deleteAll Function >>>",
                        //   products
                        // );
                      }}
                    >
                      Annuler
                    </button>
                    <button
                      onClick={() => {
                        addToBasket();
                      }}
                    >
                      <span>Total </span> <span> {calculateTotal()} </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default modalMeal;
