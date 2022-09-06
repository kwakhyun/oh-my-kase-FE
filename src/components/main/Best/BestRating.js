import React from "react";
import styled from "styled-components";
import {
  TiStarFullOutline,

  TiStarHalf,
} from "react-icons/ti";
const BestRating = ({ star, size, margin }) => {
  const avg = star?.toFixed(1)
  return (
    <StyledText size={size} margin={margin}>
      <StarDiv>
      <StyledStars>
        {star < 0.7 ? (
          <TiStarHalf />
        ) : star < 1.3 ? (
          <TiStarFullOutline />
        ) : star < 1.8 ? (
          <>
            <TiStarFullOutline />
            <TiStarHalf />
          </>
        ) : star < 2.3 ? (
          <>
            <TiStarFullOutline />
            <TiStarFullOutline />
          </>
        ) : star < 2.8 ? (
          <>
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarHalf />
          </>
        ) : star < 3.3 ? (
          <>
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
          </>
        ) : star < 3.8 ? (
          <>
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarHalf />
          </>
        ) : star < 4.3 ? (
          <>
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
          </>
        ) : star < 4.8 ? (
          <>
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarHalf />
          </>
        ) : star <= 5 ? (
          <>
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
          </>
        ) : (
          star
        )}
      </StyledStars>
      </StarDiv>
    </StyledText>
  );
};

export default BestRating;
const StyledText = styled.div`
  font-size: 15px;
`;
const StyledStars = styled.div`
  color: #ffcc33;
`;
const StarDiv = styled.div`
margin: 0 5px 0 0;
`