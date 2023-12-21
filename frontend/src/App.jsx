import "./App.css";
import { useState } from "react";
import restaurants from "./restaurants.json";
import ClickOrDeliver from "./components/ClickOrDeliver/ClickOrDeliver";
import Cities from "./components/Cities/Cities";
import Livraison from "./components/Livraison/Livraison";
import ListRestaurants from "./components/ListRestaurants/ListRestaurants";
import Logo from "./components/Logo/Logo";

function App() {
  const [restaurant] = useState(restaurants);

  return (
    <main className="main-App">
      <section className="main-App-section">
        <h1>Prêt à commander ton burger ?</h1>
        <ClickOrDeliver />
        <Cities restaurant={restaurant} />
        <Livraison />
        <ListRestaurants />
      </section>
      <Logo />
    </main>
  );
}

export default App;
