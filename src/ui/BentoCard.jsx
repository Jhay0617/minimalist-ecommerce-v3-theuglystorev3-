import styled from "styled-components";

const BentoCard = styled.div`
  height: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  /* 2. Color & Border Logic (for non-image cards) */
  background-color: ${(props) => (props.$light ? "#f2f2f2" : "#242424")};
  color: ${(props) => (props.$light ? "#242424" : "#f2f2f2")};
  border: ${(props) => (props.$light ? "1px solid #eaeaea" : "none")};

  /* 3. Background Image Logic */
  background-image: ${(props) =>
    props.$bg
      ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${props.$bg})`
      : "none"};
  background-size: cover;
  background-position: center;

  /* 4. Transitions */
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  /* 5. Hover State */
  &:hover {
    transform: scale(1.02);
    /* For cards WITH images: lighten the overlay */
    background-image: ${(props) =>
      props.$bg
        ? `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${props.$bg})`
        : "none"};
    /* For cards WITHOUT images: change solid color */
    background-color: ${(props) => {
      if (props.$bg) return "none"; // Keep image visible
      return props.$light ? "#ffffff" : "#000000";
    }};
  }

  /* 6. Typography */
  h3 {
    font-size: 28px;
    margin-bottom: 8px;
    font-weight: 700;
  }

  p {
    font-size: 14px;
    opacity: 0.8;
  }

  /* 7. Grid Modifiers */
  &.large {
    grid-row: span 2;
  }

  &.wide {
    grid-column: span 2;
    @media (max-width: 768px) {
      grid-column: span 1;
    }
  }
`;

export default BentoCard;
