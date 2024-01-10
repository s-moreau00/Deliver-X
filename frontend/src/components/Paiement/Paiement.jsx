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
            <input
              className="pay-form-input"
              type="email"
              placeholder="&ensp;Ecrivez votre e-mail"
              required
            />
          </label>
          <label className="pay-form-bank">
            Informations bancaires
            <input
              className="bank-input-1"
              type="tel"
              placeholder="&ensp;1234 1234 1234 1234"
              min="0"
              max="9999 9999 9999 9999"
              required
            />
            <input
              className="bank-input-2"
              type="month"
              placeholder="&ensp;MM/AAAA"
              min="0"
              required
            />
            <input
              className="bank-input-3"
              type="tel"
              placeholder="&ensp;CVC"
              min="0"
              max="999"
              required
            />
          </label>{" "}
          <label>
            {" "}
            Nom sur la carte
            <input
              className="pay-form-input"
              type="text"
              placeholder="&ensp;Ecrivez votre nom"
              required
            />
          </label>
          <Link to="/paiementdone">
            <button type="submit" className="btn-pay" value="Payer XX€">
              Payer XX€
            </button>
          </Link>
        </form>
      </div>
    </main>
  );
}
