import React from "react";
import styled from "styled-components";
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarHalf,
} from "react-icons/ti";
const DetailInfo = () => {
  return (
    <StyledDiv>
      <StyledText size="25px">오마카세 오사이초밥 홍대점</StyledText>
      <StyledText size="35px">
        <StyledStars>
        <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarHalfOutline />
        </StyledStars>
        <h3>4.8</h3>
      </StyledText>
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