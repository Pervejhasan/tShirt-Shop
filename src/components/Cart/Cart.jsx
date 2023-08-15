// import React from 'react';
import PropTypes from "prop-types";
import "./Cart.css";
const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div className="cart">
      <h3>Order Summary: {cart.length}</h3>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>{" "}
        </p>
      ))}
    </div>
  );
};
Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};
export default Cart;
