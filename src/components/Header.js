import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate()
  
  return (
    <StyledHeader onClick={()=>{navigate('/')}}>
      <StyledLogo
        src="https://user-images.githubusercontent.com/78805018/188070700-b0229f3f-85f6-4f0f-a5be-dd5a05ef3da8.png"
        alt="img"
      />
      <StyledText>
      OhMyKase
      </StyledText>
    </StyledHeader>
  );
};
const StyledHeader = styled.div`
width: 300px;
margin: 30px auto;
`;
const StyledLogo = styled.img`
  height: 120px;
`;
const StyledText = styled.h1`
position: absolute;
font-family: 'Bungee Hairline', cursive;
font-size: 40px;
top: 38px;
transform: translateX(40px);
color: white;
font-weight: bold;
text-shadow: 1px 1px 7px black;
transition: .4s;
&:hover{
  text-shadow: 2px 2px 20px white;
}
`
export default Header;
