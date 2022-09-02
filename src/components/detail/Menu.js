import React from 'react';
import styled from "styled-components";

const Menu = () => {
  return (
    <>
      <StyledText size="22px">메뉴</StyledText>
      <StyledText size="18px">런치 50,000</StyledText>
      <StyledText size="18px">디너 80,000</StyledText>
    </>
  );
};

export default Menu;
const StyledText = styled.h1`
  font-size: ${(props) => props.size || "25px"};
  margin: 30px auto 30px;
  line-height: ${(props) => props.line || "30px"};
`;
