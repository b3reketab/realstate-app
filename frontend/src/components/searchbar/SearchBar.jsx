import { useState } from "react";
import "./searchBar.scss";

const types = ["Buy", "Rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "Buy",
    minPrice: 0,
    maxPrice: 0,
  });

  const handleQuery = (data) => {
    setQuery((prev) => ({ ...prev, type: data }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((item) => (
          <button
            key={item}
            className={query.type === item ? "active" : ""}
            onClick={() => handleQuery(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
