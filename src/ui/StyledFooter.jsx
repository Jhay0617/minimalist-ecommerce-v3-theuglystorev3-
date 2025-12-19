import { FaReact } from "react-icons/fa";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #242424;
  color: #adadad;
  padding: 80px 20px 40px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 40px;

  .brand-signature {
    h4 {
      color: #f2f2f2;
      font-size: 22px;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    p {
      font-size: 15px;
      max-width: 500px;
      line-height: 1.6;
    }
  }

  .contact-links {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;

    a {
      display: flex;
      align-items: center;
      gap: 12px;
      background: #333;
      padding: 14px 28px;
      border-radius: 50px;
      color: #f2f2f2;
      text-decoration: none;
      font-size: 14px;
      font-weight: 600;
      transition: all 0.3s ease;
      border: 1px solid transparent;

      &:hover {
        background: #000;
        border-color: #f2f2f2;
        transform: translateY(-3px);
      }
    }
  }

  .tech-footer {
    display: flex;
    gap: 20px;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    opacity: 0.5;
    margin-top: 20px;
  }
`;

export default StyledFooter;
