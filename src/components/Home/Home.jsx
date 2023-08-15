// import React from 'react';
import { useState } from "react";

import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";
const Home = () => {
  const tShirts = useLoaderData();
  // console.log(tShirts);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (tshirt) => {
    const exists = cart.find((ts) => ts._id === tshirt._id);
    if (exists) {
      toast("You have already added that t-shirt", {
        style: {
          border: "4px solid black",
          backgroundColor: "skyblue",
        },
      });
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
  };

  const handleRemoveFromCart = (id) => {
    console.log(id);
    const remainingCart = cart.filter((tshirt) => tshirt._id !== id);
    setCart(remainingCart);
  };

  return (
    <div className="home-container">
      <div className="tshirts-container">
        {tShirts.map((tshirt) => (
          <Tshirt
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
            key={tshirt._id}
          ></Tshirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
