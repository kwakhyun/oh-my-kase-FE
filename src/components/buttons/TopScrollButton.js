import React from "react";
import styled from "styled-components";
import { TbArrowBigUpLines } from "react-icons/tb";
const TopScrollButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <StyledTopScrollButton onClick={scrollToTop}>
      <TbArrowBigUpLines />
    </StyledTopScrollButton>
  );
};

export default TopScrollButton;

const StyledTopScrollButton = styled.div`
  background-color: transparent;
  text-align: center;
  background-color: white;
  width: 40px;
  height: 40px;
  font-size: 40px;
  border-radius: 50%;
  color: black;
  position: fixed;
  bottom: 20px;
  right: 20px;
  opacity: .6;
`;
