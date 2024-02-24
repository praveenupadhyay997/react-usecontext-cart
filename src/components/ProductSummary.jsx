import React, { useContext } from "react";
import { useCart } from "../context/CartContext";

const ProductSummary = () => {
  const cartValue = useCart();

  console.log(cartValue);

  return <div>ProductSummary</div>;
};

export default ProductSummary;
