import Reviews from "./pages/Reviews";
import Users from "./pages/Users";
import Bookings from "./pages/Bookings";
import Properties from "./pages/Properties";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import AddProperty from "./pages/AddProperty";
import Settings from "./pages/Settings";
function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Sidebar />

        <div className="main-content">
          <Navbar />

        <Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/properties" element={<Properties />} />
  <Route path="/bookings" element={<Bookings />} />
  <Route path="/users" element={<Users />} />
  <Route path="/reviews" element={<Reviews />} />
  <Route path="/add-property" element={<AddProperty />} />
  <Route path="/settings" element={<Settings />} />
</Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;