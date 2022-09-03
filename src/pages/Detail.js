import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { TiStar, TiStarOutline } from "react-icons/ti";
import MyPageButton from "../components/buttons/MyPageButton";
import DetailInfo from "../components/detail/DetailInfo";
import DetailImage from "../components/detail/DetailImage";
import { useDispatch, useSelector } from "react-redux";
import { __getData } from "../redux/modules/mainSlice";
import { useParams } from "react-router-dom";
import Tabs from "../components/detail/Tabs";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [like, setLike] = useState(false);
  const items = useSelector((state) =>
    state.main.data
  );
  const item = items.find((item) => item.id === id)

  const test = useSelector(state=>state)
  console.log(test)

  // const item = items.
  useEffect(() => {
    dispatch(__getData());
  }, [dispatch]);

  return (
    <>
      <Header />
      <DetailImage {...item} />
      <MyPageButton />
      <StyledFavorite>{like ? <TiStar /> : <TiStarOutline />}</StyledFavorite>
      <DetailInfo {...item} />
      <Tabs />
    </>
  );
};

export default Detail;

const StyledFavorite = styled.div`
  font-size: 30px;
  left: 10px;
  top: 150px;
  color: #ffcc33;
  position: absolute;
  transform: translateY(-20px);
  z-index: 1;
`;
