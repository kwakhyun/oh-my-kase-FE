import React from "react";
import styled from "styled-components";

import Rating from "./Rating";
const DetailInfo = ({name, address, star_num}) => {
  console.log(address)
  console.log(name)
  console.log(star_num)
  return (
    <StyledDiv>
      <StyledText size="25px">{name}</StyledText>
      <Rating star_num={star_num}/>
    </StyledDiv>
  );
};

export default DetailInfo;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin: 20px auto 0;
  border-radius: 7px;
  font-size: 0.7em;
  transform: translateY(-50px);
  box-shadow: 1px 1px 15px grey;
  background-color: white;

`;
const StyledText = styled.div`
  font-size: ${(props) => props.size || "25px"};
  margin: 20px auto 0;
`;
const StyledStars = styled.div`
color: #ffcc33
`