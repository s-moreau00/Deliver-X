import React from "react";

export default function CartQuantity() {
  return (
    <>
      <div className="product-counter">
        <button type="button" className="cart-btn-moins">
          -
        </button>
        <p className="counter-value">1</p>
        <button type="button" className="cart-btn-plus">
          +
        </button>
      </div>
      <p className="cart-price">10,00 €</p>
    </>
  );
}
