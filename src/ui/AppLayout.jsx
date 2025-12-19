import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import useScrollToTop from "../utils/useScrollToTop";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Full screen height */
  width: 100%;
`;

const Main = styled.main`
  flex: 1; /* This is the "Magic Line" - it pushes the footer down */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Ensure padding doesn't cause overflow on mobile */
  padding: 20px;
`;

function AppLayout() {
  useScrollToTop();
  return (
    <LayoutContainer>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </LayoutContainer>
  );
}

export default AppLayout;
