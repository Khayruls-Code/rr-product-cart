import React from "react";
import { useSelector } from "react-redux";
import AddProductForm from "./AddProductForm";
import Product from "./Product";

const Products = () => {
  const products = useSelector((state) => state.ecommerce.products);
  return (
    <div className="py-16">
      <div className="productWrapper">
        <div className="productContainer" id="lws-productContainer">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <AddProductForm />
      </div>
    </div>
  );
};

export default Products;
