import { useState, useEffect } from "react";
import "./Livraison.css";

export default function Livraison({ accepted }) {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.info("inputValue :>> ", inputValue);
  };
  const handleClick = () => {};
  console.info("accepted", accepted);

  useEffect(() => {
    if (accepted && inputValue > 0) {
      fetch(`https://api-adresse.data.gouv.fr/search/?q=${inputValue}`)
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => console.info(err));
    }
  }, [accepted, inputValue]);
  console.info("data.features :", data);
  // console.info("data 1 =>", data.features[0].properties.label);
  // console.info("data 2 =>", data.features[1].properties.label);
  // console.info("data 3 =>", data.features[2].properties.label);
  // console.info("data 4 =>", data.features[3].properties.label);
  // console.info("data 5 =>", data.features[4].properties.label);
  return (
    <>
      <div className="delivery">
        <input
          className="inputdelivery"
          type="text"
          name="address"
          placeholder="Ecris ton adresse postale"
          value={inputValue}
          onChange={handleChange}
        />
        <button className="btn-delivery" onClick={handleClick}>
          OK
        </button>
      </div>
    </>
  );
}
