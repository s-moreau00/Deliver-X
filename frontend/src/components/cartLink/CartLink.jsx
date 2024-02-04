import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import iconeCart from "../../assets/icones/cart-large-2-svgrepo-com.svg";
import "./cartLink.css";

export default function CartLink({ cart }) {
  console.info("cart", cart);

  const navigate = useNavigate();
  localStorage.setItem("cart", JSON.stringify(cart));
  const redirectionPanier = () => {
    navigate("/panier");
  };
  return (
    <button
      type="submit"
      onClick={() => redirectionPanier(cart)}
      className={`cart-link ${cart.length ? "cart-link-open" : ""} `}
    >
      <div className="cart-counter">{cart.length}</div>
      <img src={iconeCart} alt="panier" />
    </button>
  );
}
CartLink.propTypes = {
  cart: PropTypes.shape([]).isRequired,
};

// import React, { useEffect } from "react";
// import PropTypes from "prop-types";
// import { useNavigate } from "react-router-dom";
// import iconeCart from "../../assets/icones/cart-large-2-svgrepo-com.svg";
// import "./cartLink.css";

// export default function CartLink({ cart }) {
//   const navigate = useNavigate();

//   // Stocker le state cart dans le local storage
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   return (
//     <button
//       type="submit"
//       onClick={() => navigate("/panier")}
//       className="cart-link"
//     >
//       <div className={`cart-counter ${cart.length ? "cart-link-open" : ""}`}>
//         {cart.length}
//       </div>
//       <img src={iconeCart} alt="panier" />
//     </button>
//   );
// }

// CartLink.propTypes = {
//   cart: PropTypes.shape([]).isRequired,
// };
