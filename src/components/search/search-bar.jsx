import React, { useState } from "react";
import "./search.scss";

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "Buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const types = ["Buy", "Rent"];
  const switchType = (value) => {
    setQuery((prev) => ({ ...prev, type: value }));
  };
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form action="">
        <input type="text" name="location" placeholder="Your location" />
        <input
          type="number"
          name="Price"
          min={0}
          max={1000000}
          placeholder="min Price"
        />
        <input
          type="text"
          name="maxPrice"
          min={0}
          max={1000000}
          placeholder="max Price"
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
