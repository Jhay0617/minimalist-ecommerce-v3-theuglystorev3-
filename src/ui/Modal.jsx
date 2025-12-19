import { useEffect } from "react";
import { createPortal } from "react-dom";
import { HiOutlineXMark } from "react-icons/hi2";
import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px); /* 2025 Glassmorphism */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  padding: 20px;
  animation: op 0.5s ease-in-out forwards;

  @keyframes op {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const Content = styled.div`
  background: #ffffff;
  width: 100%;
  max-width: 1300px;
  height: 90vh;
  border-radius: 24px;
  position: relative;
  overflow-y: auto;
  padding: 40px;

  /* Scrollbar styling for a cleaner 2025 look */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #f2f2f2;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    height: 100vh; /* Full screen on mobile */
    border-radius: 0; /* Remove rounding for "app-like" feel */
    padding: 60px 20px 20px 20px; /* More top padding for the close button */
  }

  /* Animation for sliding up */
  animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  @keyframes slideUp {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  /* Close Button in top right */
  .close-button {
    position: absolute;
    top: 24px;
    right: 24px;
    background: #f2f2f2;
    border: none;
    padding: 8px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 10;
    &:hover {
      background: #e0e0e0;
    }
  }
`;
function Modal({ children, onClose }) {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
      const keyDown = (e) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", keyDown);
      return () => window.removeEventListener("keydown", keyDown);
    };
  }, [onClose]);

  return createPortal(
    <StyledModal>
      <Content>
        <button className="close" onClick={onClose}>
          <HiOutlineXMark size={25} />
        </button>

        {children}
      </Content>
    </StyledModal>,
    document.body
  );
}

export default Modal;
