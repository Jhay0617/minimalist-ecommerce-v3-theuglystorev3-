import styled from "styled-components";

const CheckOutContainer = styled.div`
  background: #f9f9f9;
  padding: 32px;
  border-radius: 20px;
  border: 1px solid #f2f2f2;
  max-width: 400px;
  height: fit-content;
  position: sticky;
  top: 100px;
  .summary-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    font-size: 16px;
    color: #666;
  }

  .total-row {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 2px solid #242424;
    font-size: 22px;
    font-weight: 800;
    color: #242424;
  }

  select {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ddd;
    margin-bottom: 24px;
    background: #fff;
    cursor: pointer;
  }

  button {
    width: 100%;
    background: #242424;
    color: #fff;
    padding: 18px;
    border: none;
    border-radius: 12px;
    font-weight: 700;
    font-size: 16px;
    margin-top: 24px;
    transition: all 0.2s;

    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      background: #000;
      transform: translateY(-2px);
    }
  }
`;

export default CheckOutContainer;
