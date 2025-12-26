import styled from "styled-components";
import ProductItem from "./ProductItem";

const ImageContainer = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9; 
  border-radius: 12px;
  overflow: hidden;

  img {
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  ${ProductItem}:hover & img {
    transform: scale(1.1);
  }
`;

export default ImageContainer;
