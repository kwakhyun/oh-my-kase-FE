import React, { useState } from 'react';
import styled from "styled-components";
import ReviewPost from './ReviewPost';
import ReviewEdit from './ReviewEdit';
import ReviewItem from './ReviewItem';

const Review = ({commentList}) => {
  const [editReview, setEditReview] = useState(false)
  const [postReview, setPostReview] = useState(false)

  if(editReview === true){         //review edit 작성 component
    return <>
    <StyledText size="22px">Review</StyledText>
    <ReviewEdit editReview={editReview} setEditReview={setEditReview}/>  
    </>                
}
else if(postReview === true){   //review 작성 component
    return <>
    <StyledText size="22px">Review</StyledText>
    <ReviewPost postReview={postReview} setPostReview={setPostReview}/>        
    </>
}
else{                         //review list component
    return <>                
    <StyledText size="22px">Review</StyledText>
    <StyledText weight="bold" color="#4488F7" size="16px" line="5px" onClick={()=>{setPostReview(!postReview)}}>리뷰 작성하기</StyledText>
    {commentList.map((review,idx)=> (<ReviewItem key={idx} {...review} setEditReview={setEditReview} editReview={editReview}/> ))}
    </>
}
// return (
//   <>
//   <StyledText size="22px">Review</StyledText>
//   {editReview?null:postReview?null:<StyledText weight="bold" color="#4488F7" size="16px" line="5px" onClick={()=>{setPostReview(!postReview)}}>리뷰 작성하기</StyledText>}
//   {postReview?<ReviewPost postReview={postReview} setPostReview={setPostReview}/>: null}
//   {editReview?<ReviewEdit editReview={editReview} setEditReview={setEditReview}/>: null}
//   {(postReview||editReview)?null:commentList.map((review,idx)=>
//       <ReviewItem key={idx} {...review} setEditReview={setEditReview} editReview={editReview}/>
//       )
//     }
// </>
// );
};


export default Review;
const StyledText = styled.div`
  font-size: ${(props) => props.size || "25px"};
  margin: 30px auto 40px;
  line-height: ${(props) => props.line || "30px"};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  `;

