/* eslint-disable import/no-unresolved */
import React, { useState } from "react";
import menuItems from "../../../menuItems.json";
import Filter from "../filter/Filter";
import Card from "./card/Card";

import "./cardlist.css";

export default function CardList() {
  const [items, setItems] = useState(menuItems.items);
  // eslint-disable-next-line no-unused-vars
  const [activeFilter, setActiveFilter] = useState(null);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    if (filter === null) {
      setItems(menuItems.items);
    } else {
      const filteredItems = menuItems.items.filter(
        (item) => item.type === filter
      );
      setItems(filteredItems);
    }
  };

  return (
    <div className="app">
      <Filter onFilterChange={handleFilterChange} />
      <Card items={items} />
    </div>
  );
}
