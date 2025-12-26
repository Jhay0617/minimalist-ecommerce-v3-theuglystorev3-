import styled from "styled-components";

const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 100px 20px;
  max-width: 500px;
  margin: 60px auto;
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid #f2f2f2;

  img {
    width: 150px;
    height: auto;
    margin-bottom: 30px;
    opacity: 0.6; 
  }

  h2 {
    font-size: 24px;
    color: #242424;
    margin-bottom: 20px;
  }

  button {
    background: #242424;
    color: #fff;
    padding: 14px 32px;
    border: none;
    border-radius: 50px; 
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #000;
      transform: translateY(-2px);
    }
  }
`;

export default Empty;
