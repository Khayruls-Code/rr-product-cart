import React from "react";
import BillingDetails from "./BillingDetails";
import CartItems from "./CartItems";

const Cart = () => {
  return (
    <div className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            <CartItems />
          </div>
          <BillingDetails />
        </div>
      </div>
    </div>
  );
};

export default Cart;
