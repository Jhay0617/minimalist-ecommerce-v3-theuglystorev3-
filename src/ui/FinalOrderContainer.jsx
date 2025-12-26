import styled from "styled-components";

const FinalOrderContainer = styled.div`
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 16px;
  position: sticky; 
  top: 20px;
  border: 1px solid #f2f2f2;

  @media (max-width: 1024px) {
    position: static; 
    width: 100%;
    padding: 20px;
  }
`;

export default FinalOrderContainer;
