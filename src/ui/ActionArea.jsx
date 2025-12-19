import styled from "styled-components";

const ActionArea = styled.div`
  .price {
    font-size: 1.2rem;
    font-weight: 800;
    color: #242424;
  }

  .primary-btn {
    width: 100%;
    background-color: #242424;
    color: #c4c4c4;
    border: none;
    padding: 12px;
    border-radius: 8px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }

  .counter-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f5f5f5;
    padding: 6px 12px;
    border-radius: 8px;
  }

  .qty-btns {
    display: flex;
    align-items: center;
    gap: 12px;

    button {
      background: none;
      border: none;
      font-size: 1.2rem;
      cursor: pointer;
      color: #242424;
    }
  }
`;
export default ActionArea;
