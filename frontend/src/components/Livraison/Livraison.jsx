import { useState, useEffect } from "react";
import "./Livraison.css";
import CestParti from "../Cest-parti/CestParti";
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";

export default function Livraison({ deliver }) {
  const [selected, setSelected] = useState(false);
  function onPlaceSelect(value) {
    setSelected(true);
  }
  // console.info("accepted", accepted);

  // useEffect(() => {
  //   if (accepted && inputValue > 0) {
  //     fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${inputValue}&apiKey=61da4cbff54d4c8d9c92cba1462f7047`)
  //       .then((res) => res.json())
  //       .then((res) => setData(res))
  //       .catch((err) => console.info(err));
  //     // .then(response => response.json())
  //     // .then(result => console.log(result))
  //     // .catch(error => console.log('error', error));
  //   }
  // }, [accepted, inputValue]);
  // console.info("data.features :", data.features);
  // console.info("data 1 =>", data.features[0].properties.label);
  // console.info("data 2 =>", data.features[1].properties.label);
  // console.info("data 3 =>", data.features[2].properties.label);
  // console.info("data 4 =>", data.features[3].properties.label);
  // console.info("data 5 =>", data.features[4].properties.label);
  return (
    <>
      <div className={deliver ? "showLivraison" : "hideLivraison"}>
        <GeoapifyContext apiKey="61da4cbff54d4c8d9c92cba1462f7047">
          <GeoapifyGeocoderAutocomplete placeSelect={onPlaceSelect} />
        </GeoapifyContext>
      </div>
      <CestParti selected={selected} />
    </>
  );
}
