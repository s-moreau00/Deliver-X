import React from "react";
import PropTypes from "prop-types";

export default function CartTotal({ products }) {
  const totalPriceByItem = products.map(
    ({ prix, quantity }) => prix * quantity
  );
  const totalCart = totalPriceByItem.reduce((a, b) => a + b, 0);

  return (
    <div className="bottom-block">
      <div className="cart-total">
        <p>Total</p>
        <p>{totalCart.toFixed(2)} €</p>
      </div>
      <button type="button" className="valider">
        Valider
      </button>
    </div>
  );
}
CartTotal.propTypes = {
  products: PropTypes.shape([]).isRequired,
};
