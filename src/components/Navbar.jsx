// function Navbar(){
//     return (
//         <nav>
//             <h2>Airbnb</h2>

//             <ul>
//                 <li>Homes</li>
//                 <li>Experiences</li>
//                 <li>Services</li>
//             </ul>
//             <button>Login</button>
//         </nav>
//     );
// }

// export default Navbar;
function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Airbnb</h2>

      <ul className="nav-links">
        <li>Home</li>
        <li>Stays</li>
        <li>Experiences</li>
      </ul>

      <button className="profile-btn">
        Profile
      </button>
    </nav>
  );
}

export default Navbar;