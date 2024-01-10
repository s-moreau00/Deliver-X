import React from "react";
import { Link } from "react-router-dom";

export default function CartTotal() {
  // const totalCart = totalPriceByItem.reduce(
  //   (acc, currentValue) => acc + currentValue,
  //   0
  // );
  // ajouter {totalCart} à <p>Total</p>

  return (
    <div className="bottom-block">
      <div className="cart-total">
        <p>Total</p>
        <p>55,00 €</p>
      </div>
      <Link to="/paiement">
        <button type="button" className="valider">
          Valider
        </button>
      </Link>
    </div>
  );
}
