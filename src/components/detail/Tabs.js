import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import styled from "styled-components";
import Information from "./Information";
import Menu from "./Menu";
import Review from "./review/Review";

const Tabs = ({ item }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const { restaurant_id } = useParams();
  const getComments = async () => {
    return await axios.get(
      `http://3.34.48.111/api/restaurant/${restaurant_id}/comment`,
      {
        headers: {
          Authorization: localStorage.getItem("accessToken"),
          "refresh-token": localStorage.getItem("refreshToken"),
        },
      }
    );
  };

  const { data } = useQuery("comments", getComments);

  const comments = data?.data.data;

  const commentLength = comments?.length;
  const tabArray = [
    {
      tabTitle: (
        <div
          className={tabIndex === 0 ? "select" : ""}
          onClick={() => setTabIndex(0)}
        >
          메뉴
        </div>
      ),
      tabContent: <Menu />,
    },
    {
      tabTitle: (
        <div
          className={tabIndex === 1 ? "select" : ""}
          onClick={() => setTabIndex(1)}
        >
          정보
        </div>
      ),
      tabContent: <Information {...item} />,
    },
    {
      tabTitle: (
        <div
          className={tabIndex === 2 ? "select" : ""}
          onClick={() => setTabIndex(2)}
        >
          리뷰 ({commentLength})
        </div>
      ),
      tabContent: <Review comments={comments} />,
    },
  ];

  return (
    <>
      <StyledTab>
        {tabArray.map((tab, idx) => (
          <StyledTabTitle key={idx}>{tab.tabTitle}</StyledTabTitle>
        ))}
      </StyledTab>
      <StyledDiv>{tabArray[tabIndex].tabContent}</StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin: 20px auto 100px;
  border-radius: 5px;
  font-size: 0.7em;
  box-shadow: 2px 80px 30px grey;
  word-break: break-all;
`;
const StyledTab = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  div {
    padding: 10px 0;
  }
  .select {
    border-bottom: 1px solid black;
  }
`;

const StyledTabTitle = styled.div``;

export default Tabs;
