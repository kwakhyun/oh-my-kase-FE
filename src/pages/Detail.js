import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { TiStar, TiStarOutline } from "react-icons/ti";
import MyPageButton from "../components/buttons/MyPageButton";
import DetailInfo from "../components/detail/DetailInfo";
import Tabs from "../components/detail/Tabs";
import DetailImage from "../components/detail/DetailImage";

const Detail = () => {
  const [like, setLike] = useState(false);
  return (
    <>
      <Header />
      <DetailImage/>
      <MyPageButton />

      <StyledFavorite
        onClick={() => {
          setLike(!like);
        }}
      >
        {like ? <TiStar /> : <TiStarOutline />}
      </StyledFavorite>
      <DetailInfo />
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
