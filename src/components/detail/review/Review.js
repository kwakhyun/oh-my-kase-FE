import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ReviewPost from "./ReviewPost";
import ReviewEdit from "./ReviewEdit";
import ReviewItem from "./ReviewItem";
import { v4 } from "uuid";

const Review = ({ comments }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  const [editReview, setEditReview] = useState(false);
  const [postReview, setPostReview] = useState(false);
  const [editData, setEditData] = useState({});

  if (editReview === true) {
    //review 수정하기
    return (
      <>
        <StyledText size="22px">Review</StyledText>
        <ReviewEdit
          editData={editData}
          editReview={editReview}
          setEditReview={setEditReview}
        />
      </>
    );
  } else if (postReview === true) {
    //review 등록하기
    return (
      <>
        <StyledText size="22px">Review</StyledText>
        <ReviewPost postReview={postReview} setPostReview={setPostReview} />
      </>
    );
  } else {
    //review 보여주기
    return (
      <>
        <StyledText size="22px">Review</StyledText>
        {token ? (
          <StyledText
            weight="bold"
            color="#4488F7"
            size="16px"
            line="5px"
            onClick={() => {
              setPostReview(!postReview);
            }}
          >
            {comments?.length === 0
              ? "첫 리뷰를 작성해주세요!"
              : "리뷰 작성하기"}
          </StyledText>
        ) : (
          <StyledText
            weight="bold"
            color="#4488F7"
            size="16px"
            line="5px"
            onClick={() => navigate("/login")}
          >
            {/* 로그인 후 리뷰 작성하기 */}
            로그인 후 리뷰 확인하기
          </StyledText>
        )}

        {comments?.map((item) => (
          <ReviewItem
            key={v4()}
            {...item}
            setEditReview={setEditReview}
            editReview={editReview}
            setEditData={setEditData}
          />
        ))}
      </>
    );
  }
};

export default Review;
const StyledText = styled.div`
  font-size: ${(props) => props.size || "25px"};
  margin: 30px auto 40px;
  line-height: ${(props) => props.line || "30px"};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
`;
