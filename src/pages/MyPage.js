import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Liked from "../components/myPage/Liked";
import Comments from "../components/myPage/Comments";
import Edit from "../components/myPage/Edit";

const MyPage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const tabArray = [
    {
      tabTitle: (
        <span
          className={tabIndex === 0 ? "select" : ""}
          onClick={() => setTabIndex(0)}
        >
          Liked
        </span>
      ),
      tabContent: <Liked />,
    },
    {
      tabTitle: (
        <span
          className={tabIndex === 1 ? "select" : ""}
          onClick={() => setTabIndex(1)}
        >
          Comments
        </span>
      ),
      tabContent: <Comments />,
    },
    {
      tabTitle: (
        <span
          className={tabIndex === 2 ? "select" : ""}
          onClick={() => setTabIndex(2)}
        >
          Edit
        </span>
      ),
      tabContent: <Edit />,
    },
  ];

  return (
    <>
      <Header />
      <StyledTabTitle>
        {tabArray.map((tab) => {
          return tab.tabTitle;
        })}
      </StyledTabTitle>
      <StyledTabContent>{tabArray[tabIndex].tabContent}</StyledTabContent>
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
