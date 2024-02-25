import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartSummary = () => {
  const { cart } = useContext(CartContext);
  const totalPrice = cart
    .reduce(
      (acc, item) => acc + parseFloat(item.product_cost.replace("$", "")),
      0
    )
    .toFixed(2);

  return (
    <>
      <div className="text-2xl font-bold mb-4 bg-slate-500 p-4">
        Cart Summary
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-6 m-4 w-full max-w-sm"
          >
            <h2 className="font-bold text-xl mb-2 text-gray-800">
              {item.product_name}
            </h2>
            <p className="text-gray-600">Price: {item.product_cost}</p>
          </div>
        ))}
        <div className="text-lg font-bold mt-4">Total: ${totalPrice}</div>
      </div>
    </>
  );
};

export default CartSummary;
