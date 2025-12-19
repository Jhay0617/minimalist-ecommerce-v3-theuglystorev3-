import { motion } from "framer-motion";
import styled from "styled-components";

const WishContainer = styled(motion.div)`
  background: #ffffff;
  border: 1px solid #f2f2f2;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative; /* For the absolute positioned trash icon */
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }

  h2 {
    font-size: 16px;
    font-weight: 600;
    color: #242424;
    margin: 12px 0 4px 0;
    /* Keeps all cards the same height */
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: contain;
    background: #f9f9f9;
    border-radius: 12px;
    padding: 10px;
  }

  span {
    font-size: 13px;
    color: #adadad;
    height: 3.2em; /* Fixes height for 2 lines of description */
    overflow: hidden;
    margin-bottom: 12px;
  }

  p {
    font-size: 18px;
    font-weight: 700;
    color: #242424;
    margin-bottom: 16px;
  }

  .btn-move {
    background: #242424;
    color: #ffffff;
    border: none;
    padding: 12px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    font-weight: 600;

    &:hover {
      background: #000;
    }
  }

  .btn-remove {
    position: absolute;
    top: 30px;
    right: 30px;
    background: #ffffff;
    border: 1px solid #f2f2f2;
    color: #adadad;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: #ff4d4d;
      border-color: #ff4d4d;
    }
  }
`;

export default WishContainer;
