function Bookings() {
  return (
    <div className="page">
      <h2>Bookings</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Guest</th>
            <th>Property</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Rahul Sharma</td>
            <td>Beach House</td>
            <td>Confirmed</td>
            <td>
              <button>View</button>
              <button>Delete</button>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>Priya Singh</td>
            <td>Mountain Cabin</td>
            <td>Pending</td>
            <td>
              <button>View</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Bookings;