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

function App() {
  const [data, setData] = useState([]);
  const { lat, long } = useGeoLocation();
  const [restaurant, setRestaurant] = useState([]);

  // const [counter, setCounter] = useState(5);

  useEffect(() => {
    setRestaurant(restaurants);

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
          <Cities></Cities>
          <Livraison></Livraison>
          <ListRestaurants></ListRestaurants>
        </section>
      </main>
    </>
  );
}

export default App;
