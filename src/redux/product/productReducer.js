import {
  ADDED,
  ADDED_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
} from "./actionTypes";

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

const decreseQunatity = (products, id) => {
  return products.map((product) => {
    if (product.id === id) {
      return {
        ...product,
        quantity: product.quantity - 1,
      };
    } else {
      return { ...product };
    }
  });
};

const increseQunatity = (products, id) => {
  return products.map((product) => {
    if (product.id === id) {
      return {
        ...product,
        quantity: product.quantity + 1,
      };
    } else {
      return { ...product };
    }
  });
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
      if (hasInCart) {
        // increse quantity if the product already in the cart
        return {
          ...state,
          cart: state.cart.map((product) => {
            if (product.id === action.payload) {
              return {
                ...product,
                quantity: product.quantity + 1,
              };
            } else {
              return { ...product };
            }
          }),
          // decrese product quantity while added in the cart
          products: decreseQunatity(state.products, action.payload),
        };
      } else {
        // add product if it not exist in the cart
        const addedProduct = state.products.find(
          (product) => product.id === action.payload
        );
        return {
          ...state,
          // added new product to the cart
          cart: [
            ...state.cart,
            {
              ...addedProduct,
              quantity: 1,
            },
          ],
          // decrese product quantity while added in the cart
          products: decreseQunatity(state.products, action.payload),
        };
      }
    case INCREASE_QUANTITY:
      const increaseProduct = state.products.find(
        (product) => product.id === action.payload
      );
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product.id === action.payload && increaseProduct.quantity > 0) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return { ...product };
        }),
        products: decreseQunatity(state.products, action.payload),
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product.id === action.payload) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          }
          return { ...product };
        }),
        products: increseQunatity(state.products, action.payload),
      };
    default:
      return state;
  }
};

export default productReducer;
