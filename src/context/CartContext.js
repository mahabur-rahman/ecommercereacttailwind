import React, { createContext, useReducer } from "react";
import { CartReducer } from "./CartReducer";

// cart context create
export const CartContext = createContext();

// cart context provider

const CartContextProvider = (props) => {
  const [cart, dispatch] = useReducer(CartReducer, {
    shoppingCart: [],
    totalPrice: 0,
    qty: 0,
  });

  return (
    <CartContext.Provider value={{ ...cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
