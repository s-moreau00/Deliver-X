import Counter from "./components/Counter";
import "./App.css";
import Layout from "./components/layout/Layout";
import { useEffect, useState } from "react";
import { useGeoLocation } from "./Hooks/useLocation";
import restaurants from "./restaurants.json";
import { Link } from "react-router-dom";
import Cities from "./components/Cities/Cities";
import ClickOrDeliver from "./components/ClickOrDeliver/ClickOrDeliver";
import Livraison from "./components/Livraison/Livraison";
import ListRestaurants from "./components/ListRestaurants/ListRestaurants";

import Logo from "./components/Logo/Logo.jsx";

function App() {
  const [data, setData] = useState([]);
  const { lat, long, accepted } = useGeoLocation();
  const [restaurant] = useState(restaurants);
  console.info("accepted", accepted);
  // const [counter, setCounter] = useState(5);

  useEffect(() => {
    if (accepted) {
      fetch(`https://api-adresse.data.gouv.fr/reverse/?lon=${long}&lat=${lat}`)
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => console.info(err));
    }
  }, [lat, long]);

  return (
    <>
      <main>
        <section>
          <h1>Prêt à commander ton burger ?</h1>
          <ClickOrDeliver></ClickOrDeliver>
          <Cities restaurant={restaurant}></Cities>
          <Livraison accepted={accepted}></Livraison>
          <ListRestaurants></ListRestaurants>
          <Logo />
        </section>
      </main>
    </>
  );
}

export default App;
