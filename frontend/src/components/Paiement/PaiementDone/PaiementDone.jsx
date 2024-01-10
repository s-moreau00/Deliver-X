import "./paiementdone.css";
import LogoAnim from "./Logo-anim/LogoAnim";

export default function PaiementDone() {
  return (
    <main className="paiement-done-container">
      <h1>Merci pour votre commande !</h1>

      <p className="first-p">L'équipe prépare vos burgers avec soin.</p>
      <p className="second-p">
        On se retrouve très vite dans votre point de retrait.
      </p>
      <LogoAnim />
    </main>
  );
}
