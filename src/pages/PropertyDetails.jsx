import { useParams } from "react-router-dom";
import { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import properties from "../data/properties";

function PropertyDetails() {
  const { id } = useParams();

 const property = properties.find((item) => item.id === Number(id));

const [checkIn, setCheckIn] = useState("");
const [checkOut, setCheckOut] = useState("");
const [booked, setBooked] = useState(false);
const nights =
  checkIn && checkOut
    ? Math.max(
        0,
        (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)
      )
    : 0;
const pricePerNight = Number(
  property.price.replace("₹", "").replace(",", "").replace("/night", "")
);
const serviceFee = 1000;
const totalPrice = nights * pricePerNight;
const grandTotal = totalPrice + (nights > 0 ? serviceFee : 0);
  if (!property) {
    return <h2>Property not found</h2>;
  }

  const similarProperties = properties.filter(
    (item) =>
      item.category === property.category &&
      item.id !== property.id
  );

  return (
    <div className="property-details">
 <div className="gallery">
  <img
    className="main-image"
    src={property.images ? property.images[0] : property.image}
    alt={property.title}
  />

  {property.images && (
    <div className="side-images">
    {property.images.slice(1, 5).map((img, index) => (
  <img
    key={index}
    src={img}
    alt={property.title}
    className="side-image"
  />
))}
    </div>
  )}
</div>

      <div className="details-content">
        {/* Left Side */}
        <div className="details-info">
          <h1>{property.title}</h1>

          <p>📍 {property.location}</p>

          <h2>{property.price}</h2>

          <h3>{property.rating}</h3>

          <p>{property.description}</p>

          <h3>
            👥 {property.guests} Guests • 🛏 {property.bedrooms} Bedrooms • 🚿{" "}
            {property.bathrooms} Bathrooms
          </h3>

          <h2>Amenities</h2>

          <div className="amenities">
            {property.amenities.map((item, index) => (
              <div key={index} className="amenity">
                {item}
              </div>
            ))}
          </div>

          <h2>Hosted by</h2>

          <div className="host-card">
            <img src={property.host.image} alt={property.host.name} />

            <div>
              <h3>{property.host.name}</h3>
              <p>{property.host.experience}</p>
              <p>{property.host.response}</p>
            </div>
          </div>
          <h2>Guest Reviews</h2>

<div className="reviews">
  {property.reviews &&
    property.reviews.map((review, index) => (
      <div key={index} className="review-card">
        <h3>{review.name}</h3>
        <p>{review.rating}</p>
        <p>{review.comment}</p>
      </div>
    ))}
</div>
        </div>

        {/* Right Side */}
        <div className="booking-card">
          <h2>{property.price}</h2>

          <p>{property.rating}</p>

         <input
  type="date"
  value={checkIn}
  onChange={(e) => setCheckIn(e.target.value)}
/>

          <label>Check-out</label>
         <input
  type="date"
  value={checkOut}
  onChange={(e) => setCheckOut(e.target.value)}
/>
          <label>Guests</label>
          <select>
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
            <option>5 Guests</option>
          </select>
{nights > 0 && (
  <div className="price-summary">
    <p>
      ₹{pricePerNight.toLocaleString()} × {nights} night(s)
    </p>

    <p>
      Total: ₹{totalPrice.toLocaleString()}
    </p>

    <p>
      Service Fee: ₹{serviceFee.toLocaleString()}
    </p>

    <hr />

    <h3>
      Grand Total: ₹{grandTotal.toLocaleString()}
    </h3>
  </div>
)}<button
  className="reserve-btn"
  onClick={() => setBooked(true)}
>
  Reserve
</button>{booked && (
  <p className="booking-success">
    🎉 Booking Confirmed!
  </p>
)}
        </div>
      </div>
    </div>

  );
}

export default PropertyDetails;