import { useNavigate } from "react-router-dom";
import {
  FeaturedProductGrid,
  SectionHeader,
  SectionWrapper,
} from "../ui/SectionFeaturedProducts";
import { useFilterProducts } from "../utils/useFilterProducts";
import ProductList from "../features/ProductList";
function FeaturedProducts() {
  const navigate = useNavigate();
  const { itemsToDisplay, isLoading } = useFilterProducts();
  const bestSellers = itemsToDisplay.slice(0, 4);

  if (isLoading) return null;
  return (
    <SectionWrapper>
      <SectionHeader>
        <h2>Best sellers</h2>
        <button onClick={() => navigate("/products")}>View All</button>
      </SectionHeader>

      <FeaturedProductGrid
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
      >
        {bestSellers.map((prod) => (
          <ProductList key={prod.id} prod={prod} />
        ))}
      </FeaturedProductGrid>
    </SectionWrapper>
  );
}

export default FeaturedProducts;
