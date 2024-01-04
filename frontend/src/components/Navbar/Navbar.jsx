import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import close from "../../assets/icones/close-lg-svgrepo-com.svg";
import menuBurger from "../../assets/icones/hamburger-menu-svgrepo-com.svg";
import cart from "../../assets/icones/cart-large-2-svgrepo-com.svg";
import logoSmall from "../../assets/logoP2/LogoP2_small.png";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState();
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav>
      <div className="blockLogo">
        <img src={logoSmall} alt="logo" />
        <h3>Deliver X</h3>
      </div>
      <ul className={openMenu ? "linkVisible" : ""}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/panier">
            Mon Panier
            <img src={cart} alt="panier" />
          </Link>
        </li>
      </ul>
      <h3 className="titre">Deliver X</h3>
      <div>
        <button type="button" onClick={handleMenu}>
          <img
            src={openMenu ? close : menuBurger}
            /* le menu est il ouvert (true) ? si oui(true) exècute l'instruction 1, si non (false) exècute l'instruction 2 ;
           par défault à null (donc false, exécute la deuxième instruction)
           instruction 1 : src = chemin vers icône close (s'affiche quand le menu est ouvert)
           instruction 2 : src = chemin vers icône menu burger (s'affiche quand le menu est fermé)
           */
            alt="close bar ou menu burger"
          />
        </button>
      </div>
    </nav>
  );
}
