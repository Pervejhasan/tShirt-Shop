// import React from 'react';
import PropTypes from "prop-types";
import "./Cart.css";
const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>please add some products</p>;
  } else {
    message = (
      <div>
        <h4>patti ola</h4>
        <p>
          <small>Thanks for giving your money</small>
        </p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h3>Order Summary: {cart.length}</h3>
      {message}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>{" "}
        </p>
      ))}

      <h4 className={cart.length > 2 ? "purple" : "orange"}>
        Thanks for buy our shop
      </h4>
    </div>
  );
};
Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};
export default Cart;
/*
===> conditional rendering
1]=> use if else to set a variable that will contain an element , component
2]=> ternary operator: condition ? 'for true' :
3]=> Logical &&: if the condition is true then the next thing will be displayed
         {cart.length===2 && <p>Two T-shirt</p>}
4]=> Logical ||: if the condition is false then the next thing will be displayed         
          {cart.length!==2 || <p>Two T-shirt</p>}

*/

/*
===> conditional css class
1]=> <h4 className={cart.length > 2 ? "purple" : "orange"}>Thanks for buy our shop</h4>
2]=> <P className={`bold ${cart.length===3 ? "purple" : "orange"}`}></p>
*/
