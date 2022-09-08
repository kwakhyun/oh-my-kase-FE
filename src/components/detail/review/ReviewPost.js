import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CountingStar from "./CountingStar";
import { useMutation } from "react-query";
import { detailPageAPI } from "../../../shared/api";

const PostReview = ({ setPostReview, postReview }) => {
  const [star, setStar] = useState(null);
  const content = useRef(null);
  const { restaurant_id } = useParams();

  const { mutate } = useMutation(detailPageAPI.postComment, {
    onSuccess: () => {
      alert("리뷰가 등록되었습니다.");
      setPostReview(false);
    },
  });

  return (
    <StyledDiv>
      <StyledText>리뷰 작성하기</StyledText>
      <CountingStar setStar={setStar} />
      <StyledTextArea ref={content} maxLength="200"></StyledTextArea>
      <p>리뷰는 공백 포함 200자 까지 등록 가능합니다.</p>
      <StyledButton
        onClick={() => {
          mutate({
            restaurant_id: restaurant_id,
            star: star,
            content: content.current.value,
          });
        }}
      >
        등록
      </StyledButton>
      <StyledButton
        onClick={() => {
          setPostReview(!postReview);
        }}
      >
        취소
      </StyledButton>
    </StyledDiv>
  );
};

export default PostReview;

const StyledDiv = styled.div`
  width: 100%;
`;
const StyledTextArea = styled.textarea`
  width: 80%;
  border: none;
  height: 100px;
  border-radius: 10px;
  resize: none;
  margin: 20px;
  padding: 10px;
  box-shadow: 10px 5px 20px grey;
  font-family: Arial, Helvetica, sans-serif;
  outline: none;
`;

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
