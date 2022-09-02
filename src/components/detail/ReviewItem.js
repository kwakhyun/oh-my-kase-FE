import React from "react";
import styled from "styled-components";
const ReviewItem = () => {
  return (
    <StyledDiv>
      <h3>time</h3>
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