import React, { useState } from "react";
import "./menu.css";
import menuItems from "../../menuItems.json";

export default function Menu() {
  const [{ items }] = useState(menuItems);
  return (
    <main>
      {items.map((item) => (
        <div key={item.id}>
          <img src={item.img} alt="" />;
        </div>
      ))}
    </main>
  );
}
