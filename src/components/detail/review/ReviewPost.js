import React from 'react';
import styled from 'styled-components';
import Stars from './CountingStar';

const PostReview = ({setPostReview, postReview}) => {
  return (
    <StyledDiv>
      <StyledText>리뷰 작성하기</StyledText>
      <span>게시자 이름</span>
      <Stars/>
      <StyledTextArea></StyledTextArea>
      <StyledButton>Submit</StyledButton>
      <StyledButton onClick={()=>{setPostReview(!postReview)}}>Cancel</StyledButton>
    </StyledDiv>
  );
};

export default PostReview;

const StyledDiv = styled.div`
`
const StyledTextArea=styled.textarea`
width: 80vw;
border: none;
height: 150px;
border-radius:10px;
resize: none;
margin: 20px;
box-shadow: 10px 5px 20px grey;
outline: none;

`
const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  margin: 0 20px 20px;
  padding: 5px;
`;
const StyledText = styled.div`
  font-size: 16px;
  margin: 30px auto 40px;
  line-height: 5px;
  color: #555;
  font-weight: bold;
`;