import { motion } from "framer-motion";
import styled from "styled-components";

export const SectionWrapper = styled.div`
  max-width: 1350px;
  margin: 80px auto;
  padding: 0 20px;
`;
export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 32px;

  h2 {
    font-size: 32px;
    color: #242424;
    margin: 0;
  }

  button {
    background: none;
    border: none;
    border-bottom: 2px solid #242424;
    padding-bottom: 4px;
    font-weight: 600;
    cursor: pointer;
    color: #242424;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const FeaturedProductGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
