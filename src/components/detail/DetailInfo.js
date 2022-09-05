import React from "react";
import styled from "styled-components";
import { RiHeartFill } from "react-icons/ri";
import Rating from "./Rating";
const DetailInfo = ({ name, avg_star }) => {
  return (
    <StyledDiv>
      <StyledText size="25px" margin="20px auto 10px">
        {name}
      </StyledText>
      <Rating star={avg_star} />
      <StyledFavoriteDiv>
        <StyledText size="15px" color="#F44336" margin="0">
          <RiHeartFill />
        </StyledText>
        <StyledText size="15px" margin="0">
          (15)
        </StyledText>
      </StyledFavoriteDiv>
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
  margin: ${(props) => props.margin || "10px auto 25px"};
  color: ${(props) => props.color};
`;
const StyledFavoriteDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto;
`;
