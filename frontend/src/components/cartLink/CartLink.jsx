import React from "react";
import { Link } from "react-router-dom";
import cart from "../../assets/icones/cart-large-2-svgrepo-com.svg";
import "./cartLink.css";

export default function CartLink() {
  return (
    <Link to="/panier" className="cart-link">
      <div className="cart-counter">1</div>
      <img src={cart} alt="panier" />
    </Link>
  );
}
