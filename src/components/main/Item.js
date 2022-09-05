import React, { useState } from "react";
import styled from "styled-components";
import {RiHeartFill, RiHeartAddLine} from'react-icons/ri'
import { useNavigate } from "react-router-dom";
import Rating from "../detail/Rating";

const Item = React.forwardRef((item,ref) => {
  const {restaurant_id, name, address, restaurant_img, avg_star, favorite} = item
  const navigate = useNavigate()
  const [like, setLike] = useState(false);
  return (
    <StyledDiv>
      <StyledImg src={restaurant_img} alt='img' onClick={()=>{navigate('/detail/'+restaurant_id)}}/>
      <div>
      <StyledFavorite onClick={()=>{setLike(!like)}}>{favorite ? <RiHeartFill /> : <RiHeartAddLine />}</StyledFavorite>
      <StyledText  onClick={()=>{navigate('/detail'+restaurant_id)}}>{name}</StyledText>
      <StyledText size="15px">{address}</StyledText>
      <Rating star={avg_star}/>
      </div>
      <div ref={ref}/>
    </StyledDiv>
  );
});

export default Item;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  height: 350px;
  margin: 20px auto;
  border-radius: 5px;
  font-size: 0.7em;
  box-shadow: 1px 1px 15px grey;
`;
const StyledImg = styled.img`
  object-fit: cover;
  width: 90vw;
  height: 220px;
  margin: 0 auto 0;
`;
const StyledText = styled.p`
  font-size: ${(props) => props.size || "20px"};
  margin: 15px;
`;
const StyledFavorite = styled.div`
  margin: 10px;
  right: 25px;
  padding: 2px;
  font-size: 28px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  color: #F44336;
  position: absolute;
  align-items: center;
  background-color: transparent;
  box-shadow: 1px 1px 15px #ccc;
`;