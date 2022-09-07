import React, { useRef, useState } from "react";
import styled from "styled-components";
import CountingStar from "./CountingStar";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { detailPageAPI } from "../../../shared/api";

const ReviewEdit = ({ editData, editReview, setEditReview }) => {
  const [star, setStar] = useState(null);
  const content = useRef(null);

  const queryClient = useQueryClient();
  const { mutate } = useMutation(detailPageAPI.editComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
      alert("리뷰가 수정되었습니다.");
      setEditReview(false);
    },
  });

  return (
    <StyledDiv>
      <StyledText>리뷰 수정하기</StyledText>
      <span>{editData.nickname}</span>
      <CountingStar star={editData.star} setStar={setStar} />
      <StyledTextArea
        ref={content}
        defaultValue={editData.content}
      ></StyledTextArea>
      <StyledButton
        onClick={() => {
          mutate({
            comment_id: editData.comment_id,
            star: star,
            content: content.current.value,
          });
        }}
      >
        완료
      </StyledButton>
      <StyledButton
        onClick={() => {
          setEditReview(!editReview);
        }}
      >
        취소
      </StyledButton>
    </StyledDiv>
  );
};

export default ReviewEdit;

const StyledDiv = styled.div``;
const StyledTextArea = styled.textarea`
  width: 80vw;
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
