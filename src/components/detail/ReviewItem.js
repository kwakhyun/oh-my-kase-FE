import React from "react";
import styled from "styled-components";
const ReviewItem = ({commentList}) => {
  const nickname = commentList.map(item=>item.nickname)
  const profile_img = commentList.map(item=>item.profile_img)
  const star = commentList.map(item=>item.star)
  const content = commentList.map(item=>item.content)
  const createdAt = commentList.map(item=>item.createdAt)
  return (
    <StyledDiv>
      <h1>name</h1>
      <div>
        <h1>rating</h1>
        <h1>star</h1>
      </div>
      <h1>content</h1>
    </StyledDiv>
  );
};
export default ReviewItem;
const StyledDiv = styled.div`
margin: 20px;
`