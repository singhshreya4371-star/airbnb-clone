import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import PropertyCard from "../components/PropertyCard";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="favorites-page">
      <h1>❤️ My Favorites</h1>

      {favorites.length === 0 ? (
       <div className="empty-favorites">
  <h2>❤️ No Favorites Yet</h2>

  <p>
    Start exploring amazing properties and save your favorites.
  </p>

  <a href="/properties">
    <button>Browse Properties</button>
  </a>
</div>
      ) : (
        <div className="property-grid">
          {favorites.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;