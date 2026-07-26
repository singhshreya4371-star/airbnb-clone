function Properties() {
  return (
    <div className="page">
      <h2>Properties</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Property</th>
            <th>Location</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Beach House</td>
            <td>Goa</td>
            <td>₹3500</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>Mountain Cabin</td>
            <td>Manali</td>
            <td>₹2800</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Properties;