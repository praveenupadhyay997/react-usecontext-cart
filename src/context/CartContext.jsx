import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);
export const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};

export const CartContextProvider = (props) => {
  const cartItems = [];
  const [cart, setCart] = useState(cartItems);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </CartContext.Provider>
  );
};
