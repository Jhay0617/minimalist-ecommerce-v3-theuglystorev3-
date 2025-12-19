import ProductList from "../features/ProductList";
import ProductContainer from "../ui/ProductContainer";
import { useFilterProducts } from "../utils/useFilterProducts";
import Spinner from "../ui/Spinner";
import {
  FilterButton,
  FilterWrapper,
  FilterContainer,
} from "../ui/FilterStyle";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function Products() {
  const { itemsToDisplay, isLoading, error, filter, setFilter, categories } =
    useFilterProducts();

  const [searchParams] = useSearchParams();

  const category = searchParams.get("cat");

  useEffect(() => {
    if (category) {
      setFilter(category);
    }
  }, [setFilter, category]);

  if (isLoading) return <Spinner />;
  if (error) return <p>There`s seem to be a problem with the data</p>;
  return (
    <>
      <FilterContainer>
        <h1>Our Products</h1>

        <div className="filter-label">Filter by category</div>

        <FilterWrapper>
          {categories.map((opt) => (
            <FilterButton
              key={opt}
              $active={filter === opt} // Transient prop for styling
              onClick={() => setFilter(opt)}
            >
              {opt === "all" ? "All Products" : opt}
            </FilterButton>
          ))}
        </FilterWrapper>
      </FilterContainer>
      <ProductContainer>
        {itemsToDisplay.map((prod) => (
          <ProductList key={prod.id} prod={prod} />
        ))}
      </ProductContainer>
    </>
  );
}

export default Products;
