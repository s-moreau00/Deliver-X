import React from "react";
import "./panier.css";
import { Link } from "react-router-dom";
import arrow from "../../assets/icones/round-alt-arrow-left-svgrepo-com.svg";
import trash from "../../assets/icones/trash-bin-minimalistic-svgrepo-com.svg";
import amsterdamMeal from "../../assets/img-menu/meal-deal-amsterdam.png";

export default function Panier() {
  const products = [
    {
      id: 1,
      catégorie: "hamburger",
      name: "burger amsterdam",
      prix: 10,
      img: "../../assets/img-menu/meal-deal-amsterdam.png",
      quantity: 1,
    },
    {
      id: 2,
      catégorie: "hamburger",
      name: "burger London",
      prix: 12,
      img: "../../assets/img-menu/meal-deal-amsterdam.png",
      quantity: 1,
    },
    {
      id: 3,
      catégorie: "menu",
      name: "menu amsterdam",
      prix: 15,
      img: "../../assets/img-menu/meal-deal-amsterdam.png",
      quantity: 1,
    },
    {
      id: 4,
      catégorie: "hamburger",
      name: "burger amsterdam",
      prix: 10,
      img: "../../assets/img-menu/meal-deal-amsterdam.png",
      quantity: 1,
    },
    {
      id: 5,
      catégorie: "hamburger",
      name: "burger amsterdam",
      prix: 10,
      img: "../../assets/img-menu/meal-deal-amsterdam.png",
      quantity: 1,
    },
    {
      id: 6,
      catégorie: "menu",
      name: "menu amsterdam",
      prix: 15,
      img: "../../assets/img-menu/meal-deal-amsterdam.png",
      quantity: 1,
    },
    {
      id: 7,
      catégorie: "menu",
      name: "menu amsterdam",
      prix: 15,
      img: "../../assets/img-menu/meal-deal-amsterdam.png",
      quantity: 1,
    },
  ];

  return (
    <main className="panier-main">
      <Link to="/menu" className="link-back">
        <img src={arrow} alt="flèche" />
        Revenir à ma commande
      </Link>
      <h2 className="panier-h2">Mon Panier</h2>
      <div className="cart-container">
        <div className="cart">
          {products.map((product) => {
            return (
              <div className="cart-product-container" key={product.id}>
                <div className="cart-product-image">
                  <img src={amsterdamMeal} alt="produit sélectionner" />
                </div>
                <div className="block-product">
                  <p className="cart-product-name">{product.name}</p>
                  <div className="cart-product-and-remove">
                    <div className="product-counter-and-price">
                      <div className="product-counter">
                        <button type="button" className="cart-btn-moins">
                          -
                        </button>
                        <p className="counter-value">{product.quantity}</p>
                        <button
                          type="button"
                          className="cart-btn-plus"
                          onClick={() => {
                            return product.quantity + 1;
                          }}
                        >
                          +
                        </button>
                      </div>
                      <p className="cart-price">10,00 €</p>
                    </div>
                    <button className="cart-delete" type="button">
                      <img src={trash} alt="supprimer" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bottom-block">
          <div className="cart-total">
            <p>Total</p>
            <p>55,00 €</p>
          </div>
          <button type="button" className="valider">
            Valider
          </button>
        </div>
      </div>
    </main>
  );
}
