import { ADDED, ADDED_CART, DELETE } from "./actionTypes";

export const addProduct = (product) => {
  return {
    type: ADDED,
    payload: product,
  };
};

export const addToCart = (id) => {
  return {
    type: ADDED_CART,
    payload: id,
  };
};

export const deleteProduct = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};
