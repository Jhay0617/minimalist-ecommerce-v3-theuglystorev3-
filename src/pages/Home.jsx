import BentoGrid from "../features/BentoGrid";
import FeaturedProducts from "../features/FeaturedProducts";
import Hero from "../features/Hero";
import ValueProps from "../features/ValueProps";

function Home() {
  return (
    <div>
      <Hero />
      <BentoGrid />
      <FeaturedProducts />
      <ValueProps />
    </div>
  );
}

export default Home;
