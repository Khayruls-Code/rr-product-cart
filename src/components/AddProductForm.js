import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/product/actions";

const AddProductForm = () => {
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const getProduct = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    let newObj = { ...product };
    newObj[key] = value;
    setProduct(newObj);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
  };
  return (
    <div>
      {/* Product Input Form */}
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 text-[#534F4F]"
          id="lws-addProductForm"
        >
          {/* product name */}
          <div className="space-y-2">
            <label htmlFor="lws-inputName">Product Name</label>
            <input
              onChange={getProduct}
              name="name"
              className="addProductInput"
              id="lws-inputName"
              type="text"
              required
            />
          </div>
          {/* product category */}
          <div className="space-y-2">
            <label htmlFor="lws-inputCategory">Category</label>
            <input
              onChange={getProduct}
              name="category"
              className="addProductInput"
              id="lws-inputCategory"
              type="text"
              required
            />
          </div>
          {/* product image url */}
          <div className="space-y-2">
            <label htmlFor="lws-inputImage">Image Url</label>
            <input
              onChange={getProduct}
              name="img"
              className="addProductInput"
              id="lws-inputImage"
              type="text"
              required
            />
          </div>
          {/* price & quantity container */}
          <div className="grid grid-cols-2 gap-8 pb-4">
            {/* price */}
            <div className="space-y-2">
              <label htmlFor="ws-inputPrice">Price</label>
              <input
                onChange={getProduct}
                name="price"
                className="addProductInput"
                type="number"
                id="lws-inputPrice"
                required
              />
            </div>
            {/* quantity */}
            <div className="space-y-2">
              <label htmlFor="lws-inputQuantity">Quantity</label>
              <input
                onChange={getProduct}
                name="quantity"
                className="addProductInput"
                type="number"
                id="lws-inputQuantity"
                required
              />
            </div>
          </div>
          {/* submit button */}
          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
      {/* Product Input Form Ends */}
    </div>
  );
};

export default AddProductForm;
