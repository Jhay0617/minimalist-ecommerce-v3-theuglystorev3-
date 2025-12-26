import styled from "styled-components";

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 1001; 

  @media (max-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default MenuButton;
