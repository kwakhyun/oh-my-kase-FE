import React, { useState } from "react";
import styled from "styled-components";
import { RiHeartFill, RiHeartAddLine } from "react-icons/ri";
import Rating from "./Rating";
import { updateData } from "../../redux/modules/mainSlice";
import { useDispatch } from "react-redux";

const DetailInfo = ({ name, avg_star, restaurant_id, favorite }) => {
  const dispatch = useDispatch()
  const [like, setLike] = useState(false);
  const favoriteClickHandler = (e) => {
    const updateFavorite = {
      restaurant_id,
      favorite: !favorite,
    };
    dispatch(updateData(updateFavorite));
    console.log(restaurant_id);
    console.log(favorite);
  };

  return (
    <StyledDiv>
      <StyledText size="25px" margin="20px auto 10px">
        {name}
      </StyledText>
      <Rating star={avg_star} />
      <StyledFavoriteDiv>
        <StyledText size="15px" color="#F44336" margin="0">
          <RiHeartFill />
        </StyledText>
        <StyledText size="15px" margin="0">
          (15)
        </StyledText>
        <StyledFavorite
          onClick={() => {
            setLike(favoriteClickHandler);
          }}
        >
          {favorite ? <RiHeartFill /> : <RiHeartAddLine />}
        </StyledFavorite>
      </StyledFavoriteDiv>
    </StyledDiv>
  );
};

export default DetailInfo;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin: 20px auto 0;
  border-radius: 7px;
  font-size: 0.7em;
  transform: translateY(-50px);
  box-shadow: 1px 1px 15px grey;
  background-color: white;
`;
const StyledText = styled.div`
  font-size: ${(props) => props.size || "25px"};
  margin: ${(props) => props.margin || "10px auto 25px"};
  color: ${(props) => props.color};
`;
const StyledFavoriteDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto;
`;
const StyledFavorite = styled.div`
  right: 10px;
  padding: 2px;
  font-size: 25px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  color: #f44336;
  position: absolute;
  align-items: center;
  background-color: transparent;
  box-shadow: 1px 1px 15px #ccc;
`;

