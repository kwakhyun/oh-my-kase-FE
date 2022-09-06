import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledDiv>
     <StyledLogo
        src="https://user-images.githubusercontent.com/78805018/188594860-c7225de1-176b-49b3-8a23-1a0145281468.png"
        alt="img"
      />
     
      <StyledLogo
        src="https://user-images.githubusercontent.com/78805018/188540340-1798ad46-ab7b-438d-8105-579376f3c43f.png"
        alt="img"
      /> 
      <StyledLogo
        src="https://user-images.githubusercontent.com/78805018/188122251-16068eba-6562-49c8-9669-086f68e2b3fe.png"
        alt="img"
      />
    </StyledDiv>
  );
};

export default Footer;

const StyledDiv = styled.div`
height: 420px;
width: 100vw;
overflow-x: hidden;
`
const StyledLogo = styled.img`
  width: 400px;
`;
