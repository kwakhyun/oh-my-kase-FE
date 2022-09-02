import React from 'react';
import styled from "styled-components";
import ReviewItem from './ReviewItem';

const Review = () => {
  return (
    <>
    <StyledText size="22px">리뷰</StyledText>
    <ReviewItem/>
    <ReviewItem/>
    <ReviewItem/>
  </>
  );
};

export default Review;
const StyledText = styled.h1`
  font-size: ${(props) => props.size || "25px"};
  margin: 30px auto 30px;
  line-height: ${(props) => props.line || "30px"};
`;
