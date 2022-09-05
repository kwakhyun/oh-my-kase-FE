import React, { useState } from "react";
import styled from "styled-components";
import Rating from "../Rating";
const ReviewItem = ({
  editReview,
  setEditReview,
  nickname,
  profile_img,
  star,
  content,
  createdAt,
}) => {
  const postedAt = createdAt.slice(0, 10);
  return (
    <StyledDiv>
      <div>
        <StyledSpan style={{ float: "left" }}>{postedAt}</StyledSpan>
      </div>
      <StyledAuthorDiv>
        {profile_img?(
          <StyledImg src={profile_img} onerror="this.style.display='none';" alt=""></StyledImg>
        ) : (
          <StyledImg
            src="https://velog.velcdn.com/images/danchoi/post/fac9c456-b1d5-41fd-b7e0-21a3feb2149f/image.png"
            onerror="this.src='https://velog.velcdn.com/images/danchoi/post/fac9c456-b1d5-41fd-b7e0-21a3feb2149f/image.png';"
            alt=""
          ></StyledImg>
        )}
        <div>
          <StyledSpan>{nickname}</StyledSpan>
          <Rating star={star} size={"12px"} margin={"25px auto 10px"} />
        </div>
        <StyledDiv>
          <StyledSpan>{content}</StyledSpan>
          <StyledDiv></StyledDiv>
          <StyledButton
            onClick={() => {
              setEditReview(!editReview);
            }}
          >
            EDIT
          </StyledButton>
        </StyledDiv>
      </StyledAuthorDiv>
    </StyledDiv>
  );
};
export default ReviewItem;
const StyledDiv = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  margin: 10px 20px;
  display: grid;
  grid-template-rows: 1fr;
`;
const StyledSpan = styled.span`
  font-size: 15px;
`;
const StyledImg = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin: 10px;
  float: left;
`;
const StyledAuthorDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr 9fr;
  word-break: break-all;
`;
const StyledButton = styled.button`
  background-color: transparent;
  color: #4488F7;
  border: none;
  font-weight: bold;
`;
