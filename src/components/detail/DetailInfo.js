import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RiHeartFill, RiHeartAddLine } from "react-icons/ri";
import Rating from "./Rating";
import { useMutation } from "react-query";
import { detailPageAPI } from "../../shared/api";
import { useParams } from "react-router-dom";

const DetailInfo = ({ name, avg_star, favorite, favorite_num }) => {
  const [like, setLike] = useState(null);
  const { restaurant_id } = useParams();
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    setLike(favorite);
  }, [favorite]);

  const addFavorite = useMutation(detailPageAPI.addFavorite, {
    onSuccess: () => {
      setLike(!like);
    },
  });

  const cancelFavorite = useMutation(detailPageAPI.cancelFavorite, {
    onSuccess: () => {
      setLike(!like);
    },
  });

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
          ({favorite_num})
        </StyledText>
        {token ? (
          <StyledFavorite
            onClick={() => {
              if (like) {
                cancelFavorite.mutate(restaurant_id);
              } else {
                addFavorite.mutate(restaurant_id);
              }
              // setLike(favoriteClickHandler);
            }}
          >
            {like ? <RiHeartFill /> : <RiHeartAddLine />}
          </StyledFavorite>
        ) : null}
      </StyledFavoriteDiv>
    </StyledDiv>
  );
};

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

export default DetailInfo;
