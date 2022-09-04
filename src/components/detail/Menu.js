import React from 'react';
import styled from "styled-components";

const Menu = ({menuList}) => {
  const name = menuList.map(item=>item.name)
  const price = menuList.map(item=>item.price)

  return (
    <>
      <StyledText size="22px">Menu</StyledText>
      <StyledText size="18px">{name}</StyledText>
      <StyledText size="18px">{price}</StyledText>
    </>
  );
};

export default Menu;
const StyledText = styled.h1`
  font-size: ${(props) => props.size || "25px"};
  margin: 30px auto 40px;
  line-height: ${(props) => props.line || "30px"};
`;
