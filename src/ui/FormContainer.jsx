import styled from "styled-components";

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr; 
    gap: 30px;
  }


  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    .checkout-form-side {
      order: 1; 
    }

    .order-summary-side {
      order: 2; 
      background: #f9f9f9;
      margin: 0 -20px; 
      padding: 20px;
    }
  }
`;

export default FormContainer;
