function RecentBookings() {
  const bookings = [
    {
      id: 1,
      guest: "Rahul Sharma",
      property: "Beach House",
      date: "24 Jul 2026",
      status: "Confirmed",
    },
    {
      id: 2,
      guest: "Priya Singh",
      property: "Mountain Cabin",
      date: "25 Jul 2026",
      status: "Pending",
    },
    {
      id: 3,
      guest: "Amit Verma",
      property: "Lake View Villa",
      date: "26 Jul 2026",
      status: "Cancelled",
    },
  ];

  return (
    <div className="recent-bookings">
      <h2>Recent Bookings</h2>

      <table>
        <thead>
          <tr>
            <th>Guest</th>
            <th>Property</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.guest}</td>
              <td>{booking.property}</td>
              <td>{booking.date}</td>
              <td>{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentBookings;