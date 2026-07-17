import PropertyCard from "./PropertyCard";
import properties from "../data/properties";

function FeaturedProperties() {
  const featured = properties.slice(0, 3);

  return (
    <section className="featured">
      <h2>⭐ Featured Properties</h2>

      <div className="property-grid">
        {featured.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProperties;