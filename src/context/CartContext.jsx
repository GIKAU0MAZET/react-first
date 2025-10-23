import React, { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = useCallback(() => {
    setCartItems((prev) => prev + 1);
  }, []);

  const resetCart = useCallback(() => {
    setCartItems(0);
  }, []);

  const value = {
    cartItems,
    addToCart,
    resetCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
