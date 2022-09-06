import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RiHeartFill } from "react-icons/ri";
import BestRating from "./BestRating";
const BestPickItem = ({
  img,
  restaurant_id,
  name,
  comment_num,
  address,
  favorite_num,
  avg_star,
}) => {
  const navigate = useNavigate();
  const district = address.split(" ")[1];
  return (
    <StyledDiv>
      <StyledImg
        src={img}
        alt="img"
        onClick={() => {
          navigate("/detail/" + restaurant_id);
        }}
      />
      <StyledText
        onClick={() => {
          navigate("/detail" + restaurant_id);
        }}
      >
        {name}
      </StyledText>
      <StyledRating>
        <BestRating star={avg_star} />
        <span style={{ fontSize: "14px" }}>{comment_num}개 리뷰</span>
      </StyledRating>
      <StyledText size="14px">{district}</StyledText>
    </StyledDiv>
  );
};

export default BestPickItem;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 230px;
  margin: 10px 30px 0 0;
  border-radius: 5px;
  font-size: 0.7em;
`;
const StyledImg = styled.img`
  object-fit: cover;
  width: 240px;
  height: 140px;
  margin: 0 auto 0;
`;
const StyledRating = styled.div`
  display: flex;
`;
const StyledText = styled.div`
  display: flex;
  font-size: ${(props) => props.size || "15px"};
  margin: ${(props) => props.margin || "12px 0"};
  color: ${(props) => props.color};
`;
