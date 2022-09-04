import React from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import ReviewItem from './ReviewItem';

const Review = ({commentList}) => {
  
  return (
    <>
    <StyledText size="22px">Review</StyledText>
    <ReviewItem commentList={commentList}/>
    <ReviewItem/>
    <ReviewItem/>
  </>
  );
};

export default Review;
const StyledText = styled.h1`
  font-size: ${(props) => props.size || "25px"};
  margin: 30px auto 40px;
  line-height: ${(props) => props.line || "30px"};
`;
