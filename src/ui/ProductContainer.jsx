import styled from "styled-components";

const ProductContainer = styled.div`
  display: grid;
  /* The Magic Line */
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 40px 24px;
  max-width: 1200px;

  /* CRITICAL: Force the width and stop Flexbox from squishing it */
  width: 100%;
  flex-shrink: 0; /* Prevents the Flex parent from squeezing the grid */

  margin: 0 auto;
`;

export default ProductContainer;
