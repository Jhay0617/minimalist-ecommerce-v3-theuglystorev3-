import styled from "styled-components";

const WishListItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
  max-width: 1200px;
  width: 100%;
  margin: 40px auto;
  padding: 0 20px;
`;

export default WishListItemContainer;
