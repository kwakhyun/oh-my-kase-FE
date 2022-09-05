import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Liked from "../components/myPage/Liked";
import Comments from "../components/myPage/Comments";
import Edit from "../components/myPage/Edit";
import MyPageButton from "../components/buttons/MyPageButton";
import LogInOutButton from "../components/buttons/LogInOutButton";

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
          Liked
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
          Comments
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
          Edit
        </span>
      ),
      content: <Edit />,
    },
  ];

  return (
    <>
      <Header />
      <LogInOutButton/>
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
  span {
    padding: 10px 0;
  }
  .select {
    border-bottom: 1px solid black;
  }
`;

const StyledTabContent = styled.div``;

export default MyPage;
