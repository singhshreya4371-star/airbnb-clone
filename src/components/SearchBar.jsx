import { useState, useContext } from "react";
import { SearchContext } from "../context/SearchContext";

function SearchBar() {
  const { setSearch } = useContext(SearchContext);

  const [where, setWhere] = useState("");
  const [guests, setGuests] = useState("");
  const [price, setPrice] = useState("");
  const [sort, setSort] = useState("");

  const handleSearch = () => {
    setSearch({
      where,
      guests,
      price,
      sort,
    });
  };

  return (
    <div className="search-bar">

      <input
        type="text"
        placeholder="📍 Where"
        value={where}
        onChange={(e) => setWhere(e.target.value)}
      />

      <input type="date" />

      <input type="date" />

      <input
        type="number"
        placeholder="👥 Guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <select
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      >
        <option value="">💰 All Prices</option>
        <option value="5000">Under ₹5,000</option>
        <option value="7000">₹5,000 - ₹7,000</option>
        <option value="8000">Above ₹7,000</option>
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">↕ Sort By</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
        <option value="rating">Highest Rating</option>
      </select>

      <button onClick={handleSearch}>🔍 Search</button>

    </div>
  );
}

export default SearchBar;