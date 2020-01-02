import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Header from "./Components/Header.js";
import ModalMeal from "./Components/modalMeal.js";
import Hero from "./Components/Hero.js";
import Lunch from "./Components/Lunch.js";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [menu, setMenu] = useState({});
  const [restaurant, setRestaurant] = useState({});
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [showModal, setShowModal] = useState(false);
  // const [showToModal, setShowToModal] = useState([]);

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
          console.log(newProducts[i]);
          newProducts.splice(newProducts[i], 1);
        }
        break;
      }
    }
    setProducts(newProducts);
    setBasket(newProducts);
  };

  // const addToModal = meal => {
  //   const newModal = [...showToModal];
  //   newModal.push(meal);
  //   setShowToModal(newModal);
  // };

  const addToBasket = () => {
    const newBasket = [...products];
    if (newBasket.length > 0) {
      setBasket(newBasket);
      setShowModal(false);
    }
  };

  const deleteAll = () => {
    const newProducts = [...products];
    if (newProducts.length > 0) {
      newProducts.splice(0, newProducts.length);
    }
    setProducts(newProducts);
    setShowModal(false);
  };

  // console.log(products);

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
      <ModalMeal
        showModal={showModal}
        setShowModal={setShowModal}
        // showToModal={showToModal}
        products={products}
        setProducts={setProducts}
        add={addProduct}
        addToBasket={addToBasket}
        del={removeProduct}
        delAll={deleteAll}
      />
      <Header />
      <Hero
        name={restaurant.name}
        description={restaurant.description}
        picture={restaurant.picture}
      />

      <div className="Lunch">
        {isLoading === true ? (
          <p>Loading ...</p>
        ) : (
          <>
            <Lunch
              menu={menu}
              add={addProduct}
              remove={removeProduct}
              setProducts={setProducts}
              products={products}
              basket={basket}
              setShowModal={setShowModal}
              showModal={showModal}
              // addToModal={addToModal}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
