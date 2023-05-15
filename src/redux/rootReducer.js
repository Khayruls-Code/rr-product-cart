import { combineReducers } from "redux";
import productReducer from "./product/productReducer";

const rootReducer = combineReducers({
  ecommerce: productReducer,
});

export default rootReducer;
