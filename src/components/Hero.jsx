import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>🏡 Find Your Dream Stay</h1>

        <p>
          Discover beautiful villas, beach houses, mountain cabins,
          and luxury homes at the best prices.
        </p>

        <SearchBar />
      </div>
    </section>
  );
}

export default Hero;
