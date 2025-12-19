import styled from "styled-components";

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr; /* Stack columns vertically */
    gap: 30px;
  }

  /* Reverse order on mobile so user sees Form BEFORE Summary */
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    .checkout-form-side {
      order: 1; /* Form first */
    }

    .order-summary-side {
      order: 2; /* Summary second */
      background: #f9f9f9;
      margin: 0 -20px; /* Bleed to edges of mobile screen */
      padding: 20px;
    }
  }
`;

export default FormContainer;
