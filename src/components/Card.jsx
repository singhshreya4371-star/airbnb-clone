function Card(props) {
  return (
    <div className="card">
      <img
        src="https://via.placeholder.com/120"
        alt="Profile"
      />

      <h2>{props.name}</h2>

      <p>{props.role}</p>

      <button>View Profile</button>
    </div>
  );
}

export default Card;