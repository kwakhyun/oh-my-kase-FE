import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Rating from "../detail/Rating";
import {RiHeartFill} from "react-icons/ri"
const Item = (item, ref) => {
  const { restaurant_id, name, address, img, avg_star, favorite_num, comment_num} = item;
  const navigate = useNavigate();

  return (
    <StyledDiv>
      <StyledImg
        src={img}
        alt="img"
        onClick={() => {
          navigate("/detail/" + restaurant_id);
        }}
      />
      <div>
        <StyledText
          onClick={() => {
            navigate("/detail/" + restaurant_id);
          }}
        >
          {name} <span style={{"fontSize":"14px"}}>({comment_num})</span>
        </StyledText>
        <StyledText size="14px">{address}</StyledText>
        <Rating star={avg_star} />
      <StyledFavoriteDiv>
        <StyledText size="15px" color="#F44336" margin="0">
          <RiHeartFill />
        </StyledText>
        <StyledText size="15px" margin="0">
          ({favorite_num})
        </StyledText>
      </StyledFavoriteDiv>
      </div>
    </StyledDiv>
  );
};

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
const StyledFavoriteDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledText = styled.div`
  font-size: ${(props) => props.size || "20px"};
  margin: ${(props) => props.margin || "13px auto"};
  color: ${(props) => props.color};
`;