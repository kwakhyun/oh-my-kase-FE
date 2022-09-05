import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate()
  
  return (
    <StyledHeader onClick={()=>{navigate('/전체')}}>
      {/* <StyledLogo
        src="https://user-images.githubusercontent.com/78805018/188504828-ba2652ca-038f-44c9-a66d-5ca8ed85cf81.png"
        alt="img"
      />
      <StyledLogo
        src="https://user-images.githubusercontent.com/78805018/188503427-f69409f8-15b6-4fd7-aa2b-13eab0c19ec0.png"
        alt="img"
      /> */}
      <StyledLogo
        src="https://user-images.githubusercontent.com/78805018/188122251-16068eba-6562-49c8-9669-086f68e2b3fe.png"
        alt="img"
      />
    </StyledHeader>
  );
};
const StyledHeader = styled.div`
width: 300px;
margin: 30px auto;
`;
const StyledLogo = styled.img`
  width: 250px;
  transition: .5s
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
