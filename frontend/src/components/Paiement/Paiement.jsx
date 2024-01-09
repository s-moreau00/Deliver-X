import React from "react";
import { Link } from "react-router-dom";
import "./paiement.css";
import arrow from "../../assets/icones/round-alt-arrow-left-svgrepo-com.svg";

export default function Paiement() {
  return (
    <main className="pay-page">
      <Link to="/panier" className="link-back">
        <img src={arrow} alt="flèche" />
        Revenir au panier
      </Link>

      <div className="pay-container">
        <h2>Paiement</h2>
        <button type="button" className="google-pay">
          Google Pay
        </button>
        <h3 className="pay-h3"> payer par carte </h3>
        <form className="pay-form">
          <label>
            {" "}
            E-mail
            <input className="pay-form-input" type="email" />
          </label>
          <label className="pay-label-info-bank">
            <h4>Informations bancaires</h4>{" "}
            <input
              className="pay-form-input-1"
              type="number"
              placeholder="1234 1234 1234 1234"
            />
            <input
              className="pay-form-input-2"
              type="month"
              placeholder="MM/AAAA"
            />
            <input
              className="pay-form-input-3"
              type="number"
              placeholder="CVC"
            />
          </label>{" "}
          <label>
            {" "}
            Nom sur la carte
            <input
              className="pay-form-input"
              type="text"
              placeholder="Ecrivez votre nom"
            />
          </label>
        </form>
        <button type="button" className="pay-btn-pay">
          {" "}
          Payer XX€{" "}
        </button>
      </div>
    </main>
  );
}
