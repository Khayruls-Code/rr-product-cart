import React from "react";
import BillingDetails from "./BillingDetails";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.ecommerce.cart);
  return (
    <div className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            {cart.map((product) => (
              <CartItems key={product.id} product={product} />
            ))}
          </div>
          <BillingDetails />
        </div>
      </div>
    </div>
  );
};

export default Cart;
