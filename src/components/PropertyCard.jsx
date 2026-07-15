// function PropertyCard({ property }) {
//   return (
//     <div className="property-card">
//       <img src={property.image} alt={property.title} />

//       <div className="property-info">
//         <h3>{property.title}</h3>

//         <p>{property.location}</p>

//         <h4>{property.price}</h4>

//         <span>{property.rating}</span>
//       </div>
//     </div>
//   );
// }

// export default PropertyCard;

function PropertyCard({ property }) {
  return (
    <div className="property-card">

      <div className="image-container">
        <img src={property.image} alt={property.title} />
        <span className="heart">❤</span>
      </div>

      <div className="property-info">
        <h3>{property.title}</h3>
        <p>{property.location}</p>
        <h4>{property.price}</h4>
        <span>{property.rating}</span>
      </div>

    </div>
  );
}

export default PropertyCard;