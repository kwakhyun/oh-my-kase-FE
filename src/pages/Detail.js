import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { TiStar, TiStarOutline } from "react-icons/ti";
import MyPageButton from "../components/buttons/MyPageButton";

const Detail = () => {
  const [like, setLike] = useState(false);
  return (
    <>
      <Header />
      <MyPageButton />
      <StyledDiv>
        <StyledImg
          src="https://postimagestorage.s3.amazonaws.com/mini_project/4.jpg"
          alt="img"
        />
        <div>
          <StyledFavorite
            onClick={() => {
              setLike(!like);
            }}
          >
            {like ? <TiStar /> : <TiStarOutline />}
          </StyledFavorite>
          <StyledTab>
            <h1>매뉴</h1>
            <h1>정보</h1>
            <h1>리뷰</h1>
          </StyledTab>
          <StyledText size="20px">오마카세 오사이초밥 홍대점</StyledText>
          <StyledText size="15px">서울 마포구 연희로1길 11 2층</StyledText>
          <StyledText size="40px">4.8</StyledText>
          <StyledText size="18px">런치 50,000 디너 80,000</StyledText>
          <StyledText size="16px" line="30px">
            압도'는 이름 그대로 고객을 압도하기 위해 부단히 노력한다는 저희의
            포부입니다. 고객분들에게 어떤 식재료를 어떻게, 그리고 코스 간의
            조화와 흐름을 깊게 고민하며, 고객께서 만족할만한 음식을 만들기 위해
            부단히 노력해나가고 있습니다. 고객을 압도하기 위해 가장 중요한
            노력으로 모든 식재료에 대해 엄격하게 품질검수하여 최상의 상태로
            제공하겠습니다.
          </StyledText>
        </div>
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
  width: 90vw;
  height: 400px;
  margin: 0 auto 0;
  overflow: hidden;
  background-color: #eeeeee;
`;
const StyledText = styled.h1`
  font-size: ${(props) => props.size || "25px"};
  margin: 40px;
  line-height: ${(props) => props.line || "30px"};
`;
const StyledFavorite = styled.div`
  margin: 10px;
  font-size: 30px;
  right: 25px;
  height: 33px;
  width: 33px;
  border-radius: 50%;
  color: #ffcc33;
  position: absolute;
  align-items: center;
  background-color: transparent;
  box-shadow: 1px 1px 15px #ccc;
`;
const StyledTab = styled.div`
  display: flex;
  margin: auto;
  width: 90vw;
`;
