import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo
        src="https://user-images.githubusercontent.com/78805018/188070700-b0229f3f-85f6-4f0f-a5be-dd5a05ef3da8.png"
        alt="img"
      />
      <StyledText>
      ohMyKase
      </StyledText>
    </StyledHeader>
  );
};
const StyledHeader = styled.div`
width: 300px;
margin: 50px auto;
`;
const StyledLogo = styled.img`
  height: 120px;
`;
const StyledText = styled.h1`
position: absolute;
font-size: 60px;
width: 300;
top: 73px;
transform: translateX(80px);
margin: auto;
color: white;
text-shadow: 2px 2px 15px black;
`
export default Header;
