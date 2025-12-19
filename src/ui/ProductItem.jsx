import styled from "styled-components";

const ProductItem = styled.div`
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex: 1 0 300px;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease;
  height: 100%; /* Ensures equal height in a grid */
  animation: test 1s ease-in-out forwards;
  &:hover {
    border-color: #c4c4c4;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    transform: translateY(-4px);
  }

  h4 {
    color: #242424;
    font-size: 1.1rem;
    margin: 0;
    line-height: 1.2;
    /* Prevent long titles from breaking the grid */
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  p {
    color: #888888; /* Slightly darker than c4c4c4 for readability */
    font-size: 0.85rem;
    margin: 0;
    flex-grow: 1; /* Pushes price and buttons to the bottom */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  @keyframes test {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default ProductItem;
