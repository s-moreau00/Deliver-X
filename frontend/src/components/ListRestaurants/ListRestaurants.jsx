/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable radix */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-duplicates */

import { useState } from "react";
import "./listRestaurants.css";

const data = [
  { id: 0, label: "Lyon Bellecour" },
  { id: 1, label: "Lyon Jean Macé" },
  { id: 2, label: "Lyon Debourg" },
];

export default function ListRestaurants() {
  // state pour afficher et cacher la liste
  const [isOpen, setOpen] = useState(false);
  // state des items de la liste
  const [items] = useState(data);
  // state de choix de user
  const [selectedItem, setSelectedItem] = useState(null);

  // fonction afficher/cacher la liste
  const toggleDropdown = () => setOpen(!isOpen);

  // fonction pour valider le choix de user
  const handleItemClick = (id) => {
    setSelectedItem((prevSelectedItem) =>
      prevSelectedItem === id ? null : id
    );
    setOpen(false);
  };

  return (
    <>
      <h1>Nos restaurants à (ville sélectionnée) :</h1>
      <div className="dropdown">
        <div className="dropdown-header" onClick={toggleDropdown}>
          {selectedItem
            ? items.find((item) => item.id === parseInt(selectedItem)).label
            : "Choisis ton restaurant :"}
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 24.00 24.00"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#F8F8F8"
            strokeWidth="1.32"
            className={` icon ${isOpen && "open"}`}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <rect width="24" height="24" fill="#F8F8F8"></rect>
              <path
                d="M9.5 7L14.5 12L9.5 17"
                stroke="#383838"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </div>

        <div className={`dropdown-body ${isOpen && "open"}`}>
          {items.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="dropdown-item"
              onClick={(e) => handleItemClick(e.target.id)}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
