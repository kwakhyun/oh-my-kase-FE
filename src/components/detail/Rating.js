import React from "react";
import styled from "styled-components";
import {
  TiStarFullOutline,

  TiStarHalf,
} from "react-icons/ti";
const Rating = ({ star, size, margin }) => {
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
      <span>{star}</span>
      </StarDiv>
    </StyledText>
  );
};

export default Rating;
const StyledText = styled.div`
  font-size: ${(props) => props.size || "18px"};
  margin: ${(props) => props.margin || "10px auto"};
`;
const StyledStars = styled.div`
  color: #ffcc33;
  margin: 0 10px;
`;
const StarDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
`