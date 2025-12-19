import styled from "styled-components";

const FinalOrder = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f2f2f2;

  &:last-of-type {
    border-bottom: none;
    margin-bottom: 0;
  }

  img {
    width: 64px;
    height: 64px;
    object-fit: contain;
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #eaeaea;
  }

  .item-details {
    flex: 1;

    h4 {
      font-size: 14px;
      color: #242424;
      margin: 0 0 4px 0;
      /* Truncate long titles */
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    p {
      font-size: 13px;
      color: #adadad;
      margin: 0;
    }
  }

  .item-price {
    font-size: 14px;
    font-weight: 600;
    color: #242424;
  }
`;

export default FinalOrder;
