import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Rating from "../Rating";
import { RiEditFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { detailPageAPI } from "../../../shared/api";

const ReviewItem = ({
  editReview,
  setEditReview,
  setEditData,
  comment_id,
  nickname,
  isAuthor,
  profile_img,
  star,
  content,
  createdAt,
}) => {
  const postedAt = createdAt.slice(0, 10);

  const queryClient = useQueryClient();
  const { mutate } = useMutation(detailPageAPI.deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
  });

  return (
    <>
      <StyledDiv>
        <StyledAuthorDiv>
          {profile_img ? (
            <StyledImg
              src={profile_img}
              onerror="this.style.display='none';"
              alt=""
            ></StyledImg>
          ) : (
            <StyledImg
              src="https://velog.velcdn.com/images/danchoi/post/fac9c456-b1d5-41fd-b7e0-21a3feb2149f/image.png"
              alt=""
            ></StyledImg>
          )}
          <Rating star={star} size={"12px"} />
          <StyledUsername>{nickname}</StyledUsername>
        </StyledAuthorDiv>
        <StyledContent>
          <StyledContentInner className="content">{content}</StyledContentInner>
          <StyledContentInner>
            <StyledContentInnerChild className="content">
              {postedAt}
            </StyledContentInnerChild>
            {isAuthor ? (
              <StyledContentInnerChild>
                <StyledButton
                  onClick={() => {
                    setEditData({
                      comment_id: comment_id,
                      nickname: nickname,
                      star: star,
                      content: content,
                    });
                    setEditReview(!editReview);
                  }}
                >
                  <RiEditFill />
                </StyledButton>
                <StyledButton
                  onClick={() => {
                    window.confirm("리뷰를 삭제하시겠습니까?")
                      ? mutate(comment_id)
                      : alert("취소되었습니다.");
                  }}
                >
                  <MdDelete/>
                </StyledButton>
              </StyledContentInnerChild>
            ) : null}
          </StyledContentInner>
        </StyledContent>
      </StyledDiv>
    </>
  );
};
export default ReviewItem;
const StyledDiv = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  margin: 5px 40px 0 20px;
  word-break: break-all;
  display: grid;
  grid-template-columns: 1.8fr 3fr;
  align-items: center;
  border-bottom: 1px solid #ccc;
  .content {
    margin: 0 0 5px 10px;
  }
`;
const StyledContent = styled.div`
  font-size: 17px;
  grid-template-rows: 3fr 1fr;
`;
const StyledContentInner = styled.div`
  font-size: 15px;
`;
const StyledContentInnerChild = styled.div`
  font-size: 13px;
`;
const StyledUsername = styled.div`
  font-size: 17px;
`;

const StyledImg = styled.img`
  height: 90px;
  width: 90px;
  object-fit: cover;
  border-radius: 50%;
  float: left;
  display: grid;
  grid-template-rows: 2fr 1fr;
`;
const StyledAuthorDiv = styled.div`
  font-size: 15px;
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;
  justify-content: center;
`;
const StyledButton = styled.button`
  font-size: 20px;
  background-color: transparent;
  color: #4488f7;
  border: none;
  font-weight: bold;
  margin: 0 10px;
`;
