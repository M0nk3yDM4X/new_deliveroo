import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Header from "./Components/Header.js";
// import ModalMeal from "./Components/modalMeal.js";
import Hero from "./Components/Hero.js";
import Lunch from "./Components/Lunch.js";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [menu, setMenu] = useState({});
  const [restaurant, setRestaurant] = useState({});
  const [products, setProducts] = useState([]);
  // const [showModal, setShowModal] = useState(false);

  const addProduct = product => {
    const newProducts = [...products];
    let isFound = false;

    for (let i = 0; i < newProducts.length; i++) {
      if (newProducts[i].id === product.id) {
        newProducts[i].quantity = newProducts[i].quantity + 1;
        isFound = true;
        break;
      }
    }

    if (isFound === false) {
      product.quantity = 1;
      newProducts.push(product);
    }
    setProducts(newProducts);
  };

  const removeProduct = product => {
    const newProducts = [...products];
    for (let i = 0; i < newProducts.length; i++) {
      if (newProducts[i].id === product.id) {
        newProducts[i].quantity = newProducts[i].quantity - 1;
        if (newProducts[i].quantity === 0) {
          newProducts.splice(i, 1);
        }
        break;
      }
    }
    setProducts(newProducts);
  };

  console.log(products);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://deliveroo-api.now.sh/menu");
      setMenu(response.data.menu);
      setRestaurant(response.data.restaurant);
      setIsLoading(false);
    } catch (error) {
      console.log("Merci d'essayer à nouveau");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      {/* <ModalMeal showModal={showModal} setShowModal={setShowModal} /> */}
      <Hero
        name={restaurant.name}
        description={restaurant.description}
        picture={restaurant.picture}
      />
      <div className="Lunch">
        {isLoading === true ? (
          <p>Loading ...</p>
        ) : (
          <Lunch
            menu={menu}
            add={addProduct}
            remove={removeProduct}
            setProducts={setProducts}
            products={products}
            // setShowModal={setShowModal}
          />
        )}
      </div>
    </div>
  );
};

export default App;
