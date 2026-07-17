function About() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Experiences</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <h3>🏔 Mountain Adventure</h3>
          <p>Explore beautiful mountains with expert guides.</p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <h3>🍳 Cooking Class</h3>
          <p>Learn to cook delicious local dishes.</p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <h3>🚲 City Bike Tour</h3>
          <p>Discover the city on a guided bike tour.</p>
        </div>
      </div>
    </div>
  );
}

export default About;