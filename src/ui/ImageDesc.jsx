import styled from "styled-components";

const ImageDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  img {
    max-width: 200px;
  }
  p {
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Show exactly 3 lines */
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export default ImageDesc;
