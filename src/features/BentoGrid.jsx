import { useNavigate } from "react-router-dom";
import BentoGridContainer from "../ui/BentoGridContainer";
import BentoCard from "../ui/BentoCard";

function BentoGrid() {
  const navigate = useNavigate();
  return (
    <BentoGridContainer>
      <BentoCard
        $bg="/explore.png"
        className="large"
        onClick={() => navigate("/products")}
      >
        <h3>Explore Everything</h3>
        <p>View the full collection including all categories.</p>
      </BentoCard>
      <BentoCard onClick={() => navigate("/products?cat=electronics")}>
        <h3>Tech Edit</h3>
        <p>Curated electronics and accessories.</p>
      </BentoCard>
      <BentoCard onClick={() => navigate("/products?cat=men's clothing")}>
        <h3>Men</h3>
        <p>Minimalist apparel.</p>
      </BentoCard>
      <BentoCard onClick={() => navigate("/products?cat=women's clothing")}>
        <h3>Women</h3>
        <p>Timeless silhouettes.</p>
      </BentoCard>
      <BentoCard onClick={() => navigate("/products?cat=jewelery")}>
        <h3>Jewelry</h3>
        <p>Minimalist accessories.</p>
      </BentoCard>
    </BentoGridContainer>
  );
}

export default BentoGrid;
