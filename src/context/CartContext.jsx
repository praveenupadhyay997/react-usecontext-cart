import { createContext, useContext } from "react";

export const CartContext = createContext(null);
export const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};

export const CartContextProvider = (props) => {
  const cart = { cart: "Praveen" };
  return (
    <CartContext.Provider value={cart}>{props.children}</CartContext.Provider>
  );
};
