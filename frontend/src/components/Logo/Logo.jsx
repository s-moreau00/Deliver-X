import React from "react";
import "./Logo.css";
import logoburger from "../../assets/logoP2/LogoP2_large.png";
export default function Logo() {
  return (
    <div>
      <img
        className="logoSection"
        src={logoburger}
        alt="Logo Deliver X"
      />
    </div>
  );
}
