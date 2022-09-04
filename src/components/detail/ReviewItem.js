import React from "react";
import styled from "styled-components";
import Rating from "./Rating";
const ReviewItem = ({nickname, profile_img, star, content, createdAt}) => {

  const postedAt = createdAt.slice(0,10)
  return (
    <StyledDiv>
      <div>
      <StyledSpan style={{"float":"left"}}>{postedAt}</StyledSpan>
      </div>
      <StyledAuthorDiv>
      <StyledImg src={profile_img} alt="(img) :"></StyledImg>
      <div>
      <StyledSpan>{nickname}</StyledSpan>
      <Rating star={star}/>
      </div>
      <StyledSpan>{content}</StyledSpan>
      </StyledAuthorDiv>
    </StyledDiv>
  );
};
export default ReviewItem;
const StyledDiv = styled.div`
font-family: Arial, Helvetica, sans-serif;
margin: 5px 20px;
display: grid;
grid-template-rows: 1fr 2fr;
`
const StyledSpan = styled.span`
font-size: 15px;
`
const StyledImg = styled.img`
height: 50px;
border-radius: 50%;
margin: 10px;
float: left;
`
const StyledAuthorDiv = styled.div`
display: grid;
grid-template-columns: 1fr 2fr 7fr;
word-break:break-all;
`