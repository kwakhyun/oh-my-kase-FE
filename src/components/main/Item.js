import React, { useState } from "react";
import styled from "styled-components";
import { TiStar, TiStarOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
const Item = () => {
  const navigate = useNavigate()
  const [like, setLike] = useState(false);
  return (
    <StyledDiv onClick={()=>{navigate('/detail')}}>
      <StyledFavorite onClick={()=>{setLike(!like)}}>{like ? <TiStar /> : <TiStarOutline />}</StyledFavorite>
      <StyledImg src='https://postimagestorage.s3.amazonaws.com/mini_project/3.jpg' alt='img'/>
      <StyledText>스시오마카세</StyledText>
      <StyledText size="18px">대한민국 서울특별시 강남구 학동로 426</StyledText>
      <StyledText size="30px">4.8</StyledText>
    </StyledDiv>
  );
};

export default Item;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 350px;
  margin: 20px auto;
  border-radius: 5px;
  font-size: 0.7em;
  box-shadow: 1px 1px 15px grey;
`;
const StyledImg = styled.img`
  object-fit: cover;
  width: 600px;
  height: 220px;
  margin: 0 auto 0;
  overflow: hidden;
  background-color: #eeeeee;
`;
const StyledText = styled.h1`
  font-size: ${(props) => props.size || "25px"};
`;
const StyledFavorite = styled.div`
  margin: 5px;
  font-size: 30px;
  color: #ffcc33;
  position: absolute;
  align-items: center;
`;
