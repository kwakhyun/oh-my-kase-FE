import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { TiStar, TiStarOutline } from "react-icons/ti";
import MyPageButton from "../components/buttons/MyPageButton";
import DetailInfo from "../components/detail/DetailInfo";
import DetailImage from "../components/detail/DetailImage";
import { useDispatch, useSelector } from "react-redux";
import { __getData } from "../redux/modules/infoSlice";
import { useParams } from "react-router-dom";
import Tabs from "../components/detail/Tabs";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [like, setLike] = useState(false);
  const item = useSelector((state) =>
    state.info.data.find((item) => item.id === id)
  );
  useEffect(() => {
    dispatch(__getData());
  }, [dispatch]);

  return (
    <>
      <Header />
      <DetailImage img = {item.img} />
      <MyPageButton />
      <StyledFavorite>
        {like ? <TiStar /> : <TiStarOutline />}
      </StyledFavorite>
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

const StyledTab = styled.div`
  display: flex;
  width: 80vw;
  margin: auto;
`;
const StyledTabItem = styled.div`
  width: 200px;
  padding: 5px;
  font-size: 25px;
  margin: auto;
`;
const StyledSelectedTabItem = styled.div`
  width: 200px;
  padding: 5px;
  font-size: 25px;
  margin: auto;
  text-decoration-line: underline;
  text-decoration-thickness: 3px;
`;
