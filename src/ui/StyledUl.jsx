import styled from "styled-components";

const StyledUl = styled.ul`
  display: flex;
  gap: 30px;
  font-size: 20px;
  list-style: none;

 


  @media (max-width: 992px) {
    position: fixed;
    top: 0;
    right: -100%; 
    width: 280px;
    height: 100vh;
    background: rgba(242, 242, 242, 0.95);
    backdrop-filter: blur(10px); 
    flex-direction: column;
    padding: 100px 30px;
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
    z-index: 1000;

    &.open {
      right: 0; 
    }

    a {
      width: 100%;
    }
  }
`;

export default StyledUl;
