import styled from "styled-components";

const CartItemsList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  h1 {
    font-size: 32px;
    font-weight: 800;
    color: #242424;
    margin-bottom: 40px;
    letter-spacing: -1px;

    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 4px;
      background-color: #242424;
    }
  }

  & > div {
    border-bottom: 1px solid #f2f2f2;
    padding: 24px 0;

    &:last-child {
      border-bottom: none;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    h1 {
      font-size: 28px;
      margin-bottom: 30px;
    }
  }
`;

export default CartItemsList;
