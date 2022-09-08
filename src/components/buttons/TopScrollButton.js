import React from "react";
import styled from "styled-components";
import { TiArrowUp } from "react-icons/ti";
const TopScrollButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <StyledTopScrollButton onClick={scrollToTop}>
      <TiArrowUp />
    </StyledTopScrollButton>
  );
};

export default TopScrollButton;

const StyledTopScrollButton = styled.div`
  background-color: transparent;
  text-align: center;
  background-color: white;
  width: 36px;
  height: 36px;
  font-size: 36px;
  border-radius: 50%;
  color: black;
  position: fixed;
  bottom: 20px;
  right: 20px;
  opacity: .6;
`;
