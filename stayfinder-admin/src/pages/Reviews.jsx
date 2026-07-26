function Reviews() {
  return (
    <div className="page">
      <h2>Reviews</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Guest</th>
            <th>Property</th>
            <th>Rating</th>
            <th>Comment</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Rahul Sharma</td>
            <td>Beach House</td>
            <td>⭐⭐⭐⭐⭐</td>
            <td>Amazing stay!</td>
            <td>
              <button>View</button>
              <button>Delete</button>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>Priya Singh</td>
            <td>Mountain Cabin</td>
            <td>⭐⭐⭐⭐</td>
            <td>Very peaceful place.</td>
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

export default Reviews;