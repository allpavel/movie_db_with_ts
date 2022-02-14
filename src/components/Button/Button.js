import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  display: block;
  background: gray;
  width: 25%;
  min-width: 200px;
  height: 60px;
  border-radius: 30px;
  color: white;
  border: 0;
  font-size: 1.2rem;
  margin: 20px auto;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

export const Button = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
