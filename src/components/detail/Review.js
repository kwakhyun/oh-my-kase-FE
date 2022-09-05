import React from 'react';
import styled from "styled-components";
import ReviewItem from './ReviewItem';

const Review = ({commentList}) => {
  return (
    <>
    <StyledText size="22px">Review</StyledText>
    {commentList.map((review,idx)=>
    <ReviewItem key={idx} {...review}/>
    )}
  </>
  );
};

export default Review;
const StyledText = styled.div`
  font-size: ${(props) => props.size || "25px"};
  margin: 30px auto 40px;
  line-height: ${(props) => props.line || "30px"};
`;
