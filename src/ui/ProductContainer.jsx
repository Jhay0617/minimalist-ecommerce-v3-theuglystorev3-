import styled from "styled-components";

const ProductContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 40px 24px;
  max-width: 1200px;

  width: 100%;
  flex-shrink: 0; 

  margin: 0 auto;
`;

export default ProductContainer;
