import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px; /* Consistent spacing between groups */

  label {
    font-size: 14px;
    font-weight: 600;
    color: #242424;
    margin-bottom: -12px; /* Pulls label closer to its input */
    display: block;
  }

  input[type="text"] {
    padding: 14px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    background-color: #f9f9f9;
    font-size: 16px;
    transition: all 0.2s ease;

    &:focus {
      outline: none;
      border-color: #242424;
      background-color: #ffffff;
      box-shadow: 0 0 0 4px rgba(36, 36, 36, 0.05);
    }
  }

  button[type="submit"] {
    background-color: #242424;
    color: #ffffff;
    padding: 16px;
    border: none;
    border-radius: 12px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
      background-color: #000;
    }
  }
`;

export default StyledForm;
