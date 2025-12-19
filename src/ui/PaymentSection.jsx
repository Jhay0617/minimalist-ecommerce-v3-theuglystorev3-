import styled from "styled-components";

const PaymentSection = styled.div`
  background: #f2f2f2;
  padding: 20px;
  border-radius: 12px;
  margin-top: 10px;

  .method-option {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background: #ffffff;
    margin-bottom: 10px;
    border-radius: 8px;
    cursor: pointer;
    border: 1px solid transparent;

    &.selected {
      border-color: #242424;
    }
  }
`;

export default PaymentSection;
