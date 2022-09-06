import React from "react";
import styled from "styled-components";
import { IoMdArrowDropupCircle } from "react-icons/io";
const TopScrollButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <StyledTopScrollButton onClick={scrollToTop}>
      <IoMdArrowDropupCircle />
    </StyledTopScrollButton>
  );
};

export default TopScrollButton;

const StyledTopScrollButton = styled.div`
  background-color: transparent;
  text-align: center;
  font-size: 45px;
  color: #aaa;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;
