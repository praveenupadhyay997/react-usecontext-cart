import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = (props) => {
  const cart = "Praveen";
  return (
    <CartContext.Provider value={cart}>{props.children}</CartContext.Provider>
  );
};
