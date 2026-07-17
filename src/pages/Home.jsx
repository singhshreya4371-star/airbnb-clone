import Hero from "../components/Hero";
import Categories from "../components/Categories";
import PropertyList from "../components/PropertyList";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Newsletter from "../components/Newsletter";
import FeaturedProperties from "../components/FeaturedProperties";
function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <PropertyList />
      <Testimonials/>
      <FAQ/>
      <Newsletter/>
      <FeaturedProperties/>
    </>
  );
}

export default Home;