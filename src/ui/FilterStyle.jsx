import styled from "styled-components";

export const FilterContainer = styled.div`
  max-width: 1350px;
  margin: 60px auto 40px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  h1 {
    font-size: clamp(32px, 5vw, 48px);
    font-weight: 800;
    color: #242424;
    text-transform: uppercase;
    letter-spacing: -1px;
  }

  .filter-label {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #adadad;
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FilterButton = styled.button`
  padding: 10px 24px;
  border-radius: 50px;
  border: 1px solid #f2f2f2;
  background: ${(props) => (props.$active ? "#242424" : "#ffffff")};
  color: ${(props) => (props.$active ? "#f2f2f2" : "#242424")};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: capitalize;

  &:hover {
    border-color: #242424;
    transform: translateY(-2px);
  }
`;
