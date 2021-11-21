import React from "react";

export const CartReducer = (state, action) => {
  const { shoppingCart, totalPrice, qty } = state;
  let product;
  let index;
  let updatedPrice;
  let updatedQty;

  switch (action.type) {
    case "ADD_TO_CART":
      //   console.log("add to cart");
      const check = shoppingCart.find((item) => item.id === action.id);

      if (check) {
        return state;
      } else {
        product = action.product;
        product["qty"] = 1;
        updatedQty = qty + 1;
        updatedPrice = totalPrice + product.price;

        return {
          shoppingCart: [product, ...shoppingCart],
          totalPrice: updatedPrice,
          qty: updatedQty,
        };
      }

      break;

    case "INCREMENT":
      product = action.item;
      product.qty = product.qty + 1;
      updatedPrice = totalPrice + product.price;
      updatedQty = qty + 1;
      index = shoppingCart.findIndex((item) => item.id === action.id);
      shoppingCart[index] = product;
      return {
        shoppingCart: [...shoppingCart],
        totalPrice: updatedPrice,
        qty: updatedQty,
      };

      break;

    case "DECREMENT":
      product = action.item;

      if (product.qty > 1) {
        product.qty = product.qty - 1;
        updatedPrice = totalPrice - product.price;
        updatedQty = qty - 1;
        index = shoppingCart.findIndex((item) => item.id === action.id);
        shoppingCart[index] = product;
        return {
          shoppingCart: [...shoppingCart],
          totalPrice: updatedPrice,
          qty: updatedQty,
        };
      } else {
        return state;
      }
      break;

    case "DELETE":
      const filteredItem = shoppingCart.filter((item) => item.id !== action.id);
      product = action.item;
      updatedQty = qty - product.qty;
      updatedPrice = totalPrice - product.price * product.qty;
      return {
        shoppingCart: [...filteredItem],
        totalPrice: updatedPrice,
        qty: updatedQty,
      };

      break;

    case "EMPTY":
      return { shoppingCart: [], totalPrice: 0, qty: 0 };
      break;

    default:
      return state;
  }
};
