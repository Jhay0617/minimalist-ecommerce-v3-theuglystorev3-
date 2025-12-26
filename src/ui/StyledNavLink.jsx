import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  color: #1a1a1a;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #f0f0f0;
  }

  &.active {
    background-color: #242424;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 18px;
  }
`;

export default StyledNavLink;
