import React, { useState } from "react";
import PropTypes from "prop-types";

import "./filter.css";

export default function Filter({ onFilterChange }) {
  const [activeFilter, setActiveFilter] = useState(null);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="filter">
      <button
        id="filter-button"
        type="button"
        className={activeFilter === "Burger" ? "active" : ""}
        onClick={() => handleFilterChange("Burger")}
      >
        Burger
      </button>
      <button
        id="filter-button"
        type="button"
        className={activeFilter === "MealDeal" ? "active" : ""}
        onClick={() => handleFilterChange("MealDeal")}
      >
        MealDeal
      </button>
      <button
        id="filter-button"
        type="button"
        className={activeFilter === "Salade" ? "active" : ""}
        onClick={() => handleFilterChange("Salade")}
      >
        Salade
      </button>
      <button
        id="filter-button"
        type="button"
        className={activeFilter === "Boisson" ? "active" : ""}
        onClick={() => handleFilterChange("Boisson")}
      >
        Boisson
      </button>
    </div>
  );
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
