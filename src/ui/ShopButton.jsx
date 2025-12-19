import styled from "styled-components";

const ShopButton = styled.button`
  background-color: #242424;
  color: #f2f2f2;
  padding: 18px 40px;
  font-size: 18px;
  font-weight: 700;
  border: none;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #000000;
    transform: translateY(-4px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

export default ShopButton;
