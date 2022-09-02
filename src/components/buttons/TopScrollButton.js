import React from "react";
import styled from "styled-components";
const TopScrollButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return <StyledTopScrollButton onClick={scrollToTop}>TOP</StyledTopScrollButton>;
};

export default TopScrollButton;

const StyledTopScrollButton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  margin: 5px 2px;
  height: 60px;
  width: 60px;
  background-color: transparent;
  width: "100px";
  font-size: 20px;
  color: #aaa;
  border-radius: 50%;
  border: none;
  transition: 0.3s;
  box-shadow: 1px 1px 15px grey;

  &:hover {
    background-color: #bbb;
    color: white;
  }
`;