import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { CategoryContext } from "../context/CategoryContext";
import PropertyCard from "./PropertyCard";
import properties from "../data/properties";

function PropertyList() {
  const { search } = useContext(SearchContext);
  const { category } = useContext(CategoryContext);

let filteredProperties = properties.filter((property) => {
  if (search.sort === "low") {
  filteredProperties.sort((a, b) => {
    const priceA = Number(a.price.replace(/[^\d]/g, ""));
    const priceB = Number(b.price.replace(/[^\d]/g, ""));
    return priceA - priceB;
  });
  if (search.sort === "low") {
  filteredProperties.sort((a, b) => {
    const priceA = Number(a.price.replace(/[^\d]/g, ""));
    const priceB = Number(b.price.replace(/[^\d]/g, ""));
    return priceA - priceB;
  });
}

if (search.sort === "high") {
  filteredProperties.sort((a, b) => {
    const priceA = Number(a.price.replace(/[^\d]/g, ""));
    const priceB = Number(b.price.replace(/[^\d]/g, ""));
    return priceB - priceA;
  });
}

if (search.sort === "rating") {
  filteredProperties.sort((a, b) => {
    const ratingA = parseFloat(a.rating.replace(/[^\d.]/g, ""));
    const ratingB = parseFloat(b.rating.replace(/[^\d.]/g, ""));
    return ratingB - ratingA;
  });
}
}

if (search.sort === "high") {
  filteredProperties.sort((a, b) => {
    const priceA = Number(a.price.replace(/[^\d]/g, ""));
    const priceB = Number(b.price.replace(/[^\d]/g, ""));
    return priceB - priceA;
  });
}

if (search.sort === "rating") {
  filteredProperties.sort((a, b) => {
    const ratingA = parseFloat(a.rating.replace(/[^\d.]/g, ""));
    const ratingB = parseFloat(b.rating.replace(/[^\d.]/g, ""));
    return ratingB - ratingA;
  });
}
const searchText = search.where.toLowerCase();

const locationMatch =
  search.where === "" ||
  property.location.toLowerCase().includes(searchText) ||
  property.title.toLowerCase().includes(searchText);
  const guestsMatch =
    search.guests === "" ||
    property.guests >= Number(search.guests);

  const categoryMatch =
    category === "" ||
    category === "All" ||
    property.category === category;
    const propertyPrice = Number(
  property.price.replace(/[^\d]/g, "")
);

const priceMatch =
  search.price === "" ||
  (search.price === "5000" && propertyPrice < 5000) ||
  (search.price === "7000" &&
    propertyPrice >= 5000 &&
    propertyPrice <= 7000) ||
  (search.price === "8000" && propertyPrice > 7000);
return (
  locationMatch &&
  guestsMatch &&
  categoryMatch &&
  priceMatch
);
});

  return (
    <section className="property-list">
      <h2 className="section-title">Popular Stays</h2>

      <div className="property-grid">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}

export default PropertyList;
