import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate()
  
  return (
    <StyledHeader onClick={()=>{navigate('/전체')}}>
      <StyledLogo
        src="https://user-images.githubusercontent.com/78805018/188541711-1d8a5e6e-8559-4c80-b5ee-fc5ea35b57d2.png"
        alt="img"
      />
     
      {/* <StyledLogo
        src="https://user-images.githubusercontent.com/78805018/188540340-1798ad46-ab7b-438d-8105-579376f3c43f.png"
        alt="img"
      />  */}
      {/* <StyledLogo
        src="https://user-images.githubusercontent.com/78805018/188122251-16068eba-6562-49c8-9669-086f68e2b3fe.png"
        alt="img"
      /> */}
    </StyledHeader>
  );
};
const StyledHeader = styled.div`
width: 300px;
margin: 30px auto;
`;
const StyledLogo = styled.img`
  width: 200px;
  transition: .5s
`;

export default Header;
