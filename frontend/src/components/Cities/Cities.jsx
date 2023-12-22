/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import "./Cities.css";
import ListRestaurants from "../ListRestaurants/ListRestaurants";

export default function ClickCollect({ restaurant, clickCollect, deliver }) {
  const restaurantsFiltred = [];
  restaurant.map((rest) => {
    const isExist = restaurantsFiltred.includes(rest.ville);
    if (!isExist) restaurantsFiltred.push(rest.ville);
    return restaurantsFiltred;
  });

  // state clic sur bouton cities
  const [clickCities, setClickCities] = useState(false);

  const handleClickCities = () => {
    setClickCities(!clickCities);
  };

  return (
    <div className={clickCollect ? "showCities" : "hideCities"}>
      <h3 className="title-where">Tu veux manger où ?</h3>

      <div className="cities">
        {restaurantsFiltred.map((res, i) => (
          <button
            className="btn-cities"
            key={i}
            type="button"
            name={res}
            onClick={handleClickCities}
          >
            {res}
          </button>
        ))}{" "}
      </div>
      <ListRestaurants clickCities={clickCities} />
    </div>
  );
}
