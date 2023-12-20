import "./App.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGeoLocation } from "./Hooks/useLocation";
import restaurants from "./restaurants.json";
import Layout from "./components/layout/Layout";
import ClickOrDeliver from "./components/ClickOrDeliver/ClickOrDeliver";
import Cities from "./components/Cities/Cities";
import Livraison from "./components/Livraison/Livraison";
import ListRestaurants from "./components/ListRestaurants/ListRestaurants";
import Logo from "./components/Logo/Logo.jsx";
import Counter from "./components/Counter";

function App() {
  const [data, setData] = useState([]);
  const { lat, long } = useGeoLocation();
  const [restaurant] = useState(restaurants);

  // const [counter, setCounter] = useState(5);

  useEffect(() => {
    fetch(`https://api-adresse.data.gouv.fr/reverse/?lon=${long}&lat=${lat}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, [lat, long]);
  console.log("data", data);

  return (
    <>
      <main>
        <section>
          <h1>Prêt à commander ton burger ?</h1>
          <ClickOrDeliver></ClickOrDeliver>
          <Cities restaurant={restaurant}></Cities>
          <Livraison></Livraison>
          <ListRestaurants></ListRestaurants>
          <Logo />
        </section>
      </main>
    </>
  );
}

export default App;
