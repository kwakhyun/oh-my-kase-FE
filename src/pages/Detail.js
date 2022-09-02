import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { TiStar, TiStarOutline } from "react-icons/ti";
import MyPageButton from "../components/buttons/MyPageButton";
import DetailInfo from "../components/detail/DetailInfo";
import Information from "../components/detail/Information";
import Menu from "../components/detail/Menu";
import Review from "../components/detail/Review";

const Detail = () => {
  const [like, setLike] = useState(false);
  const [tabSelect, setTabSelect] = useState("menu");
  console.log(tabSelect);
  return (
    <>
      <Header />
      <StyledImg
        src="https://postimagestorage.s3.amazonaws.com/mini_project/4.jpg"
        alt="img"
      />
      <MyPageButton />

      <StyledFavorite
        onClick={() => {
          setLike(!like);
        }}
      >
        {like ? <TiStar /> : <TiStarOutline />}
      </StyledFavorite>
      <DetailInfo />
      <StyledTab>
        {tabSelect === "menu" ? (
          <StyledSelectedTabItem
            onClick={() => {
              setTabSelect("menu");
            }}
          >
            메뉴
          </StyledSelectedTabItem>
        ) : (
          <StyledTabItem
            onClick={() => {
              setTabSelect("menu");
            }}
          >
            메뉴
          </StyledTabItem>
        )}
        {tabSelect === "information" ? (
          <StyledSelectedTabItem
            onClick={() => {
              setTabSelect("information");
            }}
          >
            정보
          </StyledSelectedTabItem>
        ) : (
          <StyledTabItem
            onClick={() => {
              setTabSelect("information");
            }}
          >
            정보
          </StyledTabItem>
        )}
        {tabSelect === "review" ? (
          <StyledSelectedTabItem
            onClick={() => {
              setTabSelect("review");
            }}
          >
            리뷰
          </StyledSelectedTabItem>
        ) : (
          <StyledTabItem
            onClick={() => {
              setTabSelect("review");
            }}
          >
            리뷰
          </StyledTabItem>
        )}
      </StyledTab>
      <hr />
      <StyledDiv>
        {tabSelect === "menu" ? (
          <Menu />
        ) : tabSelect === "information" ? (
          <Information />
        ) : tabSelect === "review" ? (
          <Review />
        ) : null}
      </StyledDiv>
    </>
  );
};

export default Detail;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin: 20px auto;
  border-radius: 5px;
  font-size: 0.7em;
  box-shadow: 1px 1px 15px grey;
`;
const StyledImg = styled.img`
  object-fit: cover;
  width: 100vw;
  height: 400px;
  margin: 0 auto 0;
`;

const StyledFavorite = styled.div`
  font-size: 60px;
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
  text-decoration-thickness: 5px;
`;
