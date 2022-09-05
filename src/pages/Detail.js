import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { RiHeartFill, RiHeartAddLine } from "react-icons/ri";
import MyPageButton from "../components/buttons/MyPageButton";
import DetailInfo from "../components/detail/DetailInfo";
import DetailImage from "../components/detail/DetailImage";
import { useDispatch, useSelector } from "react-redux";
import { getDetailData } from "../redux/modules/detailSlice";
import { useParams } from "react-router-dom";
import Tabs from "../components/detail/Tabs";

const Detail = () => {
  const dispatch = useDispatch();
  const [like, setLike] = useState(true);
  const { restaurant_id } = useParams();
  const item = useSelector((state) => state.detail.data);
  useEffect(() => {
    dispatch(getDetailData(restaurant_id));
  }, [dispatch, restaurant_id]);
  return (
    <>
      <Header />
      <DetailImage {...item} />
      <MyPageButton />
      <StyledFavorite>{like ? <RiHeartFill /> : null}</StyledFavorite>
      <DetailInfo {...item} />
      <Tabs item={item} />
    </>
  );
};

export default Detail;

const StyledFavorite = styled.div`
  left: 10px;
  top: 150px;
  font-size: 30px;
  height: 30px;
  width: 30px;
  background-color: white;
  border-radius: 50%;
  color: #f44336;
  position: absolute;
  transform: translateY(-20px);
  box-shadow: 1px 1px 15px #ccc;
  z-index: 1;
`;
