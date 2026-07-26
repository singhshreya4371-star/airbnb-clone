function DashboardCards() {
  const cards = [
    { title: "Total Properties", value: 120 },
    { title: "Total Users", value: 540 },
    { title: "Total Bookings", value: 230 },
    { title: "Revenue", value: "₹4.5L" },
  ];

  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <h3>{card.title}</h3>
          <h2>{card.value}</h2>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;