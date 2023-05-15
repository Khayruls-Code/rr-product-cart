import {
  ADDED,
  ADDED_CART,
  DECREASE_QUANTITY,
  DELETE,
  INCREASE_QUANTITY,
} from "./actionTypes";

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

export const increaseCartQuan = (id) => {
  return {
    type: INCREASE_QUANTITY,
    payload: id,
  };
};

export const decreaseCartQuan = (id) => {
  return {
    type: DECREASE_QUANTITY,
    payload: id,
  };
};

export const deleteProduct = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};
