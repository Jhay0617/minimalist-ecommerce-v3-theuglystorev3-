import styled from "styled-components";

const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 40px;
  max-width: 1350px;
  margin: 40px auto;
  padding: 0 20px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export default CartContainer;
