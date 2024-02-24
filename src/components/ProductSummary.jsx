import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductSummary = () => {
  const cart = useContext(CartContext);
  console.log(cart);
  return <div>ProductSummary</div>;
};

export default ProductSummary;
