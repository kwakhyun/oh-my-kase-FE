import React from "react";
import styled from "styled-components";

import Rating from "./Rating";
const DetailInfo = ({name, avg_star}) => {
  return (
    <StyledDiv>
      <StyledText size="25px">{name}</StyledText>
      <Rating star_num={avg_star}/>
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
