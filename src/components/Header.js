import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate()
  
  return (
    <StyledHeader onClick={()=>{navigate('/전체')}}>
      <StyledLogo
        src="https://user-images.githubusercontent.com/78805018/188070700-b0229f3f-85f6-4f0f-a5be-dd5a05ef3da8.png"
        alt="img"
      />
      <StyledText>
      OhMyKase
      </StyledText>
      <hr></hr>
    </StyledHeader>
  );
};
const StyledHeader = styled.div`
width: 300px;
margin: 30px auto;
`;
const StyledLogo = styled.img`
  width: 160px;
`;
const StyledText = styled.h1`
position: absolute;
font-family: 'Stick No Bills', sans-serif;
font-size: 20px;
top: 30px;
transform: translateX(105px);
color: white;
text-shadow: 2px 2px 7px black;
transition: .4s;
&:hover{
  text-shadow: 2px 2px 20px white;
}
`
export default Header;
