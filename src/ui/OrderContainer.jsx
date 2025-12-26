import styled from "styled-components";

const OrderContainer = styled.div`
  width: 100%;
  max-width: 900px; /* Using max-width for better responsiveness */
  margin: 60px auto; /* Reduced top margin slightly for better balance */
  padding: 40px 30px;
  background-color: #ffffff; 
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03); 

  
  h1 {
    font-size: 32px;
    color: #242424;
    margin-bottom: 24px;
  }

  p {
    font-size: 18px; 
    color: #4a4a4a;
    line-height: 1.6;
  }

  span {
    font-style: italic;
    font-size: 14px;
    color: #adadad;
    display: block;
    margin-top: 10px;
  }


  @media (max-width: 768px) {
    margin: 20px auto;
    padding: 20px;
    width: 95%;
  }
`;

export default OrderContainer;
