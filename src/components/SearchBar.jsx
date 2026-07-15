function SearchBar() {
  return (
    <div className="search-container">
      <div className="search-box">

        <div className="search-item">
          <h4>Where</h4>
          <p>Anywhere</p>
        </div>

        <div className="search-item">
          <h4>Check in</h4>
          <p>Any week</p>
        </div>

        <div className="search-item">
          <h4>Guests</h4>
          <p>Add guests</p>
        </div>

        <button className="search-btn">
          🔍
        </button>

      </div>
    </div>
  );
}

export default SearchBar;