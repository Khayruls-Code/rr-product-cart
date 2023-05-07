import { ADDED, ADDED_CART } from "./actionTypes";

const initialState = {
  products: [],
  cart: [],
};

const iniqueId = (products) => {
  const maxId = products.reduce(
    (max, product) => Math.max(product.id, max),
    -1
  );
  const newId = maxId + 1;
  return newId;
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return {
        ...state,
        products: [
          ...state.products,
          { ...action.payload, id: iniqueId(state.products) },
        ],
      };
    case ADDED_CART:
      const hasInCart = state.cart.find(
        (product) => product?.id === action?.payload
      );
      console.log(hasInCart);
      console.log(`payload : ${action.payload}`);
      if (hasInCart) {
        return {
          ...state,
          cart: state.cart.map((product) => {
            if (product.id === action.payload) {
              return {
                ...product,
                quantity: product.quantity + 1,
              };
            }
          }),
        };
      } else {
        const addedProduct = state.products.find(
          (product) => product.id === action.payload
        );
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              ...addedProduct,
              quantity: 1,
            },
          ],
        };
      }
    default:
      return state;
  }
};

export default productReducer;
