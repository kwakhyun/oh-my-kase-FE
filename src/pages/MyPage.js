import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Liked from "../components/myPage/Liked";
import Comments from "../components/myPage/Comments";
import Edit from "../components/myPage/Edit";
import MyPageButton from "../components/buttons/MyPageButton";
import LogInOutButton from "../components/buttons/LogInOutButton";
import SideNav from "../components/main/sidemenu/SideNav";

const MyPage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const tabArray = [
    {
      key: "liked",
      title: (
        <span
          className={tabIndex === 0 ? "select" : ""}
          onClick={() => setTabIndex(0)}
        >
          찜 목록
        </span>
      ),
      content: <Liked />,
    },
    {
      key: "comments",
      title: (
        <span
          className={tabIndex === 1 ? "select" : ""}
          onClick={() => setTabIndex(1)}
        >
          내 댓글
        </span>
      ),
      content: <Comments />,
    },
    {
      key: "edit",
      title: (
        <span
          className={tabIndex === 2 ? "select" : ""}
          onClick={() => setTabIndex(2)}
        >
          정보 수정
        </span>
      ),
      content: <Edit />,
    },
  ];

  return (
    <>
      <Header />
      <SideNav />
      <StyledTabTitle>
        {tabArray.map((tab) => {
          return <div key={tab.key}>{tab.title}</div>;
        })}
      </StyledTabTitle>
      <StyledTabContent>{tabArray[tabIndex].content}</StyledTabContent>
    </>
  );
};

const StyledTabTitle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  cursor: pointer;
  span {
    padding: 10px 0;
  }
  .select {
    border-bottom: 1px solid black;
  }
  span:hover {
    border-bottom: 1px solid black;
  }
`;

const StyledTabContent = styled.div`
  width: 90vw;
  margin: 40px 20px;
`;

export default MyPage;
