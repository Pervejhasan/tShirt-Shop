// import React from 'react';
import PropTypes from "prop-types";
import "./Tshirt.css";
const Tshirt = ({ tshirt, handleAddToCart }) => {
  const { gender, name, picture, price } = tshirt;
  return (
    <div className="tshirt">
      <img src={picture} alt="t-shirt_image" />
      <h4>Name: {name}</h4>
      <h4>Gender: {gender}</h4>
      <h4>Price: ${price}</h4>
      <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
    </div>
  );
};
Tshirt.propTypes = {
  //   name: PropTypes.string.isRequired,
  //   gender: PropTypes.string.isRequired,
  //   picture: PropTypes.string.isRequired,
  //   price: PropTypes.number.isRequired,
  tshirt: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};
export default Tshirt;
