import styled from "styled-components";

const BentoGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: 240px 240px;
  gap: 20px;
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

export default BentoGridContainer;
