import styled from "styled-components";

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 75vh;
  background-color: #f2f2f2;
  border-radius: 32px;
  margin: 20px;
  padding: 60px 20px;

  @media (max-width: 768px) {
    min-height: 60vh;
    border-radius: 0;
    margin: 0;
  }
`;
export default HeroWrapper;
