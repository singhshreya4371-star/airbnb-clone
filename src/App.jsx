import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories";
import PropertyList from "./components/PropertyList";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Categories />
      <PropertyList />
      <Footer />
    </div>
  );
}

export default App;