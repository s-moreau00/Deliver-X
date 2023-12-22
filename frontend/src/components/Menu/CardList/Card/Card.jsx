import React, { useState } from "react";
import PropTypes from "prop-types";
import menuItems from "../../../../menuItems.json";

import "./card.css";

export default function Card() {
  const [{ items }] = useState(menuItems);
  return (
    <main className="cards-all">
      {items.map((item) => (
        <div className="cards" key={item.id}>
          <div className="card-img">
            <img src={item.img} alt={item.name} />
          </div>
          <div className="info-product">
            <div className="name-and-price">
              <div className="card-name">{item.name}</div>
              <span className="card-price">{item.prix}</span>
            </div>
            <button className="button" type="submit">
              Ajouter au panier
            </button>
          </div>
        </div>
      ))}
    </main>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    prix: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};
