import styled from "styled-components";

const ReceivedButton = styled.button`
  background: #242424;
  color: #f2f2f2;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  height: fit-content;

  &:hover {
    background: #000;
    transform: translateY(-1px);
  }
`;

export default ReceivedButton;
