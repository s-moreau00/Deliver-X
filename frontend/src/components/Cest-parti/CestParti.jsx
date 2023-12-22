import { Link } from "react-router-dom";
import "./cestparti.css";

// eslint-disable-next-line react/prop-types
export default function CestParti({ selected }) {
  return (
    <div className="containerLetsGo">
      <Link to="/menu" className={selected ? "btnLetsGo" : "hideBtnLetsGo"}>
        C'est parti !
      </Link>
    </div>
  );
}
