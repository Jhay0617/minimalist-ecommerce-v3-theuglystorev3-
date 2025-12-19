import styled from "styled-components";

const PriceAndRemove = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100px;
  p {
    margin: 0;
    font-weight: bold;
    color: #242424;
  }
  button {
    color: #ff4d4d;
    background: none;
    cursor: pointer;
    margin-top: 5px;
  }
`;

export default PriceAndRemove;
