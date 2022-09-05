import React from 'react';
import styled from "styled-components";

const Menu = ({menuList}) => {
  return (
    <>
      <StyledText size="22px">Menu</StyledText>
      {menuList.map((menu, idx)=>
      (
        <div key={idx}>
        <StyledText size="20px">{menu.name}</StyledText>
        <StyledText size="20px">{menu.price}</StyledText>
        </div>
      ))}
    </>
  );
};

export default Menu;


const StyledText = styled.p`
  font-size: ${(props) => props.size || "25px"};
  margin: 30px auto 40px;
  line-height: ${(props) => props.line || "30px"};
`;
