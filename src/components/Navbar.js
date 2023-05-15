import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.ecommerce.cart);
  const toptalQuantity = cart.reduce(
    (totalQuan, product) => totalQuan + product.quantity,
    0
  );
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a href="index.html">
          <img src={logo} alt="LWS" className="max-w-[140px]" />
        </a>

        <div className="flex gap-4">
          <Link to="/" className="navHome" id="lws-home">
            {" "}
            Home{" "}
          </Link>
          <Link to="/cart" className="navCart" id="lws-cart">
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{toptalQuantity}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
