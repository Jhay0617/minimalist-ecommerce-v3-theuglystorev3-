import styled from "styled-components";

export const MainHeadline = styled.h1`
  font-size: clamp(40px, 10vw, 110px);
  font-weight: 800;
  color: #242424;
  line-height: 0.95;
  letter-spacing: -0.04em;
  margin-bottom: 32px;
  max-width: 1000px;
  text-transform: uppercase;
`;

export const SubHeadline = styled.h2`
  font-size: clamp(16px, 2vw, 20px);
  color: #666666;
  max-width: 550px;
  line-height: 1.6;
  margin-bottom: 40px;
`;
