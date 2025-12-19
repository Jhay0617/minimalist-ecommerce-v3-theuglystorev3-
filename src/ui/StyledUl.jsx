import styled from "styled-components";

const StyledUl = styled.ul`
  display: flex;
  gap: 30px;
  font-size: 20px;
  list-style: none;

  /* a {
    color: black;
    text-decoration: none;
    padding: 12px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s ease;

    &:hover {
      background-color: #242424;
      color: #adadad;
    }

    /* NavLink automatically applies this class when active */
  /* &.active {
      background-color: #242424;
      color: #adadad;
    } */
  /* }  */

  /* --- Tablet/Mobile Drawer --- */
  @media (max-width: 992px) {
    position: fixed;
    top: 0;
    right: -100%; /* Hidden off-screen */
    width: 280px;
    height: 100vh;
    background: rgba(242, 242, 242, 0.95);
    backdrop-filter: blur(10px); /* 2025 Glassmorphism */
    flex-direction: column;
    padding: 100px 30px;
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
    z-index: 1000;

    &.open {
      right: 0; /* Slide in */
    }

    a {
      width: 100%;
    }
  }
`;

export default StyledUl;
