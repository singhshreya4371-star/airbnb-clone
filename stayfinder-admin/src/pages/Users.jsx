function Users() {
  return (
    <div className="page">
      <h2>Users</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Rahul Sharma</td>
            <td>rahul@gmail.com</td>
            <td>Customer</td>
            <td>
              <button>View</button>
              <button>Delete</button>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>Priya Singh</td>
            <td>priya@gmail.com</td>
            <td>Host</td>
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

export default Users;