import styled from "styled-components";

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  width: 100%;
  border-bottom: 1px solid #f0f0f0;
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
  }
  h3 {
    margin: 0;
    font-size: 1rem;
    color: #242424;
  }
  p {
    color: #c4c4c4;
    font-size: 0.8rem;
    max-width: 200px;
  }
  /* First div (Image & Title) */
  & > div:first-child {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 2; /* Takes more space */
  }

  /* Last div (Price & Remove) */
  & > div:last-child {
    text-align: right;
    flex: 1;
  }
`;

export default CartItem;
