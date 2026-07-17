import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

function PropertyCard({ property }) {
const { favorites, toggleFavorite } = useContext(FavoritesContext);

const favorite = favorites.some(
  (item) => item.id === property.id
);

  return (
    <Link
  to={`/property/${property.id}`}
  style={{ textDecoration: "none", color: "inherit" }}
>
      <div className="property-card">
        <div className="image-container">
          <span className="new-badge">NEW</span>
          <img
  src={property.images ? property.images[0] : property.image}
  alt={property.title}
/>

          <button
            className="favorite-btn"
           onClick={(e) => {
  e.preventDefault();
  toggleFavorite(property);
}}
          >
            {favorite ? "❤️" : "🤍"}
          </button>
        </div>

        <div className="property-info">
          <h3>{property.title}</h3>
       <div className="property-meta">
<p>📍 {property.location}</p>
<p>⭐ {property.rating}</p>
<p>👥 {property.guests} Guests</p>
</div>
<h4 className="property-price">{property.price}</h4>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;
