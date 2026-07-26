import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>StayFinder</h2>

      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/properties">Properties</NavLink>
      <NavLink to="/bookings">Bookings</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/reviews">Reviews</NavLink>
      <NavLink to="/add-property">Add Property</NavLink>
      <NavLink to="/settings">Settings</NavLink>
    </div>
  );
}

export default Sidebar;