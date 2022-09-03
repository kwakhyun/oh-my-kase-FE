import React from "react";
import styled from "styled-components";
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarHalf,
} from "react-icons/ti";
const Rating = ({ star_num }) => {
  return (
    <StyledText size="18px">
      <StyledStars>
        {star_num < 0.7 ? (
          <TiStarHalf />
        ) : star_num < 1.3 ? (
          <TiStarFullOutline />
        ) : star_num < 1.8 ? (
          <>
            <TiStarFullOutline />
            <TiStarHalf />
          </>
        ) : star_num < 2.3 ? (
          <>
            <TiStarFullOutline />
            <TiStarFullOutline />
          </>
        ) : star_num < 2.8 ? (
          <>
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarHalf />
          </>
        ) : star_num < 3.3 ? (
          <>
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
          </>
        ) : star_num < 3.8 ? (
          <>
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarHalf />
          </>
        ) : star_num < 4.3 ? (
          <>
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
          </>
        ) : star_num < 4.8 ? (
          <>
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarHalf />
          </>
        ) : star_num <= 5 ? (
          <>
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
          </>
        ) : (
          star_num
        )}
      </StyledStars>
      <h1>{star_num}</h1>
    </StyledText>
  );
};

export default Rating;
const StyledText = styled.div`
  font-size: ${(props) => props.size || "25px"};
  margin: 20px auto 0;
`;
const StyledStars = styled.div`
  color: #ffcc33;
`;
