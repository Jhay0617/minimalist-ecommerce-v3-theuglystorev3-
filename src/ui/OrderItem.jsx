import styled from "styled-components";

const OrderItem = styled.div`
  display: flex;
  justify-content: space-between; /* Pushes content to left and price to right */
  align-items: center;
  background-color: #ffffff;
  padding: 16px 0;
  border-bottom: 1px solid #f2f2f2; /* Subtle divider */

  &:last-child {
    border-bottom: none; /* Cleaner look at the end of the list */
  }

  /* The Left Side: Image + Text */
  & > div:first-child {
    display: flex;
    gap: 20px;
    align-items: center;

    img {
      width: 80px;
      height: 80px;
      object-fit: contain;
      background: #f2f2f2;
      border-radius: 8px;
      padding: 8px;
    }

    h4 {
      margin: 0;
      font-size: 16px;
      color: #242424;
    }

    p {
      margin: 4px 0 0 0;
    }
  }

  /* The Right Side: Price */
  & > div:last-child {
    text-align: right;

    p {
      font-size: 18px;
      margin: 0;
    }

    small {
      display: block; /* Ensures it stays under the price */
    }
  }

  /* Mobile adjustment */
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    & > div:last-child {
      text-align: left;
      padding-left: 100px; /* Aligns price with the text content */
    }
  }
`;

export default OrderItem;
