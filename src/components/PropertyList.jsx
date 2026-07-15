import properties from "../data/properties";
import PropertyCard from "./PropertyCard";

function PropertyList() {
  return (
    <div className="property-list">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
        />
      ))}
    </div>
  );
}

export default PropertyList;