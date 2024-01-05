import React from "react";
import trash from "../../assets/icones/trash-bin-minimalistic-svgrepo-com.svg";

export default function CartDelete() {
  //  const handleRemove = (product) => {
  //    const newProducts = products.filter((item) => item.id !== product.id);
  //    setProducts(newProducts);
  //    if (newProducts.length === 0) {
  //      alert("Tu n'as plus rien à commander dans ton panier 😭😭😭");
  //      window.location.href = "/menu";
  //    }
  //  };

  return (
    <button
      className="cart-delete"
      type="button"
      // onClick={() => handleRemove(product)}
    >
      <img src={trash} alt="supprimer" />
    </button>
  );
}
