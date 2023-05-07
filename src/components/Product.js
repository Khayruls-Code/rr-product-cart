import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/product/actions";

const Product = ({ product }) => {
  const { name, category, img, quantity, price, id } = product;
  const dispatch = useDispatch();
  const handleAddCart = (id) => {
    console.log(id);
    dispatch(addToCart(id));
  };
  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={img} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{name}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{quantity}</span>
          </p>
        </div>
        <button onClick={() => handleAddCart(id)} className="lws-btnAddToCart">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
