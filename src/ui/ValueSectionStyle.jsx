import styled from "styled-components";

export const ValuePropsSection = styled.div`
  background-color: #f2f2f2;
  padding: 80px 5%;
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

export const PropItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  .icon-box {
    width: 64px;
    height: 64px;
    background: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #242424;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
    color: #242424;
  }
  p {
    font-size: 14px;
    color: #adadad;
    max-width: 250px;
  }
`;
