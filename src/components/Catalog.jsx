import React, { useState } from "react";

const Catalog = () => {
  const [catalog, setCatalog] = useState(2);

  const handleCatalog = (index) => {
    setCatalog(index);
  };

  const catalogs = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {catalogs.map((item, index) => {
          return (
            <li
              onClick={() => {
                handleCatalog(index);
              }}
              className={catalog === index ? "active" : ""}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Catalog;
