import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { CategoryContext } from "../context/CategoryContext";
import PropertyCard from "./PropertyCard";
import properties from "../data/properties";

function PropertyList() {
  const { search } = useContext(SearchContext);
  console.log(search);
  const { category } = useContext(CategoryContext);

  // Filter properties
  let filteredProperties = properties.filter((property) => {
    const searchText = (search.where || "").toLowerCase();

    const locationMatch =
      searchText === "" ||
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

  // Sort AFTER filtering
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

  return (
    <section className="property-list">
      <h2 className="section-title">Popular Stays</h2>

      {filteredProperties.length === 0 ? (
        <p style={{ textAlign: "center" }}>No properties found.</p>
      ) : (
        <div className="property-grid">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </section>
  );
}

export default PropertyList;