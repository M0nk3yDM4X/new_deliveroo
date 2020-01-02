import React from "react";

const Basket = props => {
  const calculateTotal = delivery => {
    let total = 0;
    for (let i = 0; i < props.userBasket.length; i++) {
      total = total + props.userBasket[i].price * props.userBasket[i].quantity;
    }
    return delivery ? total + delivery : total;
  };

  if (props.userBasket.length === 0) {
    return (
      <section
        className={
          props.showModal === true
            ? "backet-card-empty-modal"
            : "basket-card-empty"
        }
      >
        <div className="basket-empty">
          <button className="basket-button-empty">Valider mon panier</button>
          <span className="basket-empty-span">Votre panier est vide</span>
        </div>
      </section>
    );
  } else {
    return (
      <section
        className={
          props.showModal === true ? "backet-card-modal" : "basket-card"
        }
      >
        <div className="basket">
          <div className="basket-button-container">
            <button className="basket-button">Valider mon panier</button>
          </div>
          {props.userBasket.map(meal => {
            return (
              <div key={meal.id} className="basket-text">
                <div className="counter">
                  <span
                    onClick={() => {
                      props.remove(meal);
                    }}
                    className="cart-button-moins"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00cebd"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                  </span>
                  <span className="quantity">{meal.quantity}</span>
                  <span
                    onClick={() => {
                      props.add(meal);
                    }}
                    className="cart-button-plus"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00cebd"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="16"></line>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                  </span>
                </div>
                <span className="meal-title">{meal.title}</span>
                <span className="meal-price">{meal.price} €</span>
              </div>
            );
          })}
          <div className="blablabla">
            <div className="sous-total">
              <span>Sous-total</span>
              <span>{calculateTotal().toFixed(2)} €</span>
            </div>
            <div className="sous-total">
              <span>Frais de livraison</span>
              <span>2.50 €</span>
            </div>
          </div>
          <div className="total">
            <span>Total</span>
            <span>{calculateTotal(2.5).toFixed(2)} €</span>
          </div>
        </div>
      </section>
    );
  }
};

export default Basket;
