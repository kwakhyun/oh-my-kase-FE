import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledDiv>
      <StyledLogo
        src="https://user-images.githubusercontent.com/78805018/188122251-16068eba-6562-49c8-9669-086f68e2b3fe.png"
        alt="img"
      />
    </StyledDiv>
  );
};

export default Footer;

const StyledDiv = styled.div`
height: 200px;
width: 100vw;
overflow-x: hidden;
`
const StyledLogo = styled.img`
  width: 400px;
`;
