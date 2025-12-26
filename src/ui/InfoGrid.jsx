import styled from "styled-components";

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  background: #ffffff;
  padding: 24px;
  border-radius: 12px;
  margin-bottom: 30px;
  border: 1px solid #f2f2f2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default InfoGrid;
